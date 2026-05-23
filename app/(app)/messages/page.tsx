import { messageThreads } from "@/lib/mock/tradeu";
import { TradeStatusBadge } from "@/components/tradeu/status-badge";

export default function MessagesPage() {
  const activeThread = messageThreads[0];

  return (
    <div className="grid gap-6 xl:grid-cols-[360px_minmax(0,1fr)]">
      <section className="surface rounded-[32px] p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Messages</p>
        <div className="mt-5 grid gap-3">
          {messageThreads.map((thread) => (
            <article key={thread.id} className="rounded-[24px] border border-slate-200 px-4 py-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-ink">{thread.counterpart}</p>
                  <p className="mt-1 text-sm text-slate-600">{thread.tradeTitle}</p>
                </div>
                {thread.unreadCount ? (
                  <span className="rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-white">
                    {thread.unreadCount}
                  </span>
                ) : null}
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{thread.preview}</p>
              <div className="mt-4 flex items-center justify-between gap-3">
                <TradeStatusBadge status={thread.status} />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  {thread.updatedAt}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="surface rounded-[32px] p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Trade thread</p>
            <h1 className="section-heading mt-2 text-2xl font-semibold text-ink">{activeThread.tradeTitle}</h1>
            <p className="mt-1 text-sm text-slate-600">Conversation with {activeThread.counterpart}</p>
          </div>
          <TradeStatusBadge status={activeThread.status} />
        </div>

        <div className="mt-6 grid gap-4">
          {activeThread.messages.map((message) => (
            <article key={message.id} className="rounded-[26px] bg-slate-50 px-5 py-5">
              <div className="flex items-center justify-between gap-4">
                <p className="font-semibold text-ink">{message.sender}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{message.sentAt}</p>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-700">{message.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-[26px] border border-dashed border-slate-200 px-5 py-5 text-sm leading-6 text-slate-600">
          Keep communication on-platform. Future enforcement will block obvious off-platform contact sharing
          and attach files directly to the trade record.
        </div>
      </section>
    </div>
  );
}