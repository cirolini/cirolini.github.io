const ROLES = [
  {
    period: "2022 — Present",
    role: "Sr. Manager, Product Development",
    org: "ADP Labs Brazil",
    note: "Leading engineering teams building large-scale HR products. Focus on platform reliability, AI integration, and team growth.",
  },
  {
    period: "2020 — 2022",
    role: "Engineering Manager",
    org: "ADP",
    note: "Scaled product engineering org; introduced SRE practices and observability tooling across teams.",
  },
  {
    period: "2017 — 2020",
    role: "DevOps / SRE Lead",
    org: "Industry",
    note: "Platform modernization, CI/CD, infrastructure-as-code, and production monitoring at scale.",
  },
  {
    period: "2013 — 2017",
    role: "Senior Software Engineer",
    org: "Telefónica / Terra Networks",
    note: "Worked on SecurityHub — an integration platform used by O2 (UK), Movistar (LATAM) and VIVO (Brazil). Led migration from Spain to Brazil infra and a full platform re-engineering.",
  },
  {
    period: "2005 — 2013",
    role: "Software Developer",
    org: "Various",
    note: "Backend engineering, integrations and early leadership roles.",
  },
];

const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="section-grid">
        <div className="section-label">
          <span className="mono">03 / Experience</span>
        </div>
        <div className="section-body">
          <p className="lede">
            Two decades across software engineering, DevOps/SRE, and engineering
            leadership — increasingly toward applied AI and research.
          </p>
        </div>
      </div>

      <ol className="timeline">
        {ROLES.map((r, i) => (
          <li key={i} className="timeline-item">
            <div className="timeline-period mono">{r.period}</div>
            <div className="timeline-body">
              <div className="timeline-role">{r.role}</div>
              <div className="timeline-org">{r.org}</div>
              <p className="timeline-note">{r.note}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

window.Experience = Experience;
