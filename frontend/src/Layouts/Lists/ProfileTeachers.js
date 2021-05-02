import React, {Component} from 'react';

//style
import{ListTeachersStyled} from './style';

//img
import loading from '../../Assets/loading.gif';

//components
import UserProfileCard from '../../Components/UserProfileCard/UserProfileCard';
import Navigation from '../../Components/Navigation/Navigation';
import SearchBar from '../../Components/Searchbar/Searchbar';

//redux
import {connect} from 'react-redux';
import {GetAllTeachers} from '../../Store/actions/GetAllTeachers';
import {SearchTeachersByName} from '../../Store/actions/SearchUsers';

class ProfileTeachers extends Component {
    state={
        name:'',
       }
    
       searchName=(e)=>{
           e.preventDefault()
        this.setState({name : e.target.value})
       }
    
       searchingAction =(e)=>{
           e.preventDefault()
           this.props.dispatch(SearchTeachersByName(this.state.name))
       }  

        componentDidMount(){
            // console.log('mounting in ProfileTeacher');
            this.props.dispatch(GetAllTeachers())
        }

    render(){
        return (
            <ListTeachersStyled>
                <Navigation/>
                    
                    <div className="pt">
                        <SearchBar name={this.state.name } searchName={this.searchName} searchingAction={this.searchingAction}/>
                        <div className="pt-layout">
                        
                                {this.props.get_all_teachers.length && !this.props.search_teachers.length ? this.props.get_all_teachers.map((data, index)=> <UserProfileCard key={index} first_name={data.first_name}
                                last_name={data.last_name} profile_picture={data.profile_picture} email={data.email} about={data.about} expertise={data.expertise}/>) : this.props.search_teachers.length ? this.props.search_teachers.map((data, index)=> <UserProfileCard key={index} first_name={data.first_name}
                                last_name={data.last_name} profile_picture={data.profile_picture} email={data.email} about={data.about} expertise={data.expertise}/>) :<img src={loading} alt="loading"/>} 
                        </div>    
                    </div>

                   
            </ListTeachersStyled>
        )
    }
}
const mapStateToProps = (state) => {
    // console.log("Get all teachers: ",state.get_all_teachers);
    // console.log("Teachers search: ", state.search_teachers);
    return {
   get_all_teachers: state.get_all_teachers,
   search_teachers: state.search_teachers,  
}};

export default connect(mapStateToProps)(ProfileTeachers);
