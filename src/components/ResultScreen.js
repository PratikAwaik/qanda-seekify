import React from "react";

function ResultScreen({ resultMsg, questions, answersSelected, retakeQuiz }) {
  const calculateCorrectAnswers = () => {
    return questions.filter(
      (ques) => answersSelected[ques.id] === ques.correctAnswer
    ).length;
  };

  const score = () => {
    return calculateCorrectAnswers() + " / " + questions.length;
  };

  return (
    <div className="results">
      <h3>{resultMsg}</h3>
      <p>Total Questions: {questions.length}</p>
      <p>Questions Attempted: {Object.keys(answersSelected).length}</p>
      <p>Your Score: {score()}</p>

      <button
        type="button"
        className="button retake-quiz-btn ml-0"
        onClick={retakeQuiz}
      >
        Retake Quiz
      </button>
    </div>
  );
}

export default ResultScreen;
