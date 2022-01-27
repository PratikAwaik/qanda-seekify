import React, { useState } from "react";
import Question from "./components/Question";
import ResultScreen from "./components/ResultScreen";
import StartScreen from "./components/StartScreen";
import Timer from "./components/Timer";

const data = [
  {
    question: "A line which cuts a pair of parallel lines is called",
    options: ["Tangent", "Chord", "Traversal", "Intersector"],
    correctAnswer: "Traversal",
    id: 1,
  },
  {
    question:
      "If a certain sum of money can become 5 times of its principal in 10 years, then the rate of interest is",
    options: ["20%", "30%", "40%", "50%"],
    correctAnswer: "40%",
    id: 2,
  },
  {
    question: "A polygon with minimum number of sides is",
    options: ["Pentagon", "Square", "Triangle", "Angle"],
    correctAnswer: "Triangle",
    id: 3,
  },
];

function App() {
  const [questions] = useState(data);
  const [totalQuestions] = useState(questions.length);
  const [currentNumber, setCurrentNumber] = useState(-1);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [answersSelected, setAnswersSelected] = useState({});
  const [expiryTimestamp, setExpiryTimestamp] = useState(null);
  const [resultMsg, setResultMsg] = useState("");

  const startQuiz = () => {
    gotoNextQuestion();
    const time = new Date();
    time.setSeconds(time.getSeconds() + 30);
    setExpiryTimestamp(time);
  };

  const gotoPreviousQuestion = () => {
    setCurrentNumber(currentNumber - 1);
    setCurrentQuestion(questions[currentNumber - 1]);
  };

  const gotoNextQuestion = () => {
    setCurrentNumber(currentNumber + 1);
    setCurrentQuestion(questions[currentNumber + 1]);
  };

  const submitQuiz = (_, isOutOfTime) => {
    const msg = isOutOfTime ? "Time Expired!" : "You Submitted the Assessment!";
    setResultMsg(msg);
    setCurrentNumber(totalQuestions);
  };

  const retakeQuiz = () => {
    setCurrentNumber(-1);
    setAnswersSelected({});
  };

  return (
    <div className="App">
      <div className="questions-wrapper">
        {currentNumber >= 0 && currentNumber < totalQuestions && (
          <Timer expiryTimestamp={expiryTimestamp} submitQuiz={submitQuiz} />
        )}

        {currentNumber === -1 && (
          <StartScreen questions={questions} startQuiz={startQuiz} />
        )}

        {currentNumber >= 0 && currentNumber < totalQuestions && (
          <Question
            question={currentQuestion}
            answersSelected={answersSelected}
            setAnswersSelected={setAnswersSelected}
          />
        )}

        <div className="quiz-btns">
          {currentNumber > 0 && currentNumber < totalQuestions && (
            <button
              className="button prev-btn ml-0"
              onClick={gotoPreviousQuestion}
            >
              Prev
            </button>
          )}

          {currentNumber < totalQuestions - 1 && currentNumber >= 0 && (
            <button className="button next-btn" onClick={gotoNextQuestion}>
              Next
            </button>
          )}

          {currentNumber >= 0 && currentNumber < totalQuestions && (
            <button
              type="button"
              className="button submit-quiz-btn ml-0"
              onClick={submitQuiz}
            >
              Submit Quiz
            </button>
          )}
        </div>

        {currentNumber === totalQuestions && (
          <ResultScreen
            resultMsg={resultMsg}
            questions={questions}
            answersSelected={answersSelected}
            retakeQuiz={retakeQuiz}
          />
        )}
      </div>
    </div>
  );
}

export default App;
