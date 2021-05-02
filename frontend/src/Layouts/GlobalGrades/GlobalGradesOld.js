import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//style
import {TableStyled} from './style';

//components
import Navigation from '../../Components/Navigation/Navigation';
import Test from '../../Components/test/Test';

//redux
import {GlobalGradesAction} from '../../Store/actions/GlobalGrades';
import {connect} from 'react-redux';

class GlobalGrades extends Component {
    

    componentDidMount(){
        console.log('mounting in GlobalGrades');
        this.props.dispatch(GlobalGradesAction())
    }


    render(){  
        return (
                <TableStyled>
                    {this.props.global_grades ? this.props.global_grades.map((data, index)=> 
                    <div key={index}>
                        <h1>{data.name}</h1>
                        <h2>Date:</h2>
                        <p>{data.description}</p>
                    </div>): ''}
                    
                    <table >
                        {/* Basic */}
                          
                            
                            <tr>
                                <th rowSpan="4"></th>
                                <th>Week</th>
                                {this.props.global_grades.map((data)=> data.lectures.map((lecture, index)=> <td colSpan={lecture.length} key={index}>{lecture.week} </td>))}
                            </tr>
                            
                            <tr>
                                
                                <th>Day</th>
                                {this.props.global_grades.map((data)=> data.lectures.map((lecture, index)=> <td  key={index}>{lecture.weekday} </td>))}
                            </tr>
                            
                            <tr>
                                
                                <th>Lecture</th>
                                {this.props.global_grades.map((data)=> data.lectures.map((lecture, index)=> <td  key={index}>{lecture.title} </td>))}
                            </tr>
                            <tr>
                                
                                <th>Exercise</th>
                                {this.props.global_grades.map((data)=> data.lectures.map((lecture, index)=> <td  key={index}>{lecture.exercise} </td>))}
                            </tr>
                        {/* Instructor */}
                            <tr>
                                <th rowSpan="3">Instructor</th>
                                <th>Date</th>
                                <td colSpan="20"></td>
                                
                            </tr>
                            <tr>                              
                                <th>Name</th>
                                <td colSpan="20"></td>
                            </tr>

                            <tr>                              
                                <th>Time Finished</th>
                                <td colSpan="20"></td>
                            </tr>

                            {/* Students */}
                            <tr>
                                <th rowSpan="16">Students</th>       
                                <td colSpan="20">💻 😎</td>
                            </tr>

                            {this.props.global_grades.map((data)=> data.students.map((student, index)=> 
                                <tr key={index}>
                                    <th>{student.username}</th>
                                    {student.grades_student.map((grade, index)=> <td key={index}>{grade} %</td>)}
                                </tr>)
                            )}
                                
                    </table>

            
                   
                    {/* <table id="table">
                        <tbody>
                            <tr>
                                <th>Day</th>
                                {this.props.global_grades.map((data)=> data.lectures.map((lecture, index)=> <td  className='col-row' key={index}>{lecture.weekday} </td>))}
                            </tr>
                            <tr>
                                <th>Week</th>
                                {this.props.global_grades.map((data)=> data.lectures.map((lecture, index)=> <td colspan={data.lectures.length} className='col-row' key={index}>{lecture.week} </td>))}
                            </tr>

                            
                        </tbody>
                    </table> */}
                </TableStyled>
            )
    }
}
const mapStateToProps = (state) => {
    console.log("Global Grades: ",state.global_grades);
    return {
   global_grades: state.global_grades,
}};


export default connect(mapStateToProps)(GlobalGrades)
