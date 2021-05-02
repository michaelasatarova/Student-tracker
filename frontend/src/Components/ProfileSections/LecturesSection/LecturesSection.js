import React, {useState} from 'react'
import {Link} from 'react-router-dom';

//style
import {LectureSectionStyled} from './style'; 

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons';


import {Data} from './DataAccordion';

const ProgramSection = () => {
    const [clicked, setClicked]= useState(false)

    const toggle = index =>{
        if(clicked ===index){
            //if option is open close it
            return setClicked(null)
        }
        setClicked(index)
    }

    return (
        <LectureSectionStyled>
            <h1>Lectures</h1>
         <div className="accordeon-container">
             {Data.map((item, index)=>{
                 return(
                    <div>
                        <div className="week" onClick={()=> toggle(index)} key={index}>
                            <h1>{item.question}</h1> 
                            <span>{clicked === index ? <FontAwesomeIcon className="i" icon={faAngleUp} size = '1x' /> : <FontAwesomeIcon className="i" icon={faAngleDown} size = '1x' />}</span>
                        </div>
                        {clicked === index ? (
                           <div className="lectures">
                           <Link to="/"><p>{item.day1}</p></Link>
                           <Link to="/"><p>{item.day2}</p></Link>
                           <Link to="/"><p>{item.day3}</p></Link>
                           <Link to="/"><p>{item.day4}</p></Link>
                           <Link to="/"><p>{item.day5}</p></Link>
                       </div> 
                        ): null}                                         
                    </div>

                 )})}
             
         </div>
         
        </LectureSectionStyled>
    )
}

export default ProgramSection;

