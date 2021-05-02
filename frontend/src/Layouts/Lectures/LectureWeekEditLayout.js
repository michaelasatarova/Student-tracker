
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {EditLectureStyled} from './styleLecturesLayout';

import {connect} from 'react-redux';
import {EditLectureWeekAction} from '../../Store/actions/LecturesActions';
import CoursesHomePage from "./CoursesHomePage";

class LectureWeekEditLayout extends Component {
    state = {
        lectureweek: this.props.lectureweek_data
    }

    formHandler = (e) => {
        console.log("--- LectureWeekEditLayout formHandler ---");
        const {value, name} = e.target
        this.setState({
            lectureweek: {...this.state.lectureweek, [name]: value}
        })
    }

    handleSubmit = (e) => {
        console.log("--- LectureWeekEditLayout handleSubmit ---");
        e.preventDefault();
        this.props.dispatch(EditLectureWeekAction(this.state.lectureweek.id, this.state.lectureweek, this.props.history))
    }

    render() {
        console.log("LectureWeekEditLayout this.props.history:", this.props.history);
        console.log("LectureWeekEditLayout this.state.lectureweek:", this.state.lectureweek);
        return (
            <EditLectureStyled>
                <CoursesHomePage/>
                <div className="edit-profile">
                    <form onSubmit={this.handleSubmit}>
                            <div className="form-col">
                                <label htmlFor="title">Title</label>
                                <input type="text" name="title"
                                       value={this.state.lectureweek ? this.state.lectureweek.title : ''}
                                       onChange={this.formHandler}/>
                            <p className="errorMessage"></p>
                            </div>
                            <div className="form-col">
                                <label htmlFor="sort">Exercise</label>
                                <input type="text" name="sort"
                                       value={this.state.lectureweek ? this.state.lectureweek.sort : ''}
                                       onChange={this.formHandler}/>
                            <p className="errorMessage"></p>
                            </div>

                            <div className="form-btns">
                                <button className="btn-save" type='submit'>Save
                                </button>
                                <Link to='/lectureweeks'>
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
            console.log("--- LectureWeekEditLayout mapStateToProps ---");
            return {
                lectureweek_data: state.lectureweek_data
            }
        }

    export default connect(mapStateToProps)(LectureWeekEditLayout)
