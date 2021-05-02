import React from 'react'

import {ExpertiseSectionStyled} from './style';

import ExpertiseArea from '../../ExpertiseArea/ExpertiseArea';

const ExpertiseSection = (props) => {

    return (
        <ExpertiseSectionStyled>
            <h1>Your expertise</h1>
            <ul>
               {props.user_expertise.map((expertise, index)=><li key={index}>{expertise.name}</li>)}      
            </ul>
            <h2 >Do you need a help?</h2>         
            <ExpertiseArea/>                      
        </ExpertiseSectionStyled>
    )
}

export default ExpertiseSection
