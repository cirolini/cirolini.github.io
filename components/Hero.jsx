const useScramble = (text, delay = 0, speed = 50) => {
  const [out, setOut] = React.useState("");
  React.useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let i = 0;
    let raf;
    const t = setTimeout(() => {
      const tick = () => {
        const target = text;
        const revealed = target.slice(0, Math.floor(i));
        const scrambled = target.slice(Math.floor(i)).split("").map(c => {
          if (c === " " || c === "." || c === ",") return c;
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("");
        setOut(revealed + scrambled);
        i += 0.8;
        if (i < target.length + 1) raf = requestAnimationFrame(tick);
        else setOut(target);
      };
      tick();
    }, delay);
    return () => { clearTimeout(t); cancelAnimationFrame(raf); };
  }, [text, delay, speed]);
  return out || "\u00A0".repeat(text.length);
};

const Hero = () => {
  const name = useScramble("Rafael Cirolini.", 200);
  const year = new Date().getFullYear();

  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-meta reveal" style={{animationDelay: '0.1s'}}>
          <span className="status-dot" />
          <span className="mono">Available for research &amp; advisory</span>
        </div>

        <h1 className="hero-title">
          <span className="reveal-line"><span style={{animationDelay: '0.2s'}}>{name}</span></span>
          <span className="reveal-line"><span style={{animationDelay: '0.55s'}}>
            Engineering leader working at the
          </span></span>
          <span className="reveal-line"><span style={{animationDelay: '0.7s'}}>
            intersection of <em>product</em> and <em>applied AI</em>.
          </span></span>
        </h1>

        <div className="hero-foot reveal" style={{animationDelay: '1.0s'}}>
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

      <div className="hero-scroll reveal" style={{animationDelay: '1.4s'}}>
        <span className="mono">scroll</span>
        <span className="scroll-line" />
      </div>
    </section>
  );
};

window.Hero = Hero;
