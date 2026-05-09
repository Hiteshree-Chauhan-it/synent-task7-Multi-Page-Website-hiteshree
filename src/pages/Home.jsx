import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  // Learning level cards data
  const levels = [
    {   
      icon: '🌱',
      title: 'Beginner',
      desc: 'Variables, Data Types, Input/Output — start your journey!',
      color: '#39ff14',
      topics: 'Variables · Data Types · I/O',
    },
    {
      icon: '⚡',
      title: 'Intermediate',
      desc: 'Loops, Arrays, Functions — level up your skills!',
      color: '#00d4ff',
      topics: 'Loops · Arrays · Functions',
    },
    {
      icon: '🔥',
      title: 'Advanced',
      desc: 'Pointers, OOP, Memory — become a C++ pro!',
      color: '#ff2d78',
      topics: 'Pointers · OOP · Memory',
    },
  ];

  // Feature list
  const features = [
    { icon: '🎮', text: 'Learn through interactive quizzes' },
    { icon: '🏆', text: 'Earn scores and track progress' },
    { icon: '📚', text: 'Beginner-friendly explanations' },
    { icon: '⚡', text: 'No boring textbooks needed' },
  ];

  return (
    <main className="home">

      {/* ── Hero Section ── */}
      <section className="hero">
        <div className="hero-badge">🎮 Gamified C++ Learning</div>
        <h1 className="hero-title">
          Learn <span className="accent-green">C++</span><br />
          by <span className="accent-pink">Playing</span>
        </h1>
        <p className="hero-subtitle">
          Stop reading boring theory. Play games, take quizzes,
          and master C++ concepts — one level at a time! 🚀
        </p>
        <div className="hero-buttons">
          <Link to="/services" className="btn-neon">
            🕹 Start Playing
          </Link>
          <Link to="/about" className="btn-neon blue">
            Learn More
          </Link>
        </div>

        {/* Floating decorative code */}
        <div className="hero-code-float">
          <span className="line"><span className="kw">int</span> main() {'{'}</span>
          <span className="line">  <span className="kw">cout</span> &lt;&lt; <span className="str">"Hello, World!"</span>;</span>
          <span className="line">  <span className="kw">return</span> <span className="num">0</span>;</span>
          <span className="line">{'}'}</span>
        </div>
      </section>

      {/* ── Levels Section ── */}
      <section className="levels-section">
        <div className="section-header">
          <h2 className="section-title">Choose Your <span className="accent-blue">Level</span></h2>
          <p className="section-sub">Pick where you are and start learning!</p>
        </div>

        <div className="levels-grid">
          {levels.map((level, i) => (
            <div key={i} className="level-card" style={{ '--lc': level.color }}>
              <div className="level-icon">{level.icon}</div>
              <h3 className="level-name">{level.title}</h3>
              <p className="level-desc">{level.desc}</p>
              <div className="level-topics">{level.topics}</div>
              <Link to="/services" className="level-btn">Start →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features Section ── */}
      <section className="features-section">
        <h2 className="section-title">Why <span className="accent-yellow">ClashCode?</span></h2>
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-item">
              <span className="feature-icon">{f.icon}</span>
              <span>{f.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="cta-banner">
        <h2>Ready to become a <span className="accent-green">C++ Champion?</span></h2>
        <p>Join thousands of students learning C++ through fun and games!</p>
        <Link to="/services" className="btn-neon">
          🎮 Play Now — It's Free!
        </Link>
      </section>

    </main>
  );
}

export default Home;