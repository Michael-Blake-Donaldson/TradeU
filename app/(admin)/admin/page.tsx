import { moderationReports } from "@/lib/mock/tradeu";

export default function AdminPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-6">
        <section className="surface rounded-[32px] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Moderation</p>
          <h1 className="section-heading mt-3 text-3xl font-semibold text-ink">
            The MVP admin view should prioritize reports, disputes, and auditability.
          </h1>
        </section>

        <section className="grid gap-5">
          {moderationReports.map((report) => (
            <article key={report.id} className="surface rounded-[32px] p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{report.reason}</p>
                  <h2 className="section-heading mt-2 text-2xl font-semibold text-ink">{report.target}</h2>
                  <p className="mt-2 text-sm text-slate-600">Reported by {report.reporter}</p>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  {report.status.replaceAll("_", " ")}
                </span>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-700">{report.evidenceSummary}</p>
              <div className="mt-5 text-sm text-muted">Submitted {report.submittedAt}</div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}