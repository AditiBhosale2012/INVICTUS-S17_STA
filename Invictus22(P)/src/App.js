import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Start from './components/start';
import Question from './components/question';
import End from './components/end';
import quizData from './data/quiz.json';
import Modal from './components/answers';
import Home from './home';
import Quiz from './quiz';
import Community from './community';
import FAQ from './faq';


let interval;

const App = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if(step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  return (
    
    <div className="App">
      <div className='nav'>
      <Router>
      <Navbar />
      <Switch>
        <Route path='/home' exact component={Home} />
        <Route path='/quiz' component={Quiz} />
        <Route path='/community' component={Community} />
        <Route path='/faq' component={FAQ} />
      </Switch>
    </Router>
    </div>
      {step === 1 && <Start onQuizStart={quizStartHandler} />}
      {step === 2 && <Question 
        data={quizData.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quizData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
      />}
      {step === 3 && <End
      results={answers}
      data={quizData.data}
      onReset={resetClickHandler}
      onAnswerCheck={() => setStep(4)}
      time={time}
      />}
      {step === 4 && <Modal 
      results={answers}
      data={quizData.data}
      />}
    </div>
  );
}

export default App; 