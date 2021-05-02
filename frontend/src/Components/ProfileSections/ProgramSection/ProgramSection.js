import React from 'react'

//style
import {ProgramSectionStyled} from './style';

const ProgramSection = () => {
    return (
        <ProgramSectionStyled>
            <h1>Student ´s Program</h1>
            <div className="program-about">
              <h2>About Program</h2> 
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rerum ipsa omnis quis atque, error eos iure incidunt dolores distinctio vitae nisi nulla, voluptatum eius porro sapiente explicabo molestiae. Delectus.</p> 
            </div>
            <div className="program-termin">
                <h2>Termin</h2>
                <p>9.11.2020 - 9.2.2021</p>
            </div>
             
        </ProgramSectionStyled>
    )
}

export default ProgramSection
