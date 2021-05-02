import React from 'react'

//style
import {WeekPageStyled} from './style'

//components
import StudentResultCard from '../../Components/StudentResultCard/StudentResultCard';
import Navigation from '../../Components/Navigation/Navigation';

const WeekOne = () => {
    return (
        <WeekPageStyled>
            <Navigation /> 
            {/* <div className="main-content">
                 <StudentResultCard/>
            </div>      */}
        </WeekPageStyled>
    )
}

export default WeekOne
