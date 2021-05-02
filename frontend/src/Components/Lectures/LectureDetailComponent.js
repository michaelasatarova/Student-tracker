// src/Components/LecturesLayout/LectureDetailComponent

import React, {useEffect, useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {CoursesCardStyle} from './StyleLecturesComponent';

import {GetLectureData} from '../../Store/actions/LecturesActions';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faTrashAlt, faPlusSquare} from '@fortawesome/free-regular-svg-icons';

const LectureDetailComponent = (props) => {

    const lectureInfo = useSelector(state => state.lecture_data)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log('--- LectureDetailComponent useEffect ---');
        dispatch(GetLectureData(props.match.params.id))
        console.log('LectureDetailComponent lectureInfo:', lectureInfo);

    }, [])

    return (
        <>
            {lectureInfo ?
                <CoursesCardStyle>
                    <div className="edit-profile">
                        <form>
                            <div className="form-col">
                                <label htmlFor="lecturetitle">Title</label>
                                <input type="text" name="title"
                                       value={lectureInfo.title}
                                       readOnly/>
                            </div>
                            <div className="form-col">
                                <label htmlFor="excercise">Exercise</label>
                                <input type="text" name="exercise"
                                       value={lectureInfo.exercise}
                                       readOnly/>
                            </div>
                            <div className="form-col">
                                <label htmlFor="description">Description</label>
                                <input type="text" name="description"
                                       value={lectureInfo.description}
                                       readOnly/>
                            </div>
                            <div className="form-col">
                                <label htmlFor="expertise">Expertise</label>
                                <input type="text" name="expertise"
                                       value={lectureInfo.expertise}
                                       readOnly/>
                            </div>
                            <div className="form-col">
                                <label htmlFor="programs">Programs</label>
                                <input type="text" name="programs"
                                       value={lectureInfo.programs}
                                       readOnly/>
                            </div>
                            <div className="form-col">
                                <label htmlFor="week">Week</label>
                                <input type="text" name="week"
                                       value={lectureInfo.week}
                                       readOnly/>
                            </div>
                            <div className="form-col">
                                <label htmlFor="weekday">Weekday</label>
                                <input type="text" name="weekday"
                                       value={lectureInfo.weekday}
                                       readOnly/>
                            </div>
                            <div className="form-btns">
                                <Link to='/edit_lecture'>
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

                            </div>
                        </form>
                    </div>
                </CoursesCardStyle> : 'Loading'}
        </>)

}

export default withRouter(LectureDetailComponent);
