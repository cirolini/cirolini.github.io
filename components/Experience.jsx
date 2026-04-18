const ROLES = [
  {
    period: "2022 — Present",
    role: "Sr. Manager, Product Development",
    org: "ADP Labs Brazil",
    note: "Leading engineering teams building large-scale HR products. Focus on platform reliability, AI integration, and team growth.",
  },
  {
    period: "2020 — Present",
    role: "Sr. SRE Manager",
    org: "Azion",
    note: "Platform modernization, CI/CD, infrastructure-as-code, and production monitoring at scale.",
  },
  {
    period: "2013 — 2017",
    role: "Senior Technology Architect",
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

const EDUCATION = [
  {
    period: "2024 — Present",
    role: "M.Sc. in Applied Computing",
    org: "Focus: Artificial Intelligence",
    note: "Thesis in progress — a lightweight intent classifier based on semantic vectors.",
  },
  {
    period: "2017 — 2019",
    role: "Graduate Specialization — Big Data & Data Science",
    org: "UFRGS · Universidade Federal do Rio Grande do Sul",
    note: "Large-scale data management, analytical processing, visualization, and cloud computing — both theory and hands-on tooling.",
  },
];

const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="section-grid">
        <div className="section-label">
          <span className="section-num">0<em>3</em></span>
          <span className="section-sub">Experience</span>
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

      <div className="section-grid" style={{marginTop: 80}}>
        <div className="section-label">
          <span className="section-num">0<em>4</em></span>
          <span className="section-sub">Education</span>
        </div>
        <div className="section-body">
          <p className="lede">
            Graduate work in data and AI — currently completing a master's on
            intent detection.
          </p>
        </div>
      </div>

      <ol className="timeline">
        {EDUCATION.map((r, i) => (
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
