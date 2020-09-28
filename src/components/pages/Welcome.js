import React, { Fragment } from "react";

const Welcome = ({ setQuizInfo, quizInfo }) => {
  //Event Handling for component
  //Set info(app level state)
  const onChange = (e) => {
    setQuizInfo({ ...quizInfo, [e.target.name]: e.target.value });
  };
  //Set the ready value to advance to the next page or the quiz creation
  const onSubmit = (e) => {
    e.preventDefault();
    setQuizInfo({ ...quizInfo, ready: true });
  };

  return (
    <Fragment>
      <div className="container" id="welcome">
        <h3>Welcome to QuizUp</h3>
        <div className="row">
          <p className="eight columns">
            Online quiz maker for all your quizzing needs. Have questions to
            ask? Need Answers fast? Well while you "asking all them questions",
            let quiz up make it easy to generate your quiz! Our quizes provide
            your basic A, B, C, D answers, and make it a breeze for you to make
            up to ten multiple choice questions. Quiz Up is the leading quiz
            generator for teachers all over the United States!
          </p>
        </div>
        <form id="mainForm" onSubmit={onSubmit} autoComplete="off">
          <div className="row">
            <div className="eight columns">
              <label>Name of your quiz?</label>
              <input
                type="text"
                name="quizName"
                id="quizName"
                className="u-full-width"
                onChange={onChange}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="four columns">
              <label>Who is making the quiz?</label>
              <input
                type="text"
                name="author"
                id="author"
                className="u-full-width"
                onChange={onChange}
                required
              />
            </div>
            <div className="four columns">
              <label>How man questions would you like?</label>
              <select
                name="numberOfQs"
                id="numberOfQs"
                className="u-full-width"
                onChange={onChange}
              >
                <option value="">Number of Questions</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
                <option value="6">Six</option>
                <option value="7">Seven</option>
                <option value="8">Eight</option>
                <option value="9">Nine</option>
                <option value="10">Ten</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="eight columns">
              <button
                className="button-primary u-full-width"
                type="submit"
                id="submit"
              >
                Get Started
              </button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Welcome;
