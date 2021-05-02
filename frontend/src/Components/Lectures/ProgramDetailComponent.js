
import React, {useEffect, useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {CoursesCardStyle} from './StyleLecturesComponent';

import {GetProgramData} from '../../Store/actions/LecturesActions';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faTrashAlt, faPlusSquare} from '@fortawesome/free-regular-svg-icons';

const ProgramDetailComponent = (props) => {

    const programInfo = useSelector(state => state.program_data)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log('--- ProgramDetailComponent useEffect ---');
        dispatch(GetProgramData(props.match.params.id))
        console.log('ProgramDetailComponent lectureInfo:', programInfo);

    }, [])

    return (
        <>
            {programInfo ?
                <CoursesCardStyle>
                    <div className="edit-profile">
                        <form>
                            <div className="form-col">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name"
                                       value={programInfo.name}
                                       readOnly/>
                            </div>
                            <div className="form-col">
                                <label htmlFor="description">Description</label>
                                <input type="text" name="description"
                                       value={programInfo.description}
                                       readOnly/>
                            </div>
                            <div className="form-col">
                                <label htmlFor="start_date">Start Date</label>
                                <input type="text" name="start_date"
                                       value={programInfo.start_date}
                                       readOnly/>
                            </div>
                            <div className="form-col">
                                <label htmlFor="end_date">End Date</label>
                                <input type="text" name="end_date"
                                       value={programInfo.end_date}
                                       readOnly/>
                            </div>
                            <div className="form-btns">
                                <Link to='/edit_program'>
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
                                <Link to='/lectureweeks'>
                                    <button>Program Weeks</button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </CoursesCardStyle> : 'Loading'}
        </>)

}

export default withRouter(ProgramDetailComponent);
