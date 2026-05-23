insert into public.schools (name, domain, country, state, website)
values
  ('Pacific Technical University', 'ptu.edu', 'US', 'WA', 'https://ptu.edu'),
  ('North Grove State College', 'ngsc.edu', 'US', 'IL', 'https://ngsc.edu'),
  ('Metro School of Design', 'msd.edu', 'US', 'NY', 'https://msd.edu')
on conflict (domain) do nothing;

insert into public.skills (category, name, description, is_sensitive)
values
  ('tutoring', 'Calculus tutoring', 'Study sessions, concept review, and assignment prep for calculus courses.', false),
  ('tutoring', 'Programming tutoring', 'Help with intro programming, debugging, and project structure.', false),
  ('career-help', 'Resume review', 'Resume markup and targeted feedback for internships and entry roles.', false),
  ('career-help', 'Mock interview', 'Structured interview practice with actionable improvement notes.', false),
  ('fitness', 'Workout planning', 'Educational guidance for beginner-friendly workout structure.', true),
  ('design', 'Logo design', 'Brand mark concepts and visual refinement for student projects.', false),
  ('design', 'UI critique', 'Usability feedback and layout improvements for interface work.', false),
  ('music', 'Songwriting feedback', 'Hook, structure, and lyric refinement for draft songs.', false),
  ('photography', 'Portrait editing', 'Color and composition edits for profile and portfolio images.', false)
on conflict do nothing;
