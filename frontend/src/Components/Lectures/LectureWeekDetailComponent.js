import React, {useEffect, useState} from 'react';
import {Link, withRouter, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {CoursesCardStyle} from './StyleLecturesComponent';

import {GetLectureWeekData, GetLectureByWeek} from '../../Store/actions/LecturesActions';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faEdit,
    faTrashAlt,
    faPlusSquare
} from '@fortawesome/free-regular-svg-icons';

const LectureWeekDetailComponent = (props) => {

    const lectureweekInfo = useSelector(state => state.lectureweek_data)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        console.log('--- LectureWeekDetailComponent useEffect ---');
        dispatch(GetLectureWeekData(props.match.params.id))
        console.log('LectureWeekDetailComponent lectureweekInfo:', lectureweekInfo);

    }, [])
    const getweeklylectures = (event) => {
        event.preventDefault()
        dispatch(GetLectureByWeek(props.match.params.id, history))
    }

    return (
        <>
            {lectureweekInfo ?
                <CoursesCardStyle>
                    <div className="edit-profile">
                        <form>
                            <div className="form-col">
                                <label htmlFor="title">Title</label>
                                <input type="text" name="title"
                                       value={lectureweekInfo.title}
                                       readOnly/>
                            </div>
                            <div className="form-col">
                                <label htmlFor="sort">Exercise</label>
                                <input type="text" name="sort"
                                       value={lectureweekInfo.sort}
                                       readOnly/>
                            </div>
                            <div className="form-btns">
                                <Link to='/edit_lectureweek'>
                                    <button><FontAwesomeIcon className="i"
                                                             icon={faEdit}
                                                             size='2x'/>
                                    </button>
                                </Link>
                                <button><FontAwesomeIcon className="d"
                                                         icon={faTrashAlt}
                                                         size='2x'/></button>
                                <button><FontAwesomeIcon className="p"
                                                         icon={faPlusSquare}
                                                         size='2x'/></button>
                                {/*<Link to='/lecturesbyweek'>*/}
                                    <button onClick={getweeklylectures}>Lectures </button>
                                {/*</Link>*/}

                            </div>
                        </form>
                    </div>
                </CoursesCardStyle> : 'Loading'}
        </>)

}

export default withRouter(LectureWeekDetailComponent);
