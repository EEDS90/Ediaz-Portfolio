import React, { useState } from "react";
import "./About.css";

export default function About(props) {
  const questions = [
    {
      questionsText: "Where is Edwin Diaz from?",
      answerOptions: [
        { answerText: "California", isCorrect: false },
        { answerText: "Florida", isCorrect: false },
        {
          answerText: "Texas",
          isCorrect: false,
        },
        { answerText: "New York", isCorrect: true },
      ],
    },

    {
      questionsText: "Favorite TV show growing up?",
      answerOptions: [
        {
          answerText: "Dragon Ball Z",
          isCorrect: false,
        },
        { answerText: "Pokemon", isCorrect: false },
        { answerText: "Naruto", isCorrect: false },
        { answerText: "All of the above", isCorrect: true },
      ],
    },

    {
      questionsText: "Favorite genre of music?",
      answerOptions: [
        { answerText: "Hip-hop", isCorrect: true },
        { answerText: "Salsa", isCorrect: false },
        {
          answerText:
            "Country",
          isCorrect: false,
        },
        { answerText: "Pop", isCorrect: false },
      ],
    },

    {
      questionsText: "Favorite Sport?",
      answerOptions: [
        { answerText: "Football", isCorrect: false },
        { answerText: "Baseball", isCorrect: true },
        {
          answerText: "Soccer",
          isCorrect: false,
        },
        {
          answerText:
            "Basketball",
          isCorrect: false,
        },
      ],
    },

    {
      questionsText: "Favorite food?",
      answerOptions: [
        { answerText: "Tacos", isCorrect: false },
        { answerText: "Pizza", isCorrect: false },
        { answerText: "Sanwiches", isCorrect: true },
        { answerText: "All of the above", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      <div>
        <div className="about1">
          <h1>About Me</h1>
        </div>
        <div>
          {showScore ? (
            <div className="score_section">
              You have {score} correct out of {questions.length}
            </div>
          ) : (
            <>
              <div className="question_section">
                <div className="question_count">
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className="question_text">
                  {questions[currentQuestion].questionsText}
                </div>
              </div>
              <div className="answer_section">
                {questions[currentQuestion].answerOptions.map(
                  (answerOptions) => (
                    <button
                      className="button_questions"
                      onClick={() =>
                        handleAnswerButtonClick(answerOptions.isCorrect)
                      }
                    >
                      {answerOptions.answerText}
                    </button>
                  )
                )}
              </div>
            </>
          )}
        </div>
      </div>

      
    </>
  );
}
