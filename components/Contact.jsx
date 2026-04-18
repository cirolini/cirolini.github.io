const Contact = () => {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-grid">
        <div className="section-label"><span className="section-num">0<em>8</em></span><span className="section-sub">Contact</span></div>
        <div className="section-body">
          <h2 className="contact-head">
            Let's talk about <em>engineering</em>, <em>AI</em>, or <em>research</em>.
          </h2>
          <p className="lede" style={{marginTop: 24}}>
            Open to advisory, research collaboration, guest lectures and the occasional
            thoughtful product conversation.
          </p>
        </div>
      </div>

      <div className="contact-grid">
        <a className="contact-card" href="https://github.com/cirolini" target="_blank" rel="noopener">
          <div className="mono small muted">GitHub</div>
          <div className="contact-handle">@cirolini</div>
          <div className="contact-go" aria-hidden>↗</div>
        </a>
        <a className="contact-card" href="https://www.linkedin.com/in/cirolini/" target="_blank" rel="noopener">
          <div className="mono small muted">LinkedIn</div>
          <div className="contact-handle">in/cirolini</div>
          <div className="contact-go" aria-hidden>↗</div>
        </a>
        <a className="contact-card" href="https://cirolini.com.br/" target="_blank" rel="noopener">
          <div className="mono small muted">Lab</div>
          <div className="contact-handle">cirolini.com.br</div>
          <div className="contact-go" aria-hidden>↗</div>
        </a>
        <a className="contact-card" href="#" onClick={(e) => { e.preventDefault(); window.print(); }}>
          <div className="mono small muted">Resume</div>
          <div className="contact-handle">Download CV</div>
          <div className="contact-go" aria-hidden>↓</div>
        </a>
      </div>

      <footer className="site-foot">
        <div className="mono small muted">© {new Date().getFullYear()} Rafael Cirolini</div>
        <div className="mono small muted">Built with care · Last updated April 2026</div>
      </footer>
    </section>
  );
};

window.Contact = Contact;
