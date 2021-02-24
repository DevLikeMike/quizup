import React, { useState } from "react";

const QuestionCard = ({ question, quizInfo }) => {
  // Destructor
  const {
    question: Question,
    answerA,
    answerB,
    answerC,
    answerD,
    correctAnswer,
    key,
  } = question;
  const { quizName, author } = quizInfo;

  // Set HTML variables
  const choices = document.getElementById(`choices${key}`);
  const answerDisplay = document.getElementById(`answerDisplay${key}`);
  const questionDisplay = document.getElementById(`questionDisplay${key}`);
  const submitBtn = document.getElementById(`submit${key}`);
  const fieldSet = document.getElementById(`fieldset${key}`);
  const [answerChoice, setAnswerChoice] = useState("");

  // Event Handling
  const onSubmit = (e) => {
    e.preventDefault();
    if (answerChoice === "") {
      return alert("Please select an answer choice for all questions");
    }

    // Dispay right or wrong choices
    choices.style.display = "none";
    if (answerChoice === correctAnswer) {
      fieldSet.style.backgroundColor = "Green";
    } else {
      fieldSet.style.backgroundColor = "Red";
    }
    // Styling for answer after choice was made
    questionDisplay.style.color = "white";
    questionDisplay.style.fontSize = "larger";
    submitBtn.style.cursor = "default";
    answerDisplay.innerText = `You answered "${answerChoice}", the correct answer was "${correctAnswer}".`;
    // Disable form after choice was made
    fieldSet.setAttribute("disabled", "true");
  };

  // Set answer choice
  const onChange = (e) => {
    setAnswerChoice(e.target.value);
  };
  return (
    <div className='cardWrapper'>
      <h3 className='cardHeader'>Question #{key}</h3>
      <form onSubmit={onSubmit}>
        <fieldset id={"fieldset" + key}>
          <p id={"questionDisplay" + key}>{Question}</p>
          <p id={"answerDisplay" + key} className='answerDisplay'></p>
          <div id={"choices" + key} onChange={onChange}>
            <input type='radio' name={`answer` + key} value={answerA} />
            <label htmlFor='answerA'>A: {answerA}</label>
            <br></br>
            <input type='radio' name={`answer` + key} value={answerB} />
            <label htmlFor='answerB'>B: {answerB}</label>

            <br></br>
            <input type='radio' name={`answer` + key} value={answerC} />
            <label htmlFor='answerC'>C: {answerC}</label>
            <br></br>

            <input type='radio' name={`answer` + key} value={answerD} />
            <label htmlFor='answerD'>D: {answerD}</label>
            <br></br>
          </div>
          <button id={"submit" + key}>Submit Answer</button>
        </fieldset>
      </form>
    </div>
  );
};

export default QuestionCard;
