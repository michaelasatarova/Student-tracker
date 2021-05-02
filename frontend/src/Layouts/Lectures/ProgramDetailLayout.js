
import React, {Component} from 'react';

import {ListLecturesStyled} from './styleLecturesLayout';
import ProgramDetailComponent
    from '../../Components/Lectures/ProgramDetailComponent';

import {connect} from 'react-redux';
import CoursesHomePage from "./CoursesHomePage";
import {GetProgramData} from "../../Store/actions/LecturesActions";

class ProgramDetailLayout extends Component {
    render() {
        return (
            <ListLecturesStyled>
                <CoursesHomePage/>
                <div className="cards-list">
                    <div className="lectures">
                        <ProgramDetailComponent/>
                    </div>
                </div>
            </ListLecturesStyled>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('ProgramDetailLayout mapStateToProps:', state.program_data)
    return {
        program_data: state.program_data
    }
};

export default connect(mapStateToProps)(ProgramDetailLayout);

