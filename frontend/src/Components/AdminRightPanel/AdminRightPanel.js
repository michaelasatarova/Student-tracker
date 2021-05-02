import React from 'react';
import {Link} from 'react-router-dom';

//style
import {AdminRightPanelStyled} from './style';

const AdminRightPanel = () => {
    return (
        <AdminRightPanelStyled>
            <Link to="/profile_expertise">
                <div className="expertise-up">
                    <h1>Expertise</h1>
                </div>
            </Link>
            <Link to="/lectures">
                <div className="lectures-up">
                    <h1>Lectures</h1>
                </div>
            </Link> 
            <Link to="/profile_teachers_list">  
            <div className="teachers-up">
                <h1>Colleagues </h1>
                <h1>Teachers</h1>
                <h1> Admins</h1>
            </div>
            </Link>
            <Link to="/students_list">
                <div className="students-up">
                    <h1>Students</h1>
                </div>
            </Link> 
           
        </AdminRightPanelStyled>
    )
}

export default AdminRightPanel
