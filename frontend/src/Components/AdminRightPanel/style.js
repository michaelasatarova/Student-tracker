import styled from "styled-components";

//img
import expertiseBg from '../../Assets/coding-bg.jpg';
import teachingBg from '../../Assets/teaching.jpg';
import groupBg from '../../Assets/groups.jpg';
import gradeBg from '../../Assets/grade.jpg';
import groupStudentsBg from '../../Assets/group-students.webp';
import programBg from '../../Assets/program.jpg';
import studentTrackerBg from '../../Assets/student-tracker.jpg';

export const AdminRightPanelStyled = styled.section`
.expertise-up, .lectures-up, .teachers-up, .students-up{
    width:500px;
    height:170px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:${props => props.theme.borderRadius};
    margin:10px;
    margin-top:0;
    background-color:${props => props.theme.pinkColor};
    background-repeat: no-repeat;
    background-size: cover;
    opacity:0.5;
    //border:1px solid #323232;
    &:hover{
        opacity:1;
        color:${props => props.theme.whiteColor};
    }
    h1{
        font-size:20px;
        font-weight:700;
        font-family:${props => props.theme.fontFamily};
    }
  

}
/* .expertise-up{
    background-image: url(${expertiseBg});
}
.lectures-up{
    background-image: url(${teachingBg});
    background-position:50% 50%;
}
.teachers-up{
    background-image: url(${groupBg});
}
.students-up{
    background-image: url(${groupStudentsBg});
} */

`
export const StudentRightPanelStyled = styled.section`
.program-up, .grade-up, .groups-up, .student-tracker-up{
    width:500px;
    height:170px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:${props => props.theme.borderRadius};
    margin:10px;
    margin-top:0;
    background-color:${props => props.theme.pinkColor};
    background-repeat: no-repeat;
    background-size: cover;
    opacity:0.5;
    &:hover{
        opacity:1;
        color:${props => props.theme.whiteColor};
    }
    h1{
        font-size:20px;
        font-weight:700;
        font-family:${props => props.theme.fontFamily};
    }
  

}
/* .program-up{
    background-image: url(${programBg});
}
.grade-up{
    background-image: url(${gradeBg});
    background-position:50% 50%;
}
.groups-up{
    background-image: url(${groupStudentsBg });
}
.student-tracker-up{
    background-image: url(${studentTrackerBg });
    
} */
`