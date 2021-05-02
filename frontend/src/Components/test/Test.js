import React, {Component} from 'react'
//redux
import {connect} from 'react-redux';

import {Route, Link} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Day from './Day';

class Test extends Component{
    
    render(){
        
        return (
            <Router>
               {this.props.global_grades.map((data, index)=> <p key={index} >{data.lectures.map((lecture,index)=> <Link to={`/week/${data.id}`}><p key={index}>{lecture.week}</p></Link> )}</p> )}
               <Route path="/week/1" component={Day}/> 
            </Router>
        )
    }
}
const mapStateToProps = (state) => {
    console.log("Global Grades: ",state.global_grades);
    return {
   global_grades: state.global_grades,
}};
export default connect(mapStateToProps)(Test)
