import React, { useState } from 'react';
import '../styles/Quiz.css';

function Quiz({ questions, onNextLevel }) {
  // Which question we're on (0 = first)
  const [currentQ, setCurrentQ] = useState(0);

  // Player's score (increases for correct answers)
  const [score, setScore] = useState(0);

  // Which option the player clicked (null = none yet)
  const [selected, setSelected] = useState(null);

  // Whether we've shown the answer feedback
  const [answered, setAnswered] = useState(false);

  // Whether the quiz is finished
  const [finished, setFinished] = useState(false);

  // Current question object
  const question = questions[currentQ];

  // Player clicks an answer option
  const handleAnswer = (optionIndex) => {
    // Ignore clicks if already answered
    if (answered) return;

    setSelected(optionIndex);
    setAnswered(true);

    // If correct, increase score
    if (optionIndex === question.correct) {
      setScore(score + 1);
    }
  };

  // Move to the next question
  const handleNext = () => {
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      // No more questions — show final score
      setFinished(true);
    }
  };

  // Restart the whole quiz
  const handleRestart = () => {
    setCurrentQ(0);
    setScore(0);
    setSelected(null);
    setAnswered(false);
    setFinished(false);
  };

  // ── Finished screen ──
  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);
    let emoji = '😢';
    let message = 'Keep practicing!';
    if (percentage >= 80) { emoji = '🏆'; message = 'Excellent! You\'re a C++ star!'; }
    else if (percentage >= 50) { emoji = '🎯'; message = 'Good job! Almost there!'; }

    return (
      <div className="quiz-result">
        <div className="result-emoji">{emoji}</div>
        <h3 className="result-title">Quiz Complete!</h3>
        <div className="result-score">
          <span className="score-number">{score}</span>
          <span className="score-divider">/</span>
          <span className="score-total">{questions.length}</span>
        </div>
        <p className="result-percent">{percentage}% — {message}</p>
        <div className="result-buttons">
          <button className="btn-neon pink" onClick={handleRestart}>
            🔄 Restart
          </button>
          {onNextLevel && (
            <button className="btn-neon blue" onClick={onNextLevel}>
              ⏭ Next Level
            </button>
          )}
        </div>
      </div>
    );
  }

  // ── Active quiz screen ──
  return (
    <div className="quiz">
      {/* Progress bar */}
      <div className="quiz-progress-bar">
        <div
          className="quiz-progress-fill"
          style={{ width: `${((currentQ) / questions.length) * 100}%` }}
        ></div>
      </div>

      {/* Question counter + score */}
      <div className="quiz-meta">
        <span className="q-counter">Q {currentQ + 1} / {questions.length}</span>
        <span className="q-score">⭐ {score} pts</span>
      </div>

      {/* Question text */}
      <h4 className="quiz-question">{question.question}</h4>

      {/* Answer options */}
      <div className="quiz-options">
        {question.options.map((option, index) => {
          // Determine the styling class for each option
          let optClass = 'quiz-option';
          if (answered) {
            if (index === question.correct) {
              optClass += ' correct'; // Always highlight correct answer
            } else if (index === selected) {
              optClass += ' wrong';   // Highlight wrong selection in red
            }
          }

          return (
            <button
              key={index}
              className={optClass}
              onClick={() => handleAnswer(index)}
              disabled={answered}
            >
              <span className="opt-letter">{String.fromCharCode(65 + index)}.</span>
              {option}
            </button>
          );
        })}
      </div>

      {/* Feedback message after answering */}
      {answered && (
        <div className={`quiz-feedback ${selected === question.correct ? 'correct' : 'wrong'}`}>
          {selected === question.correct
            ? '✅ Correct! Well done!'
            : `❌ Wrong! The answer was: ${question.options[question.correct]}`}
        </div>
      )}

      {/* Next button — only shows after answering */}
      {answered && (
        <button className="btn-neon" onClick={handleNext}>
          {currentQ + 1 < questions.length ? 'Next Question ➡' : 'See Results 🏁'}
        </button>
      )}
    </div>
  );
}

export default Quiz;