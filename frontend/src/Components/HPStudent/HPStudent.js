import React from 'react';
import user from '../../Assets/user.jpg';

//style
import {HPStudentStyled} from './style'; 

const HPStudent = (props) => {
    
    return (

        <HPStudentStyled > 
            {console.log(props.student.profile_picture)}
            <img src={props.student.profile_picture ? props.student.profile_picture : user} alt="user"/>
            <h2>{props.student.first_name}</h2>
        </HPStudentStyled>
    )
}

export default HPStudent
