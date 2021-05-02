import React from 'react'

//style
import {CoursesListStyle} from './StyleLecturesComponent'

import {useHistory} from 'react-router-dom';

const LectureWeekCardComponent = ({data}) => {
    const history = useHistory();

    const RedirectToLectureWeekOnClickHandler = () => {
        history.push(`/lectureweek_detail/${data.id}`)
    }
    return (
        <CoursesListStyle onClick={RedirectToLectureWeekOnClickHandler}>
            <div className="list-row">
                <p>{data.title}</p>
            </div>
        </CoursesListStyle>
    )
}

export default LectureWeekCardComponent
