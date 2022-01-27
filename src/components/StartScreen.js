import React from "react";

function StartScreen({ questions, startQuiz }) {
  return (
    <div className="start-screen">
      <h1 className="start-screen-heading">Take a Quick Assessment</h1>
      <p>
        There are {questions.length} multiple choice questions. You have{" "}
        {questions.length * 10} seconds to finish them!
      </p>
      <button className="button start-quiz-btn ml-0" onClick={startQuiz}>
        Start Quiz
      </button>
    </div>
  );
}

export default StartScreen;
