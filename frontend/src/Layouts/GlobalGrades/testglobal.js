import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//style
import {StudentTrackerStyled} from '../StudentTracker/style';

//components
import Navigation from '../../Components/Navigation/Navigation';
import Test from '../../Components/test/Test';
//progress bar
import ProgressProvider from "../../Components/StudentProfileCard/ProgressProvider";
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

//redux
import {GlobalGradesAction} from '../../Store/actions/GlobalGrades';
import {connect} from 'react-redux';

class GlobalGrades extends Component {
    constructor() {
        super();
    
        this.state = {
          email: "",
          password: "",
          emailError: "",
          passwordError:"",

        };
      }



    componentDidMount(){
        console.log('mounting in GlobalGrades');
        this.props.dispatch(GlobalGradesAction())
    }

//components
  Week =(props)=>{
    return(
        <li>hello</li>
       )
    
}


    render(){
    const progress = 20  //hardcodes

    return (
            <Router>
                <StudentTrackerStyled>            
                    <Navigation/>
                    
                    <div className="tracker">                    
                        <div className=" st program">
                            <h1>Program</h1>
                            {this.props.global_grades.map((data, index)=> <Link to={`/program/${data.id}`}><p key={index} >{data.name}</p></Link> )}
                            
                            <div className="st week">
                            <h1>Week</h1>
                                <ul>
                                   
                                     <Route path="/program/1" component={Test}/> 
                                   
                                        
                                
                                   
                                </ul>                              
                            </div>

                        </div>
                    </div>

                                    
                </StudentTrackerStyled>
            {/* <StudentTrackerStyled>
                <Navigation/>
                <div className="tracker">
                                               
                 <div className=" st program">
                        
                        <Link to='/'><p>Full Satck Bootcamp Batch 14</p></Link>
                    </div>
                    <div className="st week">
                        <h1>Week</h1>
                        <ul>
                            <Link to="/"><li>Prework</li></Link>
                            <Link to="/"><li>Week 1</li></Link>
                            <Link to="/"><li>Week 2</li></Link>
                            <Link to="/"><li>Week 3</li></Link>
                            <Link to="/"><li>Week 4</li></Link>
                            <Link to="/"><li>Week 5</li></Link>
                            <Link to="/"><li>Week 6</li></Link>
                            <Link to="/"><li>Week 8</li></Link>
                            <Link to="/"><li>Week 9</li></Link>
                            <Link to="/"><li>Week 10</li></Link>
                            <Link to="/"><li>Week 11</li></Link>
                            <Link to="/"><li>Week 12</li></Link>
                        </ul>
                    </div>
                    <div className="st days">
                        <h1>Days</h1>
                        <div className="students-days">
                            <div className="day">
                                <p>Day 1</p>
                                <ProgressProvider valueStart={0} valueEnd={progress}>
                                {(value) => <CircularProgressbar  styles={buildStyles({pathTransitionDuration: 2.15, pathColor: "red", textColor: "red"})} value={value} text ={value +'%'} className="progress-bar "/>}
                                </ProgressProvider>
                                <p>Some message or comment</p>
                            </div>
                            <div className="day">
                                <p>Day 1</p>
                                <ProgressProvider valueStart={0} valueEnd={progress}>
                                {(value) => <CircularProgressbar  styles={buildStyles({pathTransitionDuration: 2.15, pathColor: "red", textColor: "red"})} value={value} text ={value +'%'} className="progress-bar "/>}
                                </ProgressProvider>
                                <p>Some message or comment</p>
                            </div>
                            <div className="day">
                                <p>Day 2</p>
                                <ProgressProvider valueStart={0} valueEnd={progress}>
                                {(value) => <CircularProgressbar  styles={buildStyles({pathTransitionDuration: 2.15, pathColor: "red", textColor: "red"})} value={value} text ={value +'%'} className="progress-bar "/>}
                                </ProgressProvider>
                                <p>Some message or comment</p>
                            </div>
                            <div className="day">
                                <p>Day 3</p>
                                <ProgressProvider valueStart={0} valueEnd={progress}>
                                {(value) => <CircularProgressbar  styles={buildStyles({pathTransitionDuration: 2.15, pathColor: "red", textColor: "red"})} value={value} text ={value +'%'} className="progress-bar "/>}
                                </ProgressProvider>
                                <p>Some message or comment</p>
                            </div>
                            <div className="day">
                                <p>Day 4</p>
                                <ProgressProvider valueStart={0} valueEnd={progress}>
                                {(value) => <CircularProgressbar  styles={buildStyles({pathTransitionDuration: 2.15, pathColor: "red", textColor: "red"})} value={value} text ={value +'%'} className="progress-bar "/>}
                                </ProgressProvider>
                                <p>Some message or comment</p>
                            </div>
                            <div className="day">
                                <p>Day 5</p>
                                <ProgressProvider valueStart={0} valueEnd={progress}>
                                {(value) => <CircularProgressbar  styles={buildStyles({pathTransitionDuration: 2.15, pathColor: "red", textColor: "red"})} value={value} text ={value +'%'} className="progress-bar "/>}
                                </ProgressProvider>
                                <p>Some message or comment</p>
                            </div>
                        </div>
                    </div>
                </div>
        </StudentTrackerStyled> */}
    </Router>
        )
    }
}
const mapStateToProps = (state) => {
    // console.log("Global Grades: ",state.global_grades);
    return {
   global_grades: state.global_grades,
}};


export default connect(mapStateToProps)(GlobalGrades)
