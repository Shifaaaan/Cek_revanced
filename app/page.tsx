const quickLinks = [
  { number: "01", title: "Academics", description: "Explore departments, programmes and learning resources.", href: "#academics" },
  { number: "02", title: "Admissions", description: "Find your way to joining the CEK community.", href: "#admissions" },
  { number: "03", title: "Campus life", description: "Discover clubs, student initiatives and campus culture.", href: "#campus-life" },
  { number: "04", title: "Notices", description: "A clear home for announcements and important dates.", href: "#notices" },
];

export default function Home() {
  return (
    <main>
      <div className="announcement">
        <span className="announcement-dot" aria-hidden="true" />
        Student-first campus information, thoughtfully organised.
        <a href="#notices">Explore updates <span aria-hidden="true">↗</span></a>
      </div>

      <header className="site-header">
        <a className="brand" href="#" aria-label="CEK Platform home">
          <span className="brand-mark">C<span>E</span>K</span>
          <span className="brand-copy"><strong>CEK Platform</strong><small>College of Engineering Karunagappally</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#academics">Academics</a>
          <a href="#admissions">Admissions</a>
          <a href="#campus-life">Campus life</a>
          <a href="#notices">Notices</a>
        </nav>
        <a className="portal-button" href="#portal">Campus portal <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span /> BUILT AROUND THE CEK COMMUNITY</p>
          <h1>A campus that<br />moves <em>forward.</em></h1>
          <p className="hero-description">Your starting point for campus updates, academic pathways and the people shaping what comes next at CEK.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#explore">Explore the platform <span aria-hidden="true">↗</span></a>
            <a className="text-button" href="#about">Get to know CEK <span aria-hidden="true">→</span></a>
          </div>
          <div className="hero-footnote"><span className="footnote-line" /> A digital home for campus life, learning and discovery.</div>
        </div>
        <div className="hero-art" aria-label="Abstract architectural illustration inspired by a college campus" role="img">
          <div className="art-sun" />
          <div className="art-grid" />
          <div className="art-building building-back"><i /><i /><i /><i /></div>
          <div className="art-building building-front"><i /><i /><i /><i /><i /><i /></div>
          <div className="art-ground" />
          <div className="art-label"><span>CEK / 01</span><strong>Curiosity into capability.</strong></div>
          <span className="art-coordinate">9° N · KERALA, INDIA</span>
        </div>
      </section>

      <section className="ticker" aria-label="Platform principles">
        <span>LEARN WITH PURPOSE</span><b>✳</b><span>BUILD WHAT MATTERS</span><b>✳</b><span>GROW TOGETHER</span><b>✳</b><span>MAKE ROOM FOR IDEAS</span>
      </section>

      <section className="explore section-wrap" id="explore">
        <div className="section-heading">
          <div><p className="eyebrow">THE CAMPUS, CONNECTED</p><h2>Find your next<br /><em>starting point.</em></h2></div>
          <p>Less searching. More discovering. The essentials of campus life, brought into one considered space.</p>
        </div>
        <div className="link-grid">
          {quickLinks.map((item) => (
            <a className="link-card" href={item.href} key={item.number}>
              <span className="card-number">{item.number}</span>
              <span className="card-arrow" aria-hidden="true">↗</span>
              <h3>{item.title}</h3><p>{item.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="about-band" id="about">
        <div className="about-stamp">LEARN<br />MAKE<br />MATTER<span>✳</span></div>
        <div><p className="eyebrow">A WORK IN PROGRESS, BUILT WITH CARE</p><h2>Good campus experiences<br />start with <em>good information.</em></h2><p className="about-copy">CEK Platform is being shaped to make institutional information easier to find, understand and use — while keeping accuracy, accessibility and student privacy at the centre.</p></div>
      </section>

      <section className="notice-section section-wrap" id="notices">
        <div className="notice-heading"><div><p className="eyebrow">STAY IN THE LOOP</p><h2>Important things,<br /><em>made visible.</em></h2></div><span className="verification-tag"><span /> CONTENT IN VERIFICATION</span></div>
        <div className="notice-row"><span className="notice-date">01 / NOTE</span><strong>Official announcements will appear here.</strong><span className="notice-status">Coming soon</span></div>
        <p className="verification-note">Institutional details and announcements will be published after verification against official college sources.</p>
      </section>

      <section className="portal-section" id="portal">
        <div><p className="eyebrow">A MORE CONNECTED CAMPUS</p><h2>One campus.<br /><em>More possibilities.</em></h2><p>The student and staff portal is planned as a later phase. Secure access and verified institutional data will be required before it goes live.</p></div>
        <div className="portal-panel"><span className="portal-icon">↗</span><span className="portal-panel-label">CEK / CAMPUS PORTAL</span><h3>Designed for the people<br />who make CEK.</h3><p>Student services · Staff tools · Campus information</p><span className="portal-disabled">Portal in development</span></div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#"><span className="brand-mark">C<span>E</span>K</span><span className="brand-copy"><strong>CEK Platform</strong><small>College of Engineering Karunagappally</small></span></a>
        <p>Built with care for the campus community.<br />Independent platform concept; official affiliation and details are pending verification.</p>
        <a className="footer-top" href="#">Back to top ↑</a>
      </footer>
    </main>
  );
}