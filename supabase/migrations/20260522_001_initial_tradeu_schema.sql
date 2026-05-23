create extension if not exists "pgcrypto";

create type verification_status as enum ('unverified', 'pending', 'verified_student', 'rejected');
create type tier_key as enum ('Beginner', 'Intermediate', 'Expert', 'Mentor');
create type trade_preference as enum ('direct trade', 'credit trade', 'hybrid trade');
create type listing_status as enum ('draft', 'active', 'paused', 'removed');
create type trade_request_status as enum ('pending', 'accepted', 'declined', 'countered', 'cancelled', 'expired');
create type trade_status as enum ('in_progress', 'pending_completion', 'completed', 'disputed', 'cancelled');
create type credit_transaction_status as enum ('pending', 'released', 'refunded', 'reversed');
create type credit_transaction_type as enum ('earn_pending', 'earn_released', 'spend_hold', 'spend_released', 'refund', 'adjustment', 'penalty');
create type report_status as enum ('open', 'under_review', 'resolved', 'dismissed');

create table if not exists public.schools (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  domain text not null unique,
  country text,
  state text,
  website text,
  created_at timestamptz not null default now()
);

create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  display_name text not null,
  school_id uuid references public.schools(id),
  field_of_study text not null,
  theme_key text not null,
  bio text default '',
  avatar_url text,
  tier tier_key not null default 'Beginner',
  rating_avg numeric(3,2) not null default 0,
  completed_trades_count integer not null default 0,
  response_rate numeric(5,2) not null default 0,
  dispute_rate numeric(5,2) not null default 0,
  verification_status verification_status not null default 'unverified',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.skills (
  id uuid primary key default gen_random_uuid(),
  category text not null,
  name text not null,
  description text,
  is_sensitive boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.listings (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  skill_id uuid references public.skills(id),
  title text not null,
  description text not null,
  trade_preference trade_preference not null,
  credit_min integer not null default 0,
  credit_max integer not null default 0,
  expected_time text not null,
  tier_required tier_key not null default 'Beginner',
  status listing_status not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint listing_credit_order check (credit_max >= credit_min)
);

create table if not exists public.wanted_skills (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  skill_id uuid references public.skills(id),
  notes text,
  priority integer not null default 1,
  created_at timestamptz not null default now()
);

create table if not exists public.trade_requests (
  id uuid primary key default gen_random_uuid(),
  requester_id uuid not null references public.profiles(id) on delete cascade,
  provider_id uuid not null references public.profiles(id) on delete cascade,
  listing_id uuid not null references public.listings(id) on delete cascade,
  type trade_preference not null,
  offered_listing_id uuid references public.listings(id),
  offered_credits integer not null default 0,
  message text not null,
  success_criteria text not null,
  deadline text,
  status trade_request_status not null default 'pending',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.trades (
  id uuid primary key default gen_random_uuid(),
  request_id uuid not null references public.trade_requests(id) on delete cascade,
  requester_id uuid not null references public.profiles(id) on delete cascade,
  provider_id uuid not null references public.profiles(id) on delete cascade,
  status trade_status not null default 'in_progress',
  credits_held integer not null default 0,
  success_criteria text not null,
  due_date text,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.credit_transactions (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  trade_id uuid references public.trades(id) on delete cascade,
  amount integer not null,
  type credit_transaction_type not null,
  status credit_transaction_status not null default 'pending',
  created_at timestamptz not null default now()
);

create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  trade_id uuid not null references public.trades(id) on delete cascade,
  reviewer_id uuid not null references public.profiles(id) on delete cascade,
  reviewee_id uuid not null references public.profiles(id) on delete cascade,
  rating integer not null check (rating between 1 and 5),
  text text,
  category_tags text[] default '{}',
  created_at timestamptz not null default now()
);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  trade_id uuid not null references public.trades(id) on delete cascade,
  sender_id uuid not null references public.profiles(id) on delete cascade,
  body text not null,
  attachment_url text,
  created_at timestamptz not null default now()
);

create table if not exists public.reports (
  id uuid primary key default gen_random_uuid(),
  reporter_id uuid not null references public.profiles(id) on delete cascade,
  target_type text not null,
  target_id uuid not null,
  reason text not null,
  details text not null,
  status report_status not null default 'open',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.portfolio_items (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  description text,
  file_url text,
  link_url text,
  category text,
  visibility text not null default 'public',
  created_at timestamptz not null default now()
);

create table if not exists public.verification_attempts (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  method text not null,
  email_domain text,
  status verification_status not null default 'pending',
  reviewed_by uuid references public.profiles(id),
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.listings enable row level security;
alter table public.trades enable row level security;
alter table public.messages enable row level security;
alter table public.credit_transactions enable row level security;
alter table public.reports enable row level security;
alter table public.portfolio_items enable row level security;

create policy "profiles readable to authenticated users"
on public.profiles
for select
to authenticated
using (true);

create policy "profile owners update their profile"
on public.profiles
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "active listings readable to authenticated users"
on public.listings
for select
to authenticated
using (status = 'active');

create policy "listing owners manage their listings"
on public.listings
for all
to authenticated
using (
  exists (
    select 1 from public.profiles
    where public.profiles.id = listings.profile_id
      and public.profiles.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1 from public.profiles
    where public.profiles.id = listings.profile_id
      and public.profiles.user_id = auth.uid()
  )
);

create policy "trade participants read their trades"
on public.trades
for select
to authenticated
using (
  exists (
    select 1
    from public.profiles
    where public.profiles.user_id = auth.uid()
      and public.profiles.id in (trades.requester_id, trades.provider_id)
  )
);

create policy "trade participants read their messages"
on public.messages
for select
to authenticated
using (
  exists (
    select 1
    from public.trades
    join public.profiles on public.profiles.user_id = auth.uid()
    where public.trades.id = messages.trade_id
      and public.profiles.id in (public.trades.requester_id, public.trades.provider_id)
  )
);

create policy "trade participants send their messages"
on public.messages
for insert
to authenticated
with check (
  exists (
    select 1
    from public.trades
    join public.profiles on public.profiles.user_id = auth.uid()
    where public.trades.id = messages.trade_id
      and public.profiles.id in (public.trades.requester_id, public.trades.provider_id)
      and public.profiles.id = messages.sender_id
  )
);

create policy "owners read credit transactions"
on public.credit_transactions
for select
to authenticated
using (
  exists (
    select 1 from public.profiles
    where public.profiles.id = credit_transactions.profile_id
      and public.profiles.user_id = auth.uid()
  )
);

create policy "reporters read their reports"
on public.reports
for select
to authenticated
using (
  exists (
    select 1 from public.profiles
    where public.profiles.id = reports.reporter_id
      and public.profiles.user_id = auth.uid()
  )
);

create policy "authenticated users can create reports"
on public.reports
for insert
to authenticated
with check (
  exists (
    select 1 from public.profiles
    where public.profiles.id = reports.reporter_id
      and public.profiles.user_id = auth.uid()
  )
);

create policy "public portfolio items visible"
on public.portfolio_items
for select
to authenticated
using (visibility = 'public');

create policy "owners manage portfolio items"
on public.portfolio_items
for all
to authenticated
using (
  exists (
    select 1 from public.profiles
    where public.profiles.id = portfolio_items.profile_id
      and public.profiles.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1 from public.profiles
    where public.profiles.id = portfolio_items.profile_id
      and public.profiles.user_id = auth.uid()
  )
);