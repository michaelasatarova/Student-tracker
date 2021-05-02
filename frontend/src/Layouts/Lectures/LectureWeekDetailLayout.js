
import React, {Component} from 'react';

import {ListLecturesStyled} from './styleLecturesLayout';
import LectureWeekDetailComponent
    from '../../Components/Lectures/LectureWeekDetailComponent';

import {connect} from 'react-redux';

import CoursesHomePage from "./CoursesHomePage";
import {GetLectureWeekData} from "../../Store/actions/LecturesActions";

class LectureWeekDetailLayout extends Component {
    render() {
        return (
            <ListLecturesStyled>
                <CoursesHomePage/>
                <div className="cards-list">
                    <div className="lectures">
                        <LectureWeekDetailComponent/>
                    </div>
                </div>
            </ListLecturesStyled>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('LectureDetailLayout mapStateToProps:', state.lectureweek_data)
    return {
        lectureweek_data: state.lectureweek_data
    }
};

export default connect(mapStateToProps)(LectureWeekDetailLayout);

