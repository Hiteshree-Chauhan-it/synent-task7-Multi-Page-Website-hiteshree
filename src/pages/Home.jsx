import { Link } from 'react-router-dom'
import GameCard from '../components/GameCard'
import './Home.css'

const previewLevels = [
  { level: 1, title: 'Hello World', concept: 'Output & Syntax', description: 'Print your first message and understand basic C++ structure.', difficulty: 'Beginner', color: 'cyan', icon: '👋', stars: 3 },
  { level: 2, title: 'Variables', concept: 'Data Types', description: 'Learn how to store and use data in your programs.', difficulty: 'Beginner', color: 'green', icon: '📦', stars: 2 },
  { level: 3, title: 'Loops', concept: 'For & While', description: 'Repeat actions without writing the same code again and again.', difficulty: 'Intermediate', color: 'yellow', icon: '🔄', stars: 1 },
  { level: 4, title: 'Functions', concept: 'Reusable Code', description: 'Build blocks of code you can call whenever you need them.', difficulty: 'Intermediate', color: 'pink', icon: '⚙️', stars: 0, locked: true },
]

const stats = [
  { value: '10+', label: 'C++ Levels', icon: '🎯' },
  { value: '50+', label: 'Quiz Questions', icon: '❓' },
  { value: '100%', label: 'Free to Play', icon: '🆓' },
  { value: '∞', label: 'Fun Guaranteed', icon: '🎮' },
]

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg-grid" />
        <div className="container hero-inner">
          <div className="hero-badge badge badge-cyan">🚀 Level Up Your Coding Skills</div>
          <h1 className="hero-title pixel-title">
            Learn C++<br />
            <span className="glow-cyan">by</span> <span className="glow-green">Playing</span>
          </h1>
          <p className="hero-subtitle">
            Stop reading boring textbooks. Play through interactive games,
            answer quizzes, and master C++ one level at a time — totally free!
          </p>
          <div className="hero-actions">
            <Link to="/services" className="btn btn-primary hero-cta animate-pulse-glow">
              🎮 Start Playing Now
            </Link>
            <Link to="/about" className="btn btn-outline">
              Learn More
            </Link>
          </div>

          {/* Floating code snippet */}
          <div className="hero-code animate-float">
            <div className="code-dots">
              <span style={{background:'#ff5f57'}} />
              <span style={{background:'#febc2e'}} />
              <span style={{background:'#28c840'}} />
            </div>
            <pre><code>{`#include <iostream>
using namespace std;

int main() {
  cout << "Hello, Player!" << endl;
  return 0; // Game On! 🎮
}`}</code></pre>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-strip">
        <div className="container stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat-item">
              <span className="stat-icon">{s.icon}</span>
              <span className="stat-value glow-cyan">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Levels Preview */}
      <section className="section levels-section">
        <div className="container">
          <p className="section-label">🗺️ YOUR JOURNEY</p>
          <h2 className="section-title">Choose Your Level</h2>
          <p className="section-sub">From zero to hero — each level teaches one C++ concept with a fun mini-quiz.</p>
          <div className="levels-grid">
            {previewLevels.map((lvl) => (
              <GameCard key={lvl.level} {...lvl} />
            ))}
          </div>
          <div className="levels-cta">
            <Link to="/services" className="btn btn-yellow">See All Levels 🏆</Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section how-section">
        <div className="container">
          <p className="section-label">⚡ HOW IT WORKS</p>
          <h2 className="section-title">3 Simple Steps</h2>
          <div className="steps-grid">
            {[
              { step: '01', icon: '🎯', title: 'Pick a Level', desc: 'Choose a C++ concept you want to learn — start from basics.' },
              { step: '02', icon: '📖', title: 'Read the Concept', desc: 'Get a short, simple explanation with a code example.' },
              { step: '03', icon: '🏆', title: 'Take the Quiz', desc: 'Answer MCQs, earn stars, and unlock the next level!' },
            ].map((item) => (
              <div key={item.step} className="step-card card">
                <span className="step-number">{item.step}</span>
                <span className="step-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container cta-inner">
          <h2 className="pixel-title glow-yellow" style={{fontSize:'clamp(0.7rem,2vw,1rem)'}}>Ready to Play? 🎮</h2>
          <p>Join hundreds of students learning C++ the fun way.</p>
          <Link to="/services" className="btn btn-green">Start Your Journey →</Link>
        </div>
      </section>
    </div>
  )
}