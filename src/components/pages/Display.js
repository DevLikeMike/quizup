import React, { Fragment } from "react";
import QuestionCard from "./QuestionCard";

const Display = ({ questions, quizInfo }) => {
  //Take the questions array, loop through for every question, displaying QuestionCard element
  const { quizName, author } = quizInfo;
  return (
    <div id="displayPage">
      <h2 id="formHeader">
        {quizName} <span className="subText">by {author}</span>
      </h2>
      <div className="cardContainer">
        {questions.map((question) => (
          <QuestionCard
            question={question}
            key={question.key}
            quizInfo={quizInfo}
          />
        ))}
      </div>
    </div>
  );
};

export default Display;
