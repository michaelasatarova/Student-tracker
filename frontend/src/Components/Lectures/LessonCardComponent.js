import React from 'react'

//style
import {CoursesListStyle} from './StyleLecturesComponent'

const LessonCardComponent = (props) => {

    return (
        <CoursesListStyle>
            <div className="list-row">
                <p>{props.data.date}</p>
            </div>
            div>
        </CoursesListStyle>
    )
}

export default LessonCardComponent
