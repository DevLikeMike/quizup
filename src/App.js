import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
//Components
import Welcome from "./components/pages/Welcome";
import QuestionForm from "./components/pages/QuestionForm";
import Display from "./components/pages/Display";
import HomeBtn from "./components/HomeBtn";
import Edit from "./components/pages/Edit";
//Stying
import "./App.css";

const App = () => {
  const [ready, setReady] = useState("False");
  const [quizInfo, setQuizInfo] = useState({
    quizName: "",
    author: "",
    numberOfQs: "",
    questionsMade: false,
  });
  const [grade, setGrade] = useState(0);
  const [questions, setQuestions] = useState([]);

  return (
    <div className='App'>
      <Router>
        <HomeBtn />
        <Switch>
          <Route
            exact
            path='/'
            render={(props) => (
              <Welcome
                quizInfo={quizInfo}
                setQuizInfo={setQuizInfo}
                setReady={setReady}
                ready={ready}
                setQuestions={setQuestions}
              />
            )}
          />
          <Route
            path='/newquiz'
            render={(props) => (
              <QuestionForm
                quizInfo={quizInfo}
                questions={questions}
                setQuestions={setQuestions}
                setQuizInfo={setQuizInfo}
              />
            )}
          />
          <Route
            path='/quiz'
            render={(props) => (
              <Display quizInfo={quizInfo} questions={questions} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
