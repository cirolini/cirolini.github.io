const MetricStrip = () => (
  <div className="metric-strip">
    <div className="metric-strip-inner">
      <div className="metric">
        <div className="metric-num">20<em>+</em></div>
        <div className="metric-label">Years in engineering</div>
      </div>
      <div className="metric">
        <div className="metric-num">1.4<em>k+</em></div>
        <div className="metric-label">GitHub stars</div>
      </div>
      <div className="metric">
        <div className="metric-num">6<em>+</em></div>
        <div className="metric-label">Open source projects</div>
      </div>
      <div className="metric">
        <div className="metric-num">2</div>
        <div className="metric-label">Courses authored</div>
      </div>
    </div>
  </div>
);

window.MetricStrip = MetricStrip;
