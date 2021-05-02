import React from 'react'
import {ProgressStyled} from './style'

const Progress = () => {
   //let counter = useRef(initialValue)

//   function progressBar(){
//       a = a+1;
//       if(a == 101){
//           clearInterval(run);
//       }else{

//       }
//   } 
   
    return (
        <ProgressStyled>
            <div className="box">
                <svg>
                    <circle cx="60" cy="60" r="50"/>
                </svg>
                <div className="counter"></div>
                <div className="stop"></div>
                <div className="progress">Progress</div>
            </div>
        </ProgressStyled>
    )
}

export default Progress
