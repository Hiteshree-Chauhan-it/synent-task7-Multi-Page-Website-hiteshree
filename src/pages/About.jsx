import React from 'react';
import '../styles/About.css';

function About() {
  // Benefits data
  const benefits = [
    { icon: '🧠', title: 'Better Retention', desc: 'Playing games helps your brain remember concepts 3x better than reading!' },
    { icon: '🎯', title: 'Instant Feedback', desc: 'Know right away if your answer is correct — no waiting for a teacher.' },
    { icon: '🔥', title: 'Stay Motivated', desc: 'Scores, levels, and rewards keep you coming back for more.' },
    { icon: '🚀', title: 'Learn Faster', desc: 'Active learning through quizzes beats passive reading every time.' },
    { icon: '🏆', title: 'Feel Accomplished', desc: 'Completing levels gives real satisfaction — like finishing a game!' },
    { icon: '💡', title: 'Understand Deeply', desc: 'Short focused topics = true understanding, not memorization.' },
  ];

  return (
    <main className="about-page">

      {/* ── Page Hero ── */}
      <section className="about-hero">
        <div className="about-badge">📖 Our Story</div>
        <h1 className="about-title">
          Why <span className="accent-blue">C++Play</span> Exists
        </h1>
        <p className="about-lead">
          Most students quit C++ because textbooks are boring.
          We built C++Play to make learning <strong>fun, interactive, and addictive</strong>.
        </p>
      </section>

      {/* ── Purpose Section ── */}
      <section className="about-section two-col">
        <div className="about-text">
          <h2>The <span className="accent-green">Problem</span> with Traditional Learning</h2>
          <p>
            Students open a C++ textbook, read 50 pages of theory, get overwhelmed,
            and give up. Sound familiar? 😩
          </p>
          <p>
            Traditional learning makes you <em>read</em> about code instead of
            <em>doing</em> something with it. There's no feedback, no excitement,
            and no reason to keep going.
          </p>
        </div>
        <div className="about-visual">
          <div className="visual-box">
            <span>📚</span>
            <p>Boring textbook</p>
            <div className="vs-arrow">→ 😴 Give up</div>
          </div>
          <div className="visual-box active">
            <span>🎮</span>
            <p>C++Play game</p>
            <div className="vs-arrow">→ 🏆 Keep going!</div>
          </div>
        </div>
      </section>

      {/* ── Gamified Learning ── */}
      <section className="about-section">
        <h2>What is <span className="accent-pink">Gamified Learning?</span></h2>
        <p className="section-para">
          Gamified learning means applying game design elements — like scores,
          levels, instant feedback, and challenges — to education. Instead of
          reading about variables, you <strong>answer quiz questions about them
          and earn points</strong>. Your brain loves this!
        </p>
        <div className="steps-row">
          <div className="step"><span>1️⃣</span><p>Read a short concept</p></div>
          <div className="step-arrow">→</div>
          <div className="step"><span>2️⃣</span><p>Take a quick quiz</p></div>
          <div className="step-arrow">→</div>
          <div className="step"><span>3️⃣</span><p>Get your score</p></div>
          <div className="step-arrow">→</div>
          <div className="step"><span>4️⃣</span><p>Unlock next level! 🎉</p></div>
        </div>
      </section>

      {/* ── Benefits Grid ── */}
      <section className="about-section">
        <h2>Benefits of <span className="accent-yellow">Learning Through Games</span></h2>
        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <div key={i} className="benefit-card">
              <span className="benefit-icon">{b.icon}</span>
              <h4 className="benefit-title">{b.title}</h4>
              <p className="benefit-desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Mission Statement ── */}
      <section className="mission-box">
        <h2>Our <span className="accent-green">Mission</span></h2>
        <blockquote>
          "Make C++ so fun that students forget they're actually studying."
        </blockquote>
        <p>
          Every quiz, every level, every score — it's all designed to keep
          you learning without even realizing it. 🚀
        </p>
      </section>

    </main>
  );
}

export default About;