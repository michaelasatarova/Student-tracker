import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//style
import{ListTeachersStyled} from './style';

//components
import StudentProfileCard from '../../Components/StudentProfileCard/StudentProfileCard';
import Navigation from '../../Components/Navigation/Navigation';
import Searchbar from '../../Components/Searchbar/Searchbar';

//redux
import {connect} from 'react-redux';
import {GetAllStudents} from '../../Store/actions/GetAllStudents';
import {SearchStudentsByName} from '../../Store/actions/SearchUsers';

//img
import loading from '../../Assets/loading.gif'


class StudentsList extends Component {
   state={
    name:'',
   }

   searchName=(e)=>{
       e.preventDefault()
    this.setState({name : e.target.value})
   }

   searchingAction =(e)=>{
       e.preventDefault()
       this.props.dispatch(SearchStudentsByName(this.state.name))
   }

    componentDidMount(){
        // console.log('mounting in Students List');
        this.props.dispatch(GetAllStudents())
    }

    render(){
    return (
        <ListTeachersStyled>
            <Navigation/>
            <div className="wrap">
                    <div className="buttons">
                        <Searchbar name={this.state.name } searchName={this.searchName} searchingAction={this.searchingAction}/>
                        <Link to="/new_user"><button className="ab-btn">New student</button></Link>
                    </div>

                    <div className="pt-layout">
                        {/* <StudentProfileCard grades_student={10}/>
                        <StudentProfileCard grades_student={45}/>
                        <StudentProfileCard grades_student={90}/> */}

                        { this.props.get_all_students && !this.props.search_students.length ? this.props.get_all_students.map((data, index)=>
                        <StudentProfileCard key={index} data={data} />) : this.props.search_students.length ? this.props.search_students.map((data, index)=>
                        <StudentProfileCard key={index} data={data} />) :<img className='Loading' src={loading} alt="Loading"/>}                   
                    </div>
                

            </div>                         
        </ListTeachersStyled>
    )}
}


const mapStateToProps = (state) => {
    // console.log("Students: ",state.get_all_students);
    // console.log("Students search: ",state.get_all_students);
    return {
        token: state.token,
        get_all_students: state.get_all_students, 
        search_students: state.search_students,    
}};


export default connect(mapStateToProps) (StudentsList);