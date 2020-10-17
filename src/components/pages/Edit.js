import React, { Fragment } from "react";

const Edit = ({ questions, quizInfo }) => {
  const { author, quizName } = quizInfo;

  return (
    <Fragment>
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
              <h5 id="questionNum">Question #</h5>
            </div>
          </div>
          <div className="row">
            <div className="eight columns">
              <label>What is the question you would like to ask</label>
              <textarea
                // onChange={onChange}
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
                // onChange={onChange}
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
                // onChange={onChange}
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
                // onChange={onChange}
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
                // onChange={onChange}
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
                // onChange={onChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="eight columns">
              <button
                // onClick={onClick}
                className="button-primary u-full-width"
                id="submit"
              >
                Submit question
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Edit;
