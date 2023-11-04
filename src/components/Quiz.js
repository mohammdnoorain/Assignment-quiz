import React, { useState ,useRef,useEffect} from "react";
import{QuizData} from '../Data/QuizData.js';
import  QuizResult from './QuizResult'; 


function Quiz(){
  
   
    const [currentQuestion,setCurrentQuestion]= useState(0)
    const[score,setScore] =useState(0);
    const[clickedOption,setClickedOption]=useState(0);
   const [showResult,setShowResult]=useState(false);



const [seconds,setSeconds]=useState(0);
    const [minutes,setMinutes]=useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef();

  useEffect(()=>{

  startTimer()

},[]);

  const startTimer = () => {
    if (!isRunning) {
        clearInterval(intervalRef.current); // Clear any previous intervals
        intervalRef.current = setInterval(() => {
        
            setSeconds((seconds)=>seconds+1)
            // setMinutes((minutes)=>minutes);
            if(seconds===59){
                setMinutes((minutes)=>minutes+1);
                setSeconds((seconds)=>seconds)

            }
           
        
        }, 1000);

        setIsRunning(true);
      }
    
  };

  const stopTimer = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const resetTimer = () => {
  
    setMinutes(0);
    setSeconds(0);
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  }
//////////////


    const changeQuestion =()=>{
        updateScore();
    if(currentQuestion<QuizData.length-1){

    
    setCurrentQuestion(currentQuestion+1);
    setClickedOption(0);

  
    }
    else{
     setShowResult(true);
     stopTimer()
   

    }
   }

   const updateScore=()=>{
    if(clickedOption === QuizData[currentQuestion].answer){
    setScore(score+1)
   }
}
const resetAll =()=>{
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption(0);
    setScore(0);
    resetTimer();
    startTimer();

}



    return(
        <div>
     

     
      <h1>{minutes<10? "0"+minutes:minutes}:{seconds<10? "0"+seconds:seconds}</h1>

      


 
            <p className="heading-txt">QUIZ QUESTIONS</p>
            <div className="container" >
             {showResult ? (
                <QuizResult score={score} seconds={seconds} minutes={minutes} totalScore = {QuizData.length} tryAgain={resetAll}/>
             ):(
          <>
            <div className="question">
                <span id="question-number">{currentQuestion+1}.</span>
                <span id="question-txt">{QuizData[currentQuestion].question}</span>
            </div>
            <div className="option-container">
               {QuizData[currentQuestion].options.map((option,i)=>{
                return(
                    <button 
               
                    className={`option-btn ${
                        clickedOption == i+1?"checked":null

                    }`}
                     key={i}  onClick={()=>setClickedOption(i+1)}>
               
                      
                        {option}
                    </button>
                )
               })}
            </div>
            <input type="button" value="Next" id="next-button" onClick={changeQuestion}/>
            </>)}

            </div>
        </div>
    )
}
   
export default Quiz