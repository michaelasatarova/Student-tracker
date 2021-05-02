import React, {Component} from 'react';

//style
import {AddGradeStyled} from './style';

//components
// import NewGrade from '../../Components/NewGrade/NewGrade';
import Navigation from '../../Components/Navigation/Navigation';
import {GetGrades} from '../../Store/actions/GetGrades';
import baseUrl from '../../Helpers/BaseUrl';
import {connect} from 'react-redux';

class AddGrade extends Component {
    constructor() {
        super();  
        this.state = {
          grade: 0, 
          repository:"",
          student:"",
          lecture:"",    
        };
      }   

      //get all grades
      componentDidMount(){
        // console.log('mounting in Grades');
        this.props.dispatch(GetGrades())
    }


    //   handleGrade = (event) => {
    //     this.setState({ grade: event.target.value });
    //   };
    //   handleRepository = (event) => {
    //     this.setState({ repository: event.target.value });
    //   };
    //   handleStudent = (event) => {
    //     this.setState({ student: event.target.value });
    //   };
    //   handleLecture = (event) => {
    //     this.setState({ lecture: event.target.value });
    //   };


    //   handleSubmit = (e) => {
    //     e.preventDefault();

    //   const config = {
    //     body: JSON.stringify({ 
    //         grade: this.state.grade,
    //         repository: this.state.repository,
    //         student:this.state.student,
    //         lecture:this.state.lecture,
    //     }),
    //     method: "POST",
    //     headers: new Headers({
    //       "Content-Type": "application/json",
    //       "Authorization": `Bearer ${this.props.token}`
    //     }),
    //   };
    //   fetch(`${baseUrl}/backend/api/grades/`, config) 
    //     .then((res) => res.json())  
    //     .then((data)=>{
    //         this.props.dispatch(GetGrades())
    //         this.setState({
    //             grade: "", 
    //             repository:"",
    //             student:"",
    //             lecture:"",
    //              });
    //         this.props.history.push('/students_list');

    //     });       
    // };


    
    render(){
        return (
            <AddGradeStyled>
                <Navigation/>
                <div className="new-grade">
                    <div className="form-grade-layout">
                        <h1>Choose a student and Rate his Work</h1>
                        <form  >
                            <div className="form-grade">
                                <label htmlFor="grade">Grade</label>
                                <input type="number" name="grade" />
                            </div>
                            <div className="form-grade">
                                <label htmlFor="repository">Repository</label>
                                <input type="url" name="repository" />
                            </div>
                            <div className="form-grade">
                                <label htmlFor="students">Student</label>
                                <select name="students"  >
                                    <option ></option>
                                    <option >Michaela</option>
                                    <option >Salomon</option>
                                    <option >Salvatore</option>
                                    <option >Patrick</option>
                                </select>
                            </div>
                            <div className="form-grade">
                                <label htmlFor="lecture">Lecture</label>
                                <select name="lecture"  >
                                    <option ></option>
                                    <option >Lecture1</option>
                                    <option >Lecture2</option>
                                </select>
                            </div>
                            <div className="btn-group">
                                <button type="submit">Save</button>
                                <button >Cancle</button>
                            </div>
                        </form>
                    </div>
                
                </div>              
            </AddGradeStyled>
        )
    }
}

const mapStateToProps = (state)=>{
    // console.log('Grades:', state.get_grades)
    return{
        token: state.token,
        get_grades: state.get_grades,
    }
}
export default connect(mapStateToProps)(AddGrade)
