const Now = () => (
  <section className="now-strip" id="now">
    <div className="now-head">
      <h2 className="now-title">What I'm doing <em>now</em>.</h2>
      <span className="now-date">Updated April 2026</span>
    </div>
    <ul className="now-list">
      <li className="now-item">
        <div className="now-kicker">Research</div>
        <div className="now-body">
          Working on my master's thesis — a lightweight intent classifier
          based on semantic vectors, aiming for low-latency inference without
          the overhead of full LLMs.
        </div>
      </li>
      <li className="now-item">
        <div className="now-kicker">Building</div>
        <div className="now-body">
          Shipping LLM-integrated assistants at ADP Labs and guiding teams
          toward <em style={{color:'var(--accent)'}}>AI agentic coding</em> practices.
        </div>
      </li>
      <li className="now-item">
        <div className="now-kicker">Teaching</div>
        <div className="now-body">
          Teaching Software Quality at Unisinos — both undergraduate and
          graduate programs.
        </div>
      </li>
    </ul>
  </section>
);

window.Now = Now;
