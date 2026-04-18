const POSTS = [
  {
    title: "Code review with LLMs: what actually works in production",
    date: "2024",
    kind: "Essay",
    blurb: "Lessons from shipping genai-code-review — where LLMs help, where they don't, and the surprising role of prompt scope.",
  },
  {
    title: "Observability is a product decision, not an ops one",
    date: "2024",
    kind: "Essay",
    blurb: "Why the strongest teams I've worked with treat metrics, logs and traces as first-class product artifacts.",
  },
  {
    title: "From DevOps to AI — a twenty-year thread",
    date: "2023",
    kind: "Note",
    blurb: "A personal piece on how platform engineering prepared me for the current wave of applied AI engineering.",
  },
  {
    title: "Small experiments, compounding returns",
    date: "2023",
    kind: "Note",
    blurb: "How a weekly habit of tiny prototypes quietly becomes research, courses, and product ideas.",
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
          <div className="section-label"><span className="section-num">0<em>5</em></span><span className="section-sub">Writing</span></div>
          <div className="section-body">
            <p className="lede">
              Short essays and notes — mostly on engineering practice and applied AI.
            </p>
          </div>
        </div>
        <ul className="writing-list">
          {POSTS.map((p, i) => (
            <li key={i} className="writing-row">
              <div className="mono small muted">{p.date} · {p.kind}</div>
              <h3 className="writing-title">{p.title}</h3>
              <p className="writing-blurb">{p.blurb}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section" id="talks">
        <div className="section-grid">
          <div className="section-label"><span className="section-num">0<em>6</em></span><span className="section-sub">Talks</span></div>
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
          <div className="section-label"><span className="section-num">0<em>7</em></span><span className="section-sub">Publications</span></div>
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
