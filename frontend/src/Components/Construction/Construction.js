import React from 'react'

//style
import {ConstructionStyled} from './style'

//img
import ConstructionBG from '../../Assets/under-construction.png';
const Construction = () => {
    return (
        <ConstructionStyled>
            <div className="construction">
                <img src={ConstructionBG} alt="page doesnt exist"/>
            </div>
        </ConstructionStyled>
    )
}

export default Construction
