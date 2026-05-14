import { useEffect, useRef } from 'react';
import './MindmapPage.css';

export default function MindmapPage() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const navRef = useRef(null);

  // Fonts, cursor:none on body
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=JetBrains+Mono:wght@300;400;500;700&family=Figtree:wght@300;400;500;600&display=swap';
    document.head.appendChild(link);
    document.body.style.cursor = 'none';
    return () => {
      document.head.removeChild(link);
      document.body.style.cursor = '';
    };
  }, []);

  // Custom cursor
  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    let rafId;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    };

    const animRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      rafId = requestAnimationFrame(animRing);
    };
    animRing();
    document.addEventListener('mousemove', onMove);

    const interactables = document.querySelectorAll('a, button, .agent-card');
    const onEnter = () => {
      cursor.style.width = '18px';
      cursor.style.height = '18px';
      ring.style.width = '52px';
      ring.style.height = '52px';
    };
    const onLeave = () => {
      cursor.style.width = '10px';
      cursor.style.height = '10px';
      ring.style.width = '36px';
      ring.style.height = '36px';
    };
    interactables.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      interactables.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  // Nav scroll class
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll reveal
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    reveals.forEach((r) => obs.observe(r));
    return () => obs.disconnect();
  }, []);

  // Animated metric counters
  useEffect(() => {
    const data = [
      { val: 15, suf: '+' },
      { val: 97, suf: '%' },
      { val: 50, suf: '%' },
      { val: 70, suf: '%' },
    ];

    const animCounter = (el, target, suffix) => {
      let start = null;
      const dur = 1800;
      const step = (ts) => {
        if (!start) start = ts;
        const progress = Math.min((ts - start) / dur, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(ease * target) + (suffix || '');
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const metricsRow = document.querySelector('.metrics-row');
    if (!metricsRow) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const nums = e.target.querySelectorAll('.metric-num');
            nums.forEach((n, i) => { if (data[i]) animCounter(n, data[i].val, data[i].suf); });
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(metricsRow);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="cv-page">
      <div className="cv-noise" />
      <div className="cv-cursor" ref={cursorRef} />
      <div className="cv-cursor-ring" ref={ringRef} />

      {/* Nav */}
      <nav id="cv-nav" ref={navRef}>
        <a href="#" className="cv-nav-logo">fc.dev</a>
        <div className="cv-nav-links">
          <a href="#executor">Executor</a>
          <a href="#experience">Experience</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="hero-tag">SOFTWARE ENGINEER · SDET · AI SYSTEMS</div>
          <h1 className="hero-name">
            Fernando<br /><em>Campos</em>
          </h1>
          <p className="hero-tagline">
            I didn't transition into AI. <strong>I built with it.</strong><br />
            15+ years designing automation systems — now building agents that reason about code.
          </p>
          <div className="hero-verdict">
            <div className="verdict-pill pill-approve">✓ APPROVE</div>
            <div className="verdict-pill pill-warn">⚠ WARN</div>
            <div className="verdict-pill pill-block">✕ BLOCK</div>
          </div>
          <div className="hero-cta">
            <a href="#contact" className="cv-btn cv-btn-primary">Get in Touch →</a>
            <a href="#executor" className="cv-btn cv-btn-ghost">See Executor</a>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-line" />
          SCROLL TO EXPLORE
        </div>
      </section>

      <div className="cv-divider" />

      {/* About */}
      <section id="about">
        <div className="section-inner">
          <div className="about-grid">
            <div className="about-text reveal">
              <p>
                Software Engineer specialized in{' '}
                <strong>test automation and system design</strong> with 15+ years delivering
                quality engineering at scale.
              </p>
              <p>
                Currently building AI systems that don't just assist engineers —{' '}
                <strong>they do the work</strong>. From reading a PR diff to delivering a merge
                verdict, without a human in the loop.
              </p>
              <p>
                Background spans enterprise QA at{' '}
                <strong>Volkswagen, FEMSA, OpenGov, IBM, and Intel</strong> — now focused where
                automation meets intelligent reasoning.
              </p>
            </div>
            <div className="about-card reveal reveal-delay-2">
              <div className="about-card-title">// AT A GLANCE</div>
              <div className="about-stat-row">
                <span className="about-stat-label">experience</span>
                <span className="about-stat-val">15+</span>
              </div>
              <div className="about-stat-row">
                <span className="about-stat-label">data accuracy</span>
                <span className="about-stat-val">97%</span>
              </div>
              <div className="about-stat-row">
                <span className="about-stat-label">cycle reduction</span>
                <span className="about-stat-val">50%</span>
              </div>
              <div className="about-stat-row">
                <span className="about-stat-label">efficiency gain</span>
                <span className="about-stat-val">70%</span>
              </div>
              <div className="about-stat-row">
                <span className="about-stat-label">location</span>
                <span
                  className="about-stat-val"
                  style={{ fontSize: '16px', fontFamily: 'var(--font-mono)' }}
                >
                  GDL · Remote
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cv-divider" />

      {/* Executor */}
      <section className="executor-section" id="executor">
        <div className="section-inner">
          <div className="section-label reveal">FEATURED PROJECT</div>
          <h2 className="section-title reveal reveal-delay-1">
            Executor —<br /><em>Autonomous</em> QA
          </h2>

          <div className="executor-grid">
            <div>
              <p className="executor-desc reveal reveal-delay-1">
                An autonomous testing system built for <strong>Trustate</strong> (legal-tech). It
                reads a PR diff, understands what changed and why it matters, and delivers a
                verdict — without a human in the loop.
              </p>
              <div className="executor-highlight reveal reveal-delay-2">
                <p>
                  <span>Executor</span> doesn't run scripts — it <span>reasons</span>.<br />
                  No manual test authorship. No static selectors.<br />
                  The system understands the diff, the domain, and the risk.
                </p>
              </div>
              <p className="executor-desc reveal reveal-delay-3" style={{ fontSize: '16px' }}>
                Built on <strong>198k characters</strong> of indexed legal domain knowledge from
                16 transcribed Trustate Academy videos — giving agents the context to know what
                actually matters in an estate planning platform.
              </p>
            </div>

            <div className="reveal reveal-delay-2">
              <div className="terminal">
                <div className="terminal-bar">
                  <div className="dot dot-r" />
                  <div className="dot dot-y" />
                  <div className="dot dot-g" />
                  <div className="terminal-title">executor run --pr 247</div>
                </div>
                <div className="terminal-body">
                  <div><span className="t-comment">// analyzing diff...</span></div>
                  <br />
                  <div><span className="t-key">diff_summary</span>: <span className="t-str">"auth middleware refactor"</span></div>
                  <div><span className="t-key">risk_level</span>: <span className="t-num">"HIGH"</span></div>
                  <div><span className="t-key">agents_activated</span>: <span className="t-num">7</span><span className="t-comment"> / 12</span></div>
                  <br />
                  <div><span className="t-comment">// agents running...</span></div>
                  <div><span className="t-prompt">›</span> DiffAnalyzerAgent   <span className="t-val">✓</span></div>
                  <div><span className="t-prompt">›</span> ClassifierAgent     <span className="t-val">✓</span></div>
                  <div><span className="t-prompt">›</span> ValidatorAgent      <span className="t-val">✓</span></div>
                  <div><span className="t-prompt">›</span> PlannerAgent        <span className="t-val">✓</span></div>
                  <div><span className="t-prompt">›</span> OWASPAgent          <span className="t-val">✓</span> <span className="t-comment">(conditional)</span></div>
                  <div><span className="t-prompt">›</span> TestGeneratorAgent  <span className="t-val">✓</span></div>
                  <div><span className="t-prompt">›</span> ExecutorAgent       <span className="t-val">✓</span></div>
                  <br />
                  <div><span className="t-key">tests_generated</span>: <span className="t-num">14</span></div>
                  <div><span className="t-key">tests_passed</span>:    <span className="t-num">11</span></div>
                  <div><span className="t-key">tests_failed</span>:    <span className="t-num">3</span></div>
                  <br />
                  <div><span className="t-key">verdict</span>: <span className="t-warn">⚠ WARN</span></div>
                  <div><span className="t-comment">// 3 auth edge cases need review</span></div>
                  <br />
                  <div><span className="t-prompt">$</span> <span className="t-cursor" /></div>
                </div>
              </div>
            </div>
          </div>

          {/* Agent Architecture */}
          <div style={{ marginTop: '80px' }}>
            <div className="section-label reveal">AGENT ARCHITECTURE</div>
            <h3
              className="reveal reveal-delay-1"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '32px',
                marginBottom: '40px',
                letterSpacing: '-0.02em',
              }}
            >
              12 specialized agents.<br />Each with one job.
            </h3>
            <div className="agents-grid">
              {[
                { name: 'DiffAnalyzerAgent',   badge: 'CORE',        desc: 'Reads the git diff and determines what changed and why it matters in the context of the application.' },
                { name: 'ClassifierAgent',     badge: 'CORE',        desc: 'Decides which agents to activate. A CSS-only change never triggers OWASP or RegressionGuard.' },
                { name: 'ValidatorAgent',      badge: 'CORE',        desc: 'Confirms a spec exists before planning anything. No spec — no tests. Ensures quality gates hold.' },
                { name: 'PlannerAgent',        badge: 'CORE',        desc: 'Designs the test plan and maps each test to an acceptance criterion from the spec.' },
                { name: 'TestDataAgent',       badge: 'CORE',        desc: 'Generates fixtures with Faker and sanitizes real data when needed for realistic test scenarios.' },
                { name: 'TestGeneratorAgent',  badge: 'CORE',        desc: 'Writes the actual test files — contextual, targeted, non-duplicative tests for the diff at hand.' },
                { name: 'ExecutorAgent',       badge: 'CORE',        desc: 'Runs the generated tests against the application and collects results for the reporter.' },
                { name: 'ReporterAgent',       badge: 'CORE',        desc: 'Evaluates results, calculates impact, and delivers the final verdict: APPROVE, WARN, or BLOCK.' },
                { name: 'MemoryAgent',         badge: 'CORE',        desc: 'Updates test-memory.md after every run so coverage is never duplicated in future executions.' },
                { name: 'OWASPAgent',          badge: 'CONDITIONAL', desc: 'Activates when the diff touches authentication or sensitive data. Runs security-focused test scenarios.' },
                { name: 'RegressionGuardAgent',badge: 'CONDITIONAL', desc: 'Activates when critical user flows are touched. Protects long multi-step sequences from regression.' },
                { name: 'ExploratoryAgent',    badge: 'CONDITIONAL', desc: 'Maps the app by navigating the real DOM via Playwright MCP using indexed domain knowledge.' },
              ].map((agent, i) => (
                <div key={agent.name} className={`agent-card reveal${i % 4 !== 0 ? ` reveal-delay-${i % 4}` : ''}`}>
                  <div className="agent-name">{agent.name}</div>
                  <div className={`agent-badge${agent.badge === 'CONDITIONAL' ? ' conditional' : ''}`}>
                    {agent.badge}
                  </div>
                  <p className="agent-desc">{agent.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="cv-divider" />

      {/* Metrics */}
      <section style={{ padding: 0 }}>
        <div className="metrics-row">
          {[
            { num: '15+', label: 'YEARS EXPERIENCE' },
            { num: '97%', label: 'DATA ACCURACY' },
            { num: '50%', label: 'CYCLE REDUCTION' },
            { num: '70%', label: 'EFFICIENCY GAIN' },
          ].map((m, i) => (
            <div key={m.label} className={`metric reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
              <div className="metric-num">{m.num}</div>
              <div className="metric-label">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="cv-divider" />

      {/* Experience */}
      <section id="experience">
        <div className="section-inner">
          <div className="section-label reveal">WORK HISTORY</div>
          <h2 className="section-title reveal reveal-delay-1">
            Where I've<br /><em>shipped</em>
          </h2>

          <div className="exp-list">
            <div className="exp-item reveal">
              <div className="exp-meta">
                <div className="exp-period">2024 — PRESENT</div>
                <div className="exp-company">Trustate<br />Legal-Tech · Freelance</div>
              </div>
              <div>
                <h3 className="exp-title">Executor</h3>
                <div className="exp-subtitle">AUTONOMOUS AI TESTING SYSTEM</div>
                <div className="exp-bullets">
                  <div className="exp-bullet">Architected a 12-agent system that reads PR diffs and delivers merge verdicts autonomously</div>
                  <div className="exp-bullet">Built RAG knowledge layer over <strong>198k chars</strong> of legal domain content using Chroma + HuggingFace</div>
                  <div className="exp-bullet">Integrated GitHub Actions CI/CD — triggers on PR, posts structured report, sets commit status</div>
                  <div className="exp-bullet">Full observability via LangSmith: per-agent traces, token usage, and latency metrics</div>
                </div>
              </div>
            </div>

            <div className="exp-item reveal">
              <div className="exp-meta">
                <div className="exp-period">09/2023 — PRESENT</div>
                <div className="exp-company">Volkswagen Financial Services<br />VWFS México</div>
              </div>
              <div>
                <h3 className="exp-title">QA Automation Engineer</h3>
                <div className="exp-subtitle">AUTOMATION SYSTEMS · TYPESCRIPT · PLAYWRIGHT</div>
                <div className="exp-bullets">
                  <div className="exp-bullet">Architected modular automation framework in TypeScript + Playwright — adopted as team standard</div>
                  <div className="exp-bullet">Built API contract validation layer with Pactum + Jest, catching breaking changes pre-staging</div>
                  <div className="exp-bullet">Designed K6 performance baseline strategy — established SLA thresholds and automated regression detection</div>
                  <div className="exp-bullet">Introduced AI-assisted change analysis: <strong>diff-to-risk classification</strong> reducing manual triage on high-velocity PRs</div>
                </div>
              </div>
            </div>

            <div className="exp-item reveal">
              <div className="exp-meta">
                <div className="exp-period">02/2022 — 09/2023</div>
                <div className="exp-company">DIGITAL@FEMSA<br />LATAM Digital Commerce</div>
              </div>
              <div>
                <h3 className="exp-title">Data QA Engineer</h3>
                <div className="exp-subtitle">AWS · GCP · GREAT EXPECTATIONS · DATA PIPELINES</div>
                <div className="exp-bullets">
                  <div className="exp-bullet">Achieved <strong>97% data accuracy</strong> across large-scale validation pipelines (up from ~80% baseline)</div>
                  <div className="exp-bullet">Reduced QA cycle time by <strong>50%</strong> through full automation of data quality processes</div>
                  <div className="exp-bullet">Architected end-to-end validation: AWS S3 → Athena → PostgreSQL using Great Expectations</div>
                </div>
              </div>
            </div>

            <div className="exp-item reveal">
              <div className="exp-meta">
                <div className="exp-period">12/2019 — 02/2022</div>
                <div className="exp-company">OpenGov (Terminal)<br />US GovTech · Remote</div>
              </div>
              <div>
                <h3 className="exp-title">QA / SDET</h3>
                <div className="exp-subtitle">SELENIUM · JAVA · AUTOMATION-FIRST</div>
                <div className="exp-bullets">
                  <div className="exp-bullet">Led transition from 100% manual testing to automation-first strategy across product teams</div>
                  <div className="exp-bullet">Built Selenium/Java frameworks from scratch — established QA maturity standards org-wide</div>
                </div>
              </div>
            </div>

            <div className="exp-item reveal">
              <div className="exp-meta">
                <div className="exp-period">10+ YEARS</div>
                <div className="exp-company">Enterprise<br />HCL · Amdocs · HP · IBM<br />TCS · Intel · Dextra</div>
              </div>
              <div>
                <h3 className="exp-title">Senior QA / Automation Lead</h3>
                <div className="exp-subtitle">SELENIUM · JAVA · BDD · ENTERPRISE SCALE</div>
                <div className="exp-bullets">
                  <div className="exp-bullet">Designed automation frameworks and led testing strategies across telecom, semiconductor, ERP, and fintech</div>
                  <div className="exp-bullet">Led cross-functional teams building automation where none existed — consistently at enterprise scale</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cv-divider" />

      {/* Stack */}
      <section id="stack">
        <div className="section-inner">
          <div className="section-label reveal">TECHNOLOGY</div>
          <h2 className="section-title reveal reveal-delay-1">The <em>stack</em></h2>
          <div className="stack-grid">
            {[
              'TypeScript', 'Python 3.11', 'Node.js 20', 'LangGraph',
              'LangChain', 'Claude Sonnet', 'Playwright', 'Playwright MCP',
              'Chroma DB', 'LangSmith', 'Jest + Pactum', 'K6',
              'AWS', 'GCP', 'GitHub Actions', 'Selenium',
              'Great Expectations', 'HuggingFace MiniLM', 'Whisper + ffmpeg', 'AES-256-GCM',
            ].map((tech, i) => (
              <div key={tech} className={`stack-item reveal${i % 4 !== 0 ? ` reveal-delay-${i % 4}` : ''}`}>
                <div className="stack-dot" />
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="footer-cta" id="contact">
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h2 className="footer-title reveal">
            If you're building<br />something that needs to<br /><em>reason about code</em> —
          </h2>
          <p className="footer-sub reveal reveal-delay-1">
            Open to remote roles in AI Systems, SDET, and QA Architecture. US and international.
          </p>
          <div className="contact-links reveal reveal-delay-2">
            <a href="mailto:hfer.cc@gmail.com" className="contact-link">hfer.cc@gmail.com</a>
            <a href="https://linkedin.com/in/campos-fernando" className="contact-link" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/refnando" className="contact-link" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <div style={{ marginTop: '48px' }} className="reveal reveal-delay-3">
            <a
              href="mailto:hfer.cc@gmail.com"
              className="cv-btn cv-btn-primary"
              style={{ fontSize: '15px', padding: '16px 36px' }}
            >
              Let's talk →
            </a>
          </div>
          <div
            className="reveal reveal-delay-4"
            style={{
              marginTop: '80px',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--text-dim)',
              letterSpacing: '0.1em',
            }}
          >
            GUADALAJARA, MÉXICO · OPEN TO REMOTE
          </div>
        </div>
      </section>
    </div>
  );
}
