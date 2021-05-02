import React, {useEffect, useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {useDispatch} from 'react-redux';
//img
import user from '../../Assets/user.jpg';
//style
import {UserProfileCardStyled} from './style';
//Components
import SocialIcons from '../SocialIcons/SocialIcons';
//Redux
import {GetUserById} from '../../Store/actions/GetUserData';

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt} from '@fortawesome/free-regular-svg-icons';

const StudentProfile = (props) => {
    const [studentInfo, setStudentInfo] = useState({})
    const dispatch = useDispatch()
    
    useEffect(async() => {
        
        console.log('mounting in Student Profile', await dispatch(GetUserById(props.match.params.id)));
          setStudentInfo(await dispatch(GetUserById(props.match.params.id)))
         
    }, [])
 
    return (
        <>
       {studentInfo ?  
        <UserProfileCardStyled>
            
                <div className="admin-profile">
                    <img src={studentInfo.profile_picture ? studentInfo.profile_picture : user} alt="user"/>
                    <h1>{studentInfo.username}</h1>
                    <h2>{studentInfo.email}</h2>
                    <SocialIcons/>
                    <h1>About</h1>
                    <div className="user-info">  
                        <h2><span>Name:</span>{studentInfo.first_name} {studentInfo.last_name} </h2>
                        <h2><span>Adress:</span> {studentInfo.street} {studentInfo.zip_code} {studentInfo.country}</h2>
                        <h2><span>Status:</span>{studentInfo.status}</h2>
                        <h2><span>Member since:</span> {studentInfo.date_joined}</h2>
                        <h3>About {studentInfo.first_name}</h3>
                        <p>{studentInfo.about}</p>               
                    </div>
                    <div className="edit-delete">
                    <button> <FontAwesomeIcon className="i" icon={faEdit} size = '2x' /></button>
                    <button> <FontAwesomeIcon className="d" icon={faTrashAlt} size = '2x' /></button>
                    </div>
                </div>
          
        </UserProfileCardStyled> : 'Loading'} 
    </>)
}

export default withRouter(StudentProfile) ;
