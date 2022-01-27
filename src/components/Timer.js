import React from "react";
import { useTimer } from "react-timer-hook";

function Timer({ expiryTimestamp, submitQuiz }) {
  const { seconds } = useTimer({
    expiryTimestamp,
    onExpire: () => submitQuiz(null, true),
  });

  return (
    <div className="timer">
      <p className="timer-time">Time Remaining: {seconds}</p>
    </div>
  );
}

export default Timer;
