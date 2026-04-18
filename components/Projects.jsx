const FEATURED = {
  name: "genai-code-review",
  tag: "Featured · GitHub Marketplace Action",
  blurb: "Automates pull request reviews with OpenAI GPT models. Listed on the GitHub Marketplace — configurable prompts, modes and languages. Used by teams in production to catch issues before humans do.",
  stars: 362,
  forks: 69,
  year: "2024",
  href: "https://github.com/cirolini/genai-code-review",
};

const PROJECTS = [
  {
    name: "prometheus-curso-monitoring",
    tag: "Course · Python",
    blurb: "A full course on Prometheus and Grafana — observability in the real world. Queries, exporters, alerting and production patterns.",
    peek: "// 12 modules · PromQL · Alertmanager · Blackbox Exporter · Grafana dashboards · real-world incident patterns",
    stars: 377,
    forks: 124,
    year: "2023",
    href: "https://github.com/cirolini/prometheus-curso-monitoring",
  },
  {
    name: "chatgpt-github-actions",
    tag: "GitHub Action",
    blurb: "Original ChatGPT-powered code review action for pull requests. Predecessor to genai-code-review; still actively forked.",
    peek: "// The one that started it all · v1.4 · 4 configurable modes · still getting forks in 2026",
    stars: 311,
    forks: 47,
    year: "2023",
    href: "https://github.com/cirolini/chatgpt-github-actions",
  },
];

const MAX_STARS = Math.max(FEATURED.stars, ...PROJECTS.map(p => p.stars || 0));

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="section-grid">
        <div className="section-label">
          <span className="section-num">0<em>2</em></span>
          <span className="section-sub">Selected work</span>
        </div>
        <div className="section-body">
          <p className="lede">
            Open source tools, labs and teaching material — mostly around applied AI,
            observability and developer experience.
          </p>
        </div>
      </div>

      {/* Featured */}
      <a href={FEATURED.href} target="_blank" rel="noopener" className="featured-project">
        <div>
          <div className="featured-tag">{FEATURED.tag}</div>
          <h3 className="featured-name">{FEATURED.name}</h3>
          <p className="featured-blurb">{FEATURED.blurb}</p>
          <div className="featured-stats">
            <div className="featured-stat">
              <div className="num">{FEATURED.stars}</div>
              <div className="label">GitHub stars</div>
            </div>
            <div className="featured-stat">
              <div className="num">{FEATURED.forks}</div>
              <div className="label">Forks</div>
            </div>
            <div className="featured-stat">
              <div className="num">{FEATURED.year}</div>
              <div className="label">Since</div>
            </div>
          </div>
        </div>
        <div className="featured-mock" aria-hidden>
          <div className="mock-bar"><span></span><span></span><span></span></div>
          <div><span className="c"># .github/workflows/review.yml</span></div>
          <div><span className="k">name</span>: Code Review</div>
          <div><span className="k">on</span>: pull_request</div>
          <div><span className="k">jobs</span>:</div>
          <div>&nbsp;&nbsp;review:</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;runs-on: ubuntu-latest</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;steps:</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- <span className="k">uses</span>: cirolini/genai-code-review@v2</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="k">with</span>:</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;openai_api_key: ${'{{'} secrets.OPENAI_API_KEY {'}}'}</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;openai_model: <span className="c">"gpt-4o"</span></div>
        </div>
      </a>

      <div className="projects-list" style={{marginTop: 48}}>
        {PROJECTS.map((p, i) => {
          const scale = p.stars ? (p.stars / MAX_STARS).toFixed(2) : 0.08;
          return (
            <a key={p.name} href={p.href} target="_blank" rel="noopener" className="project-row">
              <div className="project-num mono">{String(i + 2).padStart(2, '0')}</div>
              <div className="project-main">
                <h3 className="project-name">{p.name}</h3>
                <p className="project-blurb">{p.blurb}</p>
                <div className="project-peek">{p.peek}</div>
              </div>
              <div className="project-meta">
                <div className="mono small muted">{p.tag}</div>
                {p.stars != null ? (
                  <>
                    <div className="mono small">★ {p.stars.toLocaleString()} · ⑂ {p.forks}</div>
                    <div className="star-bar-wrap">
                      <div className="star-bar" style={{"--bar-scale": scale}} />
                    </div>
                  </>
                ) : (
                  <div className="mono small muted">lab · no stars tracked</div>
                )}
                <div className="mono small muted">{p.year}</div>
              </div>
              <div className="project-arrow" aria-hidden>↗</div>
            </a>
          );
        })}
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
