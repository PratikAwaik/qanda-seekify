import React from "react";

function ReviewAnswers({ answersSelected }) {
  return (
    <div className="review-answers">
      <h3>Review Answers</h3>
      {Object.keys(answersSelected).map((key) => (
        <p key={key}>
          {key}
          {")"} {answersSelected[key]}
        </p>
      ))}
    </div>
  );
}

export default ReviewAnswers;
