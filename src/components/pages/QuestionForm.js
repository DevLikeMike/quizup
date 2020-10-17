import React, { useState, Fragment } from "react";
import { useHistory } from "react-router-dom";

const QuestionForm = ({ quizInfo, questions, setQuestions, setQuizInfo }) => {
  const history = useHistory();
  //Deconstruct from props
  const { numberOfQs, author, quizName } = quizInfo;
  //Component State
  let [count, setCount] = useState(1);
  const [newQuestion, setNewQuestion] = useState({
    question: "",
    answerA: "",
    answerB: "",
    answerC: "",
    answerD: "",
    key: count,
  });
  //Done with questions flag
  let done = false;
  //Set HTML variables
  const answerA = document.getElementById("answerA");
  const answerB = document.getElementById("answerB");
  const answerC = document.getElementById("answerC");
  const answerD = document.getElementById("answerD");
  const correctAnswer = document.getElementById("correctAnswer");
  const textArea = document.getElementById("textArea");

  //Function Declarations
  //Reset all html variables to empty string, preparing for the next question to be entered
  const reset = () => {
    answerA.value = "";
    answerB.value = "";
    answerC.value = "";
    answerD.value = "";
    textArea.value = "";
    correctAnswer.value = "";
  };
  //Event Handling
  //Set values of new question
  const onChange = (e) => {
    setNewQuestion({ ...newQuestion, [e.target.name]: e.target.value });
  };
  //Submit question to questions array(app level state)
  const onClick = (e) => {
    e.preventDefault();
    //Check all fields
    if (
      newQuestion.Question === "" ||
      newQuestion.answerA === "" ||
      newQuestion.answerB === "" ||
      newQuestion.answerC === "" ||
      newQuestion.answerD === "" ||
      newQuestion.correctAnswer === ""
    ) {
      alert("please fill all fields");
    } else {
      //Put current question into questions array
      setQuestions([...questions, newQuestion]);
      //Allow only the right number of submits by incrementing count
      if (count == numberOfQs) {
        setQuizInfo({ ...quizInfo, questionsMade: true });
        history.push("/quiz");
        done = true;
      } else {
        //Increase count for the key value of the new question
        setCount((count = count + 1));
        //Reset value of component level state after pushing to the questions array
        setNewQuestion({
          question: "",
          answerA: "",
          answerB: "",
          answerC: "",
          answerD: "",
          correctAnswer: "",
          key: count,
        });
        //Reset form data for every new question
        reset();
      }
    }
  };

  //Review all questions, offer an edit
  return (
    <Fragment>
      {done === false ? (
        <div className="container" id="questionForm">
          <div className="row">
            <div className="eight columns">
              <h2 id="formHeader">
                {quizName} <span className="subText">by {author}</span>
              </h2>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="four colums">
                <h5 id="questionNum">Question #{count}</h5>
              </div>
            </div>
            <div className="row">
              <div className="eight columns">
                <label>What is the question you would like to ask</label>
                <textarea
                  onChange={onChange}
                  type="text"
                  name="question"
                  className="u-full-width"
                  id="textArea"
                  style={{ resize: "none" }}
                ></textarea>
              </div>
            </div>
            <div className="row">
              <div className="eight columns">
                <label>Answer: A</label>
                <input
                  type="text"
                  name="answerA"
                  id="answerA"
                  className="u-full-width"
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="eight columns">
                <label>Answer: B</label>
                <input
                  type="text"
                  name="answerB"
                  id="answerB"
                  className="u-full-width"
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="eight columns">
                <label>Answer: C</label>
                <input
                  type="text"
                  name="answerC"
                  id="answerC"
                  className="u-full-width"
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="eight columns">
                <label>Answer: D</label>
                <input
                  type="text"
                  name="answerD"
                  id="answerD"
                  className="u-full-width"
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="eight columns">
                <label>Correct Answer</label>
                <input
                  type="text"
                  name="correctAnswer"
                  id="correctAnswer"
                  className="u-full-width"
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="eight columns">
                <button
                  onClick={onClick}
                  className="button-primary u-full-width"
                  id="submit"
                >
                  Submit question
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2>Thank you!</h2>
      )}
    </Fragment>
  );
};

export default QuestionForm;
