const Hero = () => {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-meta reveal" style={{animationDelay: '0.1s'}}>
          <span className="status-dot" />
          <span className="mono">Available for research &amp; advisory</span>
        </div>

        <h1 className="hero-title">
          <span className="reveal-line"><span style={{animationDelay: '0.2s'}}>Rafael Cirolini.</span></span>
          <span className="reveal-line"><span style={{animationDelay: '0.35s'}}>
            Engineering leader working at the
          </span></span>
          <span className="reveal-line"><span style={{animationDelay: '0.5s'}}>
            intersection of <em>product</em> and <em>applied AI</em>.
          </span></span>
        </h1>

        <div className="hero-foot reveal" style={{animationDelay: '0.8s'}}>
          <div className="hero-bio">
            <p>
              Sr. Manager of Product Development at ADP Labs Brazil. Master's student
              in Applied Computing with focus on Artificial Intelligence. 20+ years
              building software, teams, and the systems underneath.
            </p>
          </div>
          <div className="hero-loc">
            <div className="mono label">Based in</div>
            <div>Brazil · remote-first</div>
            <div className="mono label" style={{marginTop: 18}}>Now</div>
            <div>ADP Labs · Research · Teaching</div>
          </div>
        </div>
      </div>

      <div className="hero-scroll reveal" style={{animationDelay: '1.1s'}}>
        <span className="mono">scroll</span>
        <span className="scroll-line" />
      </div>
    </section>
  );
};

window.Hero = Hero;
