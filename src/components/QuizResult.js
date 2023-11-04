import React from 'react';
function QuizResult(props){
    return(

        <>
        <div className='how-score'>

            <h2>Congratulations</h2>
            Total Score:{props.totalScore}<br></br>
          
           Your SCore:{props.score}<br></br>
           Completed Quiz in : {props.minutes} minutes : {props.seconds} seconds


        </div>
        <button id='next-button' onClick={props.tryAgain}>TRY AGAIN</button>
        </>
    )
}
export default QuizResult