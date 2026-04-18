const SKILL_GROUPS = [
  {
    label: "Applied AI",
    items: ["LLM integration", "RAG pipelines", "Reinforcement learning", "NLP", "Simulation & agents", "Prompt engineering"],
  },
  {
    label: "Engineering",
    items: ["Python", "Node.js", "Backend architecture", "API design", "System design", "Distributed systems"],
  },
  {
    label: "Platform & SRE",
    items: ["Prometheus", "Grafana", "Observability", "CI/CD", "DevSecOps", "GitHub Actions", "Kubernetes"],
  },
  {
    label: "Leadership",
    items: ["Engineering management", "Team scaling", "Technical strategy", "Mentoring", "Hiring", "Developer education"],
  },
];

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="section-grid">
        <div className="section-label">
          <span className="mono">04 / Practice</span>
        </div>
        <div className="section-body">
          <p className="lede">
            Where I spend my time — a mix of research, shipping, and helping teams
            grow.
          </p>
        </div>
      </div>

      <div className="skills-grid">
        {SKILL_GROUPS.map(g => (
          <div key={g.label} className="skill-col">
            <div className="skill-label mono">{g.label}</div>
            <ul className="skill-list">
              {g.items.map(it => <li key={it}>{it}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

window.Skills = Skills;
