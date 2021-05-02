import React, {useEffect, useState} from 'react';
import {Link,  withRouter} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
//img
import user from '../../Assets/user.jpg';
import loading from '../../Assets/loading.gif'
//style
import {UserProfile2Styled} from './style';
//Components
import SocialIcons from '../../Components/SocialIcons/SocialIcons';
import StudentsGroups from '../../Layouts/StudentsGroups/StudentsGroups';
//Redux
import {GetUserById} from '../../Store/actions/GetUserData';

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt} from '@fortawesome/free-regular-svg-icons';

//PROGRESS BAR
import ProgressProvider from "../StudentProfileCard/ProgressProvider";
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {useHistory} from 'react-router-dom';

const StudentProfile2 = (props) => {
    const studentInfo = useSelector(state=> state.single_user)
    const dispatch = useDispatch()
    
    useEffect(async() => {
        
        // console.log('mounting in Student Profile', await dispatch(GetUserById(props.match.params.id)));
           dispatch(GetUserById(props.match.params.id))
         
    }, [])

    return (
       <div>
       {studentInfo ? 
        <UserProfile2Styled>
            
            <div className="user-short-info student">
                <div className="user1">
                    <div className="img-bg">
                        <img src={studentInfo.profile_picture ? studentInfo.profile_picture : user} alt="user"/>
                    </div>                 
                    <h1>{studentInfo.username}</h1>
                    <h2>{studentInfo.email}</h2>
                    <SocialIcons/>
                </div>

                <div></div>

                <div className="student-progress">

                {Math.floor(studentInfo.grades_student[0].avg.grade__avg) < 30 ? 
                    <div>
                        <ProgressProvider valueStart={0} valueEnd={Math.floor(studentInfo.grades_student[0].avg.grade__avg)}>
                            {(value) => <CircularProgressbar  styles={buildStyles({pathTransitionDuration: 2.15, pathColor: "red", textColor: "red"})} value={value} text ={value +'%'} className="progress-bar "/>}
                        </ProgressProvider>
                        <p className="danger"><span> Message:</span> We recommend you to go over classes again</p>
                    </div>  
                    : Math.floor(studentInfo.grades_student[0].avg.grade__avg) >=30 &&  Math.floor(studentInfo.grades_student[0].avg.grade__avg) <= 70 ? 
                    <div>
                    <ProgressProvider valueStart={0} valueEnd={Math.floor(studentInfo.grades_student[0].avg.grade__avg)}>
                        {(value) => <CircularProgressbar  styles={buildStyles({pathTransitionDuration: 2.15,  pathColor: "#fcba03", textColor: "#fcba03"})} value={value} text ={value +'%'} className="progress-bar "/>}
                    </ProgressProvider>
                    <p className="warning"><span>Message:</span>  You still have a lot of to improve</p>
                    </div> 
                    :
                    <div>
                    <ProgressProvider valueStart={0} valueEnd={Math.floor(studentInfo.grades_student[0].avg.grade__avg)}>
                        {(value) => <CircularProgressbar  styles={buildStyles({pathTransitionDuration: 2.15,  pathColor: "green", textColor: "green"})} value={value} text ={value +'%'} className="progress-bar "/>}
                    </ProgressProvider>
                    <p className="sucess"><span>Message:</span>  You are on a good way, keep going</p>
                    </div> 
                  }

                </div>
            </div>
            

            <div className="user-main-info">
                <div className="user-data2">
                    <h1>Name</h1>
                    <h2>{studentInfo.first_name} {studentInfo.last_name}</h2>
                </div>
                
                <div className="user-data2">
                   <h1>Status</h1>
                    <h2>{studentInfo.status}</h2> 
                </div>
                
                <div className="user-data2">
                   <h1>Address</h1>
                   <h2>{studentInfo.street} {studentInfo.zip_code} {studentInfo.country}</h2> 
                </div>
                
                <div className="user-data2">
                   <h1>About</h1>
                   <p>{studentInfo.about}</p>
                
                </div>
                
                <div className="user-data2">
                    <h1>Student Groups</h1>
                    <StudentsGroups/>
                </div>
                  
            
            </div>
        
        </UserProfile2Styled> : <img className='Loading' src={loading} alt="Loading"/>} 
    </div>)
}

export default withRouter(StudentProfile2);