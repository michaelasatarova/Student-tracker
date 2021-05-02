import React from 'react';
import {Link} from 'react-router-dom';

import {NavigationStyled} from "./styleLecturesLayout";

const CoursesHomePage = () => {

    return (
        <NavigationStyled>
            <nav>
                <ul>
                    <Link to='/programs'>
                        <li>Programs</li>
                    </Link>
                    <Link to='/lectureweeks'>
                        <li>LectureWeeks</li>
                    </Link>
                    <Link to='/lectures'>
                        <li>Lectures</li>
                    </Link>
                    <Link to='/lessons'>
                        <li>Lessons</li>
                    </Link>
                    <Link to='/home_page'>
                        <li>Home</li>
                    </Link>
                </ul>
            </nav>
        </NavigationStyled>
    )
}

export default CoursesHomePage
