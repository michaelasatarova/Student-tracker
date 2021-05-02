import React, {Component} from 'react'
import {connect} from 'react-redux';

import {Route, Link} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'

class Day extends Component {
    render(){
    return (
        <Router>
            
            {this.props.global_grades.map((data, index)=> <div key={index}>
                {data.lectures.map((lecture,index)=> 
                    <div key={index}>
                        <h1>Day{lecture.weekday}</h1>
                            <p>{lecture.title}</p>
                    </div>                 
                )}
                {data.students.map((student, index)=>
                    <div key={index}>
                        <h2>{student.first_name} {student.last_name}</h2>
                         {student.grades_student.map((grade, index)=> 
                            <p key={index}>Your grade is:{grade}</p>
                         )}
                    </div>
                )}

            </div> )}

        </Router>
    )
}
}
const mapStateToProps = (state) => {
    console.log("Global Grades: ",state.global_grades);
    return {
   global_grades: state.global_grades,
}};
export default connect(mapStateToProps)(Day)
