const About = () => {
  return (
    <section className="section" id="about">
      <div className="section-grid">
        <div className="section-label">
          <span className="section-num">0<em>1</em></span>
          <span className="section-sub">About</span>
        </div>
        <div className="section-body">
          <p className="lede">
            I lead engineering teams building large-scale HR products at ADP Labs Brazil,
            while researching applied AI as a graduate student in Applied Computing.
          </p>
          <p>
            My path started in software development two decades ago and evolved through
            DevOps, SRE and technical leadership. In recent years I have been focused on
            applied Artificial Intelligence — both in industry and academia — with particular
            interest in reinforcement learning, language model integration, and the
            engineering practices that make AI systems reliable in production.
          </p>
          <p>
            Outside of work I write and teach: software quality, CI/CD, DevSecOps,
            and modern engineering practices. I maintain a personal lab where small
            prototypes sometimes grow into courses, talks, or product ideas.
          </p>
        </div>
      </div>
    </section>
  );
};

window.About = About;
