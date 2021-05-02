import React, {Component} from 'react';

//style
import{ListTeachersStyled} from './style';

//components
import StudentProfileCard from '../../Components/StudentProfileCard/StudentProfileCard';
import Navigation from '../../Components/Navigation/Navigation';

//redux
import {connect} from 'react-redux';
import {GetAllStudents} from '../../Store/actions/GetAllStudents';

class StudentsGroups extends Component {
    componentDidMount(){
        console.log('mounting in Students List');
        this.props.dispatch(GetAllStudents())
    }
    
    render(){
    return (
        <ListTeachersStyled>
            <Navigation/>
            <div className="wrap">
                 <form className="students-program">
                    <h1>Students from Program Full Stack - Batch 14</h1>
                </form>

                

                <div className="cards-list">
                    {/* <StudentProfileCard progress={100}/>
                    <StudentProfileCard progress={29}/>
                    <StudentProfileCard progress={69}/> */}
                     { this.props.get_all_students ? this.props.get_all_students.map((data, index)=>
                    <StudentProfileCard key={index} data={data}/>) : 'Loading '} 
        
                </div>
            </div>                         
        </ListTeachersStyled>
    )}
}

const mapStateToProps = (state) => {
    console.log("Students: ",state.get_all_students);
    return {
        token: state.token,
        get_all_students: state.get_all_students,     
}};

export default connect(mapStateToProps) (StudentsGroups);