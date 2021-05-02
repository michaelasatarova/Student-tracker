// src/Layouts/LecturesLayout/LectureDetailLayout

import React, {Component} from 'react';

import {ListLecturesStyled} from './styleLecturesLayout';
import LectureDetailComponent
    from '../../Components/Lectures/LectureDetailComponent';

import {connect} from 'react-redux';
import CoursesHomePage from "./CoursesHomePage";

class LectureDetailLayout extends Component {
    render() {
        return (
            <ListLecturesStyled>
                <CoursesHomePage/>
                <div className="cards-list">
                    <div className="lectures">
                        <LectureDetailComponent/>
                    </div>
                </div>
            </ListLecturesStyled>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('LectureDetailLayout mapStateToProps:', state.lecture_data)
    return {
        lecture_data: state.lecture_data
    }
};

export default connect(mapStateToProps)(LectureDetailLayout);

