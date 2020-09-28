import React, { useState } from "react";
//Components
import Welcome from "./components/pages/Welcome";
import QuestionForm from "./components/pages/QuestionForm";
import Display from "./components/pages/Display";
//Stying
import "./App.css";

const App = () => {
  const [quizInfo, setQuizInfo] = useState({
    quizName: "",
    author: "",
    numberOfQs: "",
    ready: false,
    questionsMade: false,
  });
  const [questions, setQuestions] = useState([]);

  return (
    <div className="App">
      {quizInfo.ready !== true && quizInfo.questionsMade !== true ? (
        <Welcome setQuizInfo={setQuizInfo} quizInfo={quizInfo} />
      ) : quizInfo.ready === true && quizInfo.questionsMade !== true ? (
        <QuestionForm
          quizInfo={quizInfo}
          questions={questions}
          setQuestions={setQuestions}
          setQuizInfo={setQuizInfo}
        />
      ) : (
        <Display quizInfo={quizInfo} questions={questions} />
      )}
    </div>
  );
};

export default App;
