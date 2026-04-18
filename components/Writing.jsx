const POSTS = [
  {
    title: "Moovio — A Multi-Agent Architecture with OpenAI: Routing Intentions with Intelligence",
    date: "Jul 2025",
    kind: "Essay",
    blurb: "When a single assistant can't do it all, it's time to think like an architecture. How I built Moovio's multi-agent reasoning.",
    href: "https://www.linkedin.com/in/cirolini/recent-activity/articles/",
  },
  {
    title: "Moovio — Bringing Responses to Life: Migrating from APIs to SSE Streaming",
    date: "Jun 2025",
    kind: "Essay",
    blurb: "In GenAI products, how the response is delivered matters just as much as what it says. Replacing REST with SSE changed everything.",
    href: "https://www.linkedin.com/in/cirolini/recent-activity/articles/",
  },
  {
    title: "Moovio — From Clicks to Conversations: Building a Fully Conversational GenAI Interface",
    date: "Jun 2025",
    kind: "Essay",
    blurb: "What if the entire UI was just a conversation? No forms, no menus — only a natural back-and-forth with a smart assistant.",
    href: "https://www.linkedin.com/in/cirolini/recent-activity/articles/",
  },
];

const TALKS = [
  { title: "Applied AI in enterprise products", venue: "Internal tech talk · ADP Labs", year: "2024" },
  { title: "Observability in the real world", venue: "Prometheus & Grafana course", year: "2023" },
  { title: "GitHub Actions for AI workflows", venue: "Community meetup", year: "2023" },
  { title: "From CI/CD to DevSecOps", venue: "University lecture series", year: "2022" },
];

const PUBS = [
  {
    title: "A lightweight intent classifier based on semantic vectors",
    venue: "Master's thesis — Applied Computing, in progress",
    year: "2026",
  },
];

const Writing = () => {
  return (
    <>
      <section className="section" id="writing">
        <div className="section-grid">
          <div className="section-label"><span className="section-num">0<em>6</em></span><span className="section-sub">Writing</span></div>
          <div className="section-body">
            <p className="lede">
              Essays on applied GenAI — mostly from building <em style={{color:'var(--accent)'}}>Moovio</em>,
              a conversational assistant. Published on LinkedIn and Substack.
            </p>
          </div>
        </div>
        <ul className="writing-list">
          {POSTS.map((p, i) => (
            <li key={i} className="writing-row">
              <div className="mono small muted">{p.date} · {p.kind}</div>
              <h3 className="writing-title">
                <a href={p.href} target="_blank" rel="noopener">{p.title}</a>
              </h3>
              <p className="writing-blurb">{p.blurb}</p>
            </li>
          ))}
        </ul>
        <div className="writing-foot">
          <a href="https://www.linkedin.com/in/cirolini/recent-activity/articles/" target="_blank" rel="noopener" className="ghost-link">
            All articles on LinkedIn <span aria-hidden>→</span>
          </a>
          <a href="https://cirolini.substack.com/" target="_blank" rel="noopener" className="ghost-link">
            Also on Substack <span aria-hidden>→</span>
          </a>
        </div>
      </section>

      <section className="section" id="talks">
        <div className="section-grid">
          <div className="section-label"><span className="section-num">0<em>7</em></span><span className="section-sub">Talks</span></div>
          <div className="section-body">
            <p className="lede">Lectures, community talks and course material.</p>
          </div>
        </div>
        <ul className="simple-list">
          {TALKS.map((t, i) => (
            <li key={i} className="simple-row">
              <div className="simple-year mono">{t.year}</div>
              <div>
                <div className="simple-title">{t.title}</div>
                <div className="simple-meta">{t.venue}</div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="section" id="publications">
        <div className="section-grid">
          <div className="section-label"><span className="section-num">0<em>8</em></span><span className="section-sub">Publications</span></div>
          <div className="section-body">
            <p className="lede">Current master's research — low-latency intent detection without full LLMs.</p>
          </div>
        </div>
        <ul className="simple-list">
          {PUBS.map((p, i) => (
            <li key={i} className="simple-row">
              <div className="simple-year mono">{p.year}</div>
              <div>
                <div className="simple-title">{p.title}</div>
                <div className="simple-meta">{p.venue}</div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

window.Writing = Writing;
