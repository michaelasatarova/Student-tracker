import React, {Component} from 'react'
//style
import {StudentsGroupsStyled} from './style'

//redux
import {GetStudentGroups} from '../../Store/actions/GetStudentGroups';
import {connect} from 'react-redux';
//img
import loading from '../../Assets/loading.gif'
//components
import HPStudent from '../../Components/HPStudent/HPStudent'

class StudentsGroups extends Component {
    componentDidMount(){
        console.log('mounting in StudentsGroups');
        this.props.dispatch(GetStudentGroups())
    }
    
    render(){
        return (
            <StudentsGroupsStyled>
                <div className="wrapper">
                            
                        {/* <h1>Students Groups </h1> */}
                            <table >
                            {this.props.students_groups.length ? this.props.students_groups.map((group, index)=> 
                                <tr>
                                    <th>{group.name}</th>
                                    {group.members.map((member, index)=> <td key={index} >{member.first_name} {member.last_name}</td>)}
                                </tr>                        
                                )                            
                            : <img className='Loading' src={loading} alt="Loading"/>}
                            </table>
                    
                    <div className="sg-wraper">
                            {/* {this.props.students_groups.length ? this.props.students_groups.map((group, index)=> 
                                 group.members.map((member, index)=> <td key={index} ><HPStudent /> </td>)                       
                                )                            
                            : ''} */}
                        
                    </div>                            
                </div>  

                
            </StudentsGroupsStyled>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("Global Grades: ",state.students_groups);
    return {
    students_groups: state.students_groups,
}};

export default connect(mapStateToProps)(StudentsGroups)
