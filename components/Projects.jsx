const PROJECTS = [
  {
    name: "genai-code-review",
    tag: "GitHub Action · Python",
    blurb: "Automates pull request reviews with OpenAI GPT models. Listed on the GitHub Marketplace; configurable prompts, modes and languages.",
    stars: 362,
    forks: 69,
    year: "2024",
    href: "https://github.com/cirolini/genai-code-review",
  },
  {
    name: "prometheus-curso-monitoring",
    tag: "Course · Python",
    blurb: "A full course on Prometheus and Grafana — observability in the real world. Queries, exporters, alerting and production patterns.",
    stars: 377,
    forks: 124,
    year: "2023",
    href: "https://github.com/cirolini/prometheus-curso-monitoring",
  },
  {
    name: "chatgpt-github-actions",
    tag: "GitHub Action",
    blurb: "Original ChatGPT-powered code review action for pull requests. Predecessor to genai-code-review; still actively forked.",
    stars: 311,
    forks: 47,
    year: "2023",
    href: "https://github.com/cirolini/chatgpt-github-actions",
  },
  {
    name: "prometheus-lab",
    tag: "Infra · Lab",
    blurb: "Companion lab for the Prometheus course. Sample targets, exporters, and dashboards used to teach observability end-to-end.",
    stars: null,
    forks: null,
    year: "2023",
    href: "https://github.com/cirolini/prometheus-lab",
  },
  {
    name: "pushgateway-github-actions",
    tag: "GitHub Action",
    blurb: "Ships pipeline metrics from GitHub Actions into Prometheus via Pushgateway. A small but practical observability bridge.",
    stars: null,
    forks: null,
    year: "2023",
    href: "https://github.com/cirolini/pushgateway-github-actions",
  },
  {
    name: "nginx-cache-labs",
    tag: "Infra · Lab",
    blurb: "Hands-on experiments with nginx caching strategies — TTL, purging, layered caches and measurement.",
    stars: null,
    forks: null,
    year: "2024",
    href: "https://github.com/cirolini/nginx-cache-labs",
  },
];

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="section-grid">
        <div className="section-label">
          <span className="mono">02 / Selected work</span>
        </div>
        <div className="section-body">
          <p className="lede">
            Open source tools, labs and teaching material — mostly around applied AI,
            observability and developer experience.
          </p>
        </div>
      </div>

      <div className="projects-list">
        {PROJECTS.map((p, i) => (
          <a key={p.name} href={p.href} target="_blank" rel="noopener" className="project-row">
            <div className="project-num mono">{String(i + 1).padStart(2, '0')}</div>
            <div className="project-main">
              <h3 className="project-name">{p.name}</h3>
              <p className="project-blurb">{p.blurb}</p>
            </div>
            <div className="project-meta">
              <div className="mono small muted">{p.tag}</div>
              {p.stars != null && (
                <div className="mono small">★ {p.stars.toLocaleString()} · ⑂ {p.forks}</div>
              )}
              <div className="mono small muted">{p.year}</div>
            </div>
            <div className="project-arrow" aria-hidden>↗</div>
          </a>
        ))}
      </div>

      <div className="projects-foot">
        <a href="https://github.com/cirolini" target="_blank" rel="noopener" className="ghost-link">
          All repositories on GitHub <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
};

window.Projects = Projects;
