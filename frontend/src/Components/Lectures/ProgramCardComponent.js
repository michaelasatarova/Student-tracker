import React from 'react'

//style
import {CoursesListStyle} from './StyleLecturesComponent'

import {useHistory} from 'react-router-dom';

const ProgramCardComponent = (props) => {
    const history = useHistory();

    const RedirectToProgramOnClickHandler = () => {
        history.push(`/program_detail/${props.data.id}`)
    }
    return (
        <CoursesListStyle onClick={RedirectToProgramOnClickHandler}>
            <div className="list-row">
                <p>{props.data.name}</p>
            </div>
        </CoursesListStyle>
    )
}

export default ProgramCardComponent
