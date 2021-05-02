import React from 'react';
import {Link} from 'react-router-dom';

//style
import {StudentRightPanelStyled} from './style';

const StudentRightPanel = () => {
    return (
        <StudentRightPanelStyled>
            <Link to="/lectures">
                <div className="program-up">
                    <h1>Program</h1>
                </div>
            </Link>
            <Link to="/construction">
                <div className="grade-up">
                    <h1>Grade</h1>
                </div>
            </Link> 
            <Link to="/groups">  
            <div className="groups-up">
                <h1>Groups</h1>
            </div>
            </Link>
            <Link to="/student_tracker">
                <div className="student-tracker-up">
                    <h1>Student Tracker</h1>
                </div>
            </Link>
        </StudentRightPanelStyled>
    )
}

export default StudentRightPanel;
