import React from 'react'

//style
import {StudentResultCardStyled} from './style';

//Components
import Progress from '../Progress/Progress';

//img
import User from '../../Assets/user.jpg'

const StudentResultCard = () => {
    return (
        <StudentResultCardStyled>
            <img src={User} alt="user"/>
            <h1>Michaela Šatarova</h1>
            <h2>Gersau,Switzerand</h2>
            <p>Maybe something About</p>
            <h3>Resut</h3>
            <Progress/>
        </StudentResultCardStyled>
    )
}

export default StudentResultCard
