import React, {Component} from 'react';
import {Link} from 'react-router-dom';

//style
import {TableStyled} from './style';


//redux
import {GlobalSingleAction} from '../../Store/actions/GlobalSingleGrades';
import {connect} from 'react-redux';

// components
import Navigation from '../../Components/Navigation/Navigation';
import NewGrade from '../../Components/NewGrade/NewGrade';

//img
import students from '../../Assets/propulsion-students.png'
import loading from '../../Assets/loading.gif'
 
class GlobalGrades extends Component {
    constructor(props) {
        super();

        this.state = {
            show: true,
        };
    }


    toggleClass =()=> {
        // console.log('on click', this.state.show);
        this.setState({ show: !this.state.show });
    };


    componentDidMount(){
        // console.log('mounting in GlobalGrades');
        this.props.dispatch(GlobalSingleAction(this.props.match.params.id))
    }


    render(){ 
        const{data}=this.props 
        return (
            <TableStyled>
            
                <Navigation/>

                <div className="program-data">
                {data ?               
               
                <>

                    <div className={this.state.show ? 'overlay-hidden' : 'overlay-pd' }>
                    {/* <div className= 'overlay-pd' > */}
                        <NewGrade students={data.students} lectures={data.lectures} toggleClass={this.toggleClass}/>
                    </div> 
                            
                    <div className="p-data">
                         <div className="pd1">
                            <h1>{data.name}</h1>
                            <h2>Date:{data.start_date} {data.end_date}</h2>
                            <p>{data.description}</p> 
                            <div className="btn-groups">
                                <Link to="/new_user"><button>New Student</button></Link>
                                <button onClick={this.toggleClass}>New Grade</button>
                            </div>                        
                         </div>
                         <div className="pd2">
                             <img src={students} alt="students"/>
                        </div>                          
                    </div>
                           
                        <div className="wrapper">
                            <table >
                                {/* Basic */}
                                <tr>
                                    <th className="th-blue" rowSpan="4"></th>
                                    <th className="table-header"> Week</th>
                                    {data.lectures.map((lecture, index)=><th colSpan={lecture.length} className="th-blue" key={index}>{lecture.week} </th>)}
                                </tr>
                                <tr>
                                    <th className="table-header">Day</th>
                                    {data.lectures.map((lecture, index)=> <td  key={index}>{lecture.weekday} </td>)}
                                </tr>
                                <tr>
                                    <th className="table-header">Lecture</th>
                                    {data.lectures.map((lecture, index)=> <td  key={index}>{lecture.title} </td>)}
                                </tr>
                                <tr>
                                    <th className="table-header">Exercise</th>
                                    {data.lectures.map((lecture, index)=> <td  key={index}>{lecture.exercise} </td>)}
                                </tr>
                                {/* Instructor */}
                                <tr>
                                    <th className="th-blue" rowSpan="3">Instructor</th>
                                    <th className="table-header">Date</th>
                                    {data.lectures.map((lecture, index)=> lecture.lessons.map((lesson, i)=> <td key={i}>{lesson.date} </td>  ) )}
                                </tr>
                                <tr>                              
                                    <th className="table-header">Name</th>
                                    {data.lectures.map((lecture, index)=> lecture.lessons.map((lesson, i)=> <td key={i}>{lesson.teacher ? lesson.teacher.first_name : ''} {lesson.teacher ? lesson.teacher.last_name : ''} </td>  ) )}
                                </tr>
                                <tr>                              
                                    <th className="table-header">Time Finished</th>
                                    {data.lectures.map((lecture, index)=> lecture.lessons.map((lesson, i)=> <td key={i}>{lesson.end_time} </td>  ) )}
                                </tr>
                                {/* Students */}
                                <tr>
                                    <th className="th-blue" rowSpan="16">Students</th>       
                                    <td className="table-header" >💻 😎</td>
                                </tr>
                                {data.students.map((student, index)=> 
                                    <tr key={index}>
                                        <th className="table-header">{student.username}</th>
                                        {student.grades_student.map((grade, index)=> <td key={index}>{grade.grade} %</td>)}
                                    </tr>)
                                }
                            </table>   
                          </div>  
                </> : <img className='Loading' src={loading} alt="Loading"/>} 
                
                </div>
            
                  
        </TableStyled>
            )
    }
}
const mapStateToProps = (state) => {
    // console.log("SINGLE Grades: ",state.single_grade);
    return {
   data: state.single_grade,
}};


export default connect(mapStateToProps)(GlobalGrades)
