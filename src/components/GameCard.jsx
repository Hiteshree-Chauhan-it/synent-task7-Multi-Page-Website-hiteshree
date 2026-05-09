import React, { useState } from 'react';
import Quiz from './Quiz';
import '../styles/GameCard.css';

function GameCard({ topic, onNextLevel }) {
  // Whether the quiz is expanded/visible
  const [quizOpen, setQuizOpen] = useState(false);

  // Quiz key — changing this resets the Quiz component
  const [quizKey, setQuizKey] = useState(0);

  // Open the quiz section
  const startQuiz = () => setQuizOpen(true);

  // Restart quiz by changing the key (forces re-mount)
  const restartQuiz = () => {
    setQuizKey(quizKey + 1);
    setQuizOpen(true);
  };

  return (
    <div className="game-card" style={{ '--card-color': topic.color }}>
      {/* Card Header */}
      <div className="card-header">
        <span className="card-icon">{topic.icon}</span>
        <div>
          <h3 className="card-title">{topic.title}</h3>
          <span className="card-level">{topic.level}</span>
        </div>
      </div>

      {/* Description */}
      <p className="card-desc">{topic.description}</p>

      {/* Code snippet preview */}
      <div className="card-code">
        <code>{topic.codeSnippet}</code>
      </div>

      {/* Start Quiz button — shows only when quiz is closed */}
      {!quizOpen && (
        <button className="btn-neon" onClick={startQuiz}
          style={{ borderColor: topic.color, color: topic.color }}>
          🎮 Start Quiz
        </button>
      )}

      {/* Quiz section — shows when open */}
      {quizOpen && (
        <div className="card-quiz">
          <div className="quiz-header-row">
            <h4 className="quiz-label">📝 Quiz: {topic.title}</h4>
            <button className="btn-restart" onClick={restartQuiz}>🔄 Restart</button>
          </div>
          {/* key prop forces full reset on restart */}
          <Quiz
            key={quizKey}
            questions={topic.questions}
            onNextLevel={onNextLevel}
          />
        </div>
      )}
    </div>
  );
}

export default GameCard;