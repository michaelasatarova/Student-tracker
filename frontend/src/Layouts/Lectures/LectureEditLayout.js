// src/Layouts/LecturesLayout/LectureEditLayout

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {EditLectureStyled} from './styleLecturesLayout';

import {connect} from 'react-redux';
import {EditLectureAction} from '../../Store/actions/LecturesActions';
import CoursesHomePage from "./CoursesHomePage";

class LectureEditLayout extends Component {
    state = {
        lecture: this.props.lecture_data
    }

    formHandler = (e) => {
        console.log("--- LectureEditLayout formHandler ---");
        const {value, name} = e.target
        this.setState({
            lecture: {...this.state.lecture, [name]: value}
        })
    }

    handleSubmit = (e) => {
        console.log("--- LectureEditLayout handleSubmit ---");
        e.preventDefault();
        this.props.dispatch(EditLectureAction(this.state.lecture.id, this.state.lecture, this.props.history))
    }

    render() {
        console.log("LectureEditLayout this.props.history:", this.props.history);
        console.log("LectureEditLayout this.state.lecture:", this.state.lecture);
        return (
            <EditLectureStyled>
                <CoursesHomePage/>
                <div className="edit-profile">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-col">
                            <label htmlFor="lecturetitle">Title</label>
                            <input type="text" name="title"
                                   value={this.state.lecture ? this.state.lecture.title : ''}
                                   onChange={this.formHandler}/>
                            <p className="errorMessage"></p>
                        </div>
                        <div className="form-col">
                            <label htmlFor="lectureexercise">Exercise</label>
                            <input type="text" name="exercise"
                                   value={this.state.lecture ? this.state.lecture.exercise : ''}
                                   onChange={this.formHandler}/>
                            <p className="errorMessage"></p>
                        </div>
                        <div className="form-col">
                            <label htmlFor="description">Description</label>
                            <input type="text" name="description"
                                   value={this.state.lecture ? this.state.lecture.description : ''}
                                   onChange={this.formHandler}/>
                        </div>
                        <div className="form-col">
                            <label htmlFor="expertise">Expertise</label>
                            <input type="text" name="expertise"
                                   value={this.state.lecture ? this.state.lecture.expertise : ''}
                                   onChange={this.formHandler}/>
                        </div>
                            <div className="form-col">
                                <label htmlFor="programs">Programs</label>
                                <input type="text" name="programs"
                                       value={this.state.lecture ? this.state.lecture.programs : ''}
                                       onChange={this.formHandler}/>
                            </div>
                            <div className="form-col">
                                <label htmlFor="week">Week</label>
                                <input type="text" name="week"
                                       value={this.state.lecture ? this.state.lecture.week : ''}
                                       onChange={this.formHandler}/>
                            </div>
                            <div className="form-col">
                                <label htmlFor="weekday">Weekday</label>
                                <input type="text" name="weekday"
                                       value={this.state.lecture ? this.state.lecture.weekday : ''}
                                       onChange={this.formHandler}/>
                            </div>

                            <div className="form-btns">
                                <button className="btn-save" type='submit'>Save
                                </button>
                                <Link to='/lectures'>
                                    <button className="btn-cancle">Cancel
                                    </button>
                                </Link>

                        </div>
                    </form>
                </div>
            </EditLectureStyled>
    )
    }
    }

    const mapStateToProps = (state) =>
        {
            console.log("--- LectureEditLayout mapStateToProps ---");
            return {
                lecture_data: state.lecture_data
            }
        }

    export default connect(mapStateToProps)(LectureEditLayout)
