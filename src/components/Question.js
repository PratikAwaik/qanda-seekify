import React from "react";

function Options({ options, question, answersSelected, setAnswersSelected }) {
  const handleChange = (option) => {
    const answersCopy = Object.assign({}, answersSelected);
    answersCopy[question.id] = option;
    setAnswersSelected(answersCopy);
  };

  return (
    <div className="question-options">
      {options.map((option) => (
        <div key={option} className="option">
          <input
            type="radio"
            id={option}
            name={question.question}
            value={option}
            checked={answersSelected[question.id] === option}
            onChange={() => handleChange(option)}
          />
          <label htmlFor={option}>{option}</label>
          <br />
        </div>
      ))}
    </div>
  );
}

function Question({ question, answersSelected, setAnswersSelected }) {
  return (
    <div className="question">
      <h3>
        Q.{question.id}
        {")"} {question.question}
      </h3>
      <Options
        options={question.options}
        question={question}
        answersSelected={answersSelected}
        setAnswersSelected={setAnswersSelected}
      />
    </div>
  );
}

export default Question;
