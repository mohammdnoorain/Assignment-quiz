import React, { useState } from 'react';
import './App.css';

import Quiz from './components/Quiz';




function App() {
  const[startquiz,setStartQuiz]=useState(false);
  return (
  <>
     <div  className='title'>WELCOME TO SMART QUIZ CHALLENGE</div>

{startquiz==true ? <Quiz/>:  <button  onClick={()=>setStartQuiz(true)} className= 'btn-home' > Start Quiz</button> }

  </>
  );
}

export default App;
