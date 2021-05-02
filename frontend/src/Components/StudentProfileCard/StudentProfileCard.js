import React from 'react'

//style
import {StudentProfileCardStyled} from './style'

//img
import user from '../../Assets/user.jpg';
//components
import SocialIcons from '../SocialIcons/SocialIcons';

//PROGRESS BAR
import ProgressProvider from "./ProgressProvider";
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {useHistory} from 'react-router-dom';


const StudentProfileCard = ({data}) => {
const history = useHistory();

  const RedirectToStudentProfileOnClickHandler =()=>{
      history.push(`/profile_student/${data.id}`)
  } 



    return (
        <StudentProfileCardStyled onClick={RedirectToStudentProfileOnClickHandler}>
            <img src={data.profile_picture ? data.profile_picture : user} alt="user picture"/>
            <h1>{data.first_name} {data.last_name}</h1>
            <h2>{data.email}</h2>
            <SocialIcons/>
            <p>{data.about}</p>
            <div className="student-level">
                <h1> Check your level</h1>
                
                {data.grades_student.length ?                
                    <div>
                       {Math.floor(data.grades_student[0].avg.grade__avg) < 30 ? 
                            <div>
                                <ProgressProvider valueStart={0} valueEnd={Math.floor(data.grades_student[0].avg.grade__avg)}>
                                    {(value) => <CircularProgressbar  styles={buildStyles({pathTransitionDuration: 2.15, pathColor: "red", textColor: "red"})} value={value} text ={value +'%'} className="progress-bar "/>}
                                </ProgressProvider>
                                <p className="danger"><span> Message:</span> We recommend you to go over classes again</p>
                            </div>  
                            : Math.floor(data.grades_student[0].avg.grade__avg) >=30 &&  Math.floor(data.grades_student[0].avg.grade__avg) <= 70 ? 
                            <div>
                            <ProgressProvider valueStart={0} valueEnd={Math.floor(data.grades_student[0].avg.grade__avg)}>
                                {(value) => <CircularProgressbar  styles={buildStyles({pathTransitionDuration: 2.15,  pathColor: "#fcba03", textColor: "#fcba03"})} value={value} text ={value +'%'} className="progress-bar "/>}
                            </ProgressProvider>
                            <p className="warning"><span>Message:</span>  You still have a lot of to improve</p>
                            </div> 
                            :
                            <div>
                            <ProgressProvider valueStart={0} valueEnd={Math.floor(data.grades_student[0].avg.grade__avg)}>
                                {(value) => <CircularProgressbar  styles={buildStyles({pathTransitionDuration: 2.15,  pathColor: "green", textColor: "green"})} value={value} text ={value +'%'} className="progress-bar "/>}
                            </ProgressProvider>
                            <p className="sucess"><span>Message:</span>  You are on a good way, keep going</p>
                            </div> 
                            }
                    </div>
                    : 'No data'} 
            </div>        
        </StudentProfileCardStyled>
    )
}

export default StudentProfileCard
