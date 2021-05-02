// src/Components/LecturesLayout/LectureCardComponent

import React from 'react'

//style
import {CoursesListStyle} from './StyleLecturesComponent'

import {useHistory} from 'react-router-dom';

const LectureCardComponent = ({data}) => {
    const history = useHistory();

    const RedirectToLectureOnClickHandler = () => {
        history.push(`/lecture_detail/${data.id}`)
    }
    return (
        <CoursesListStyle onClick={RedirectToLectureOnClickHandler}>
            <div className="list-row">
                <p>{data.title}</p>
            </div>
        </CoursesListStyle>
    )
}

export default LectureCardComponent
