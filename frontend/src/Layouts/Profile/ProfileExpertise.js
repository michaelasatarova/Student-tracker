import React, {Component} from 'react';

//Style
import {ProfileStyled, ProfileMainStyled} from './style';

// Components
import Navigation from '../../Components/Navigation/Navigation';
import UserProfile from '../../Components/UserProfile/UserProfile';
import ExpertiseSection from '../../Components/ProfileSections/ExpertiseSection/ExpertiseSection';

//Redux
import {connect} from 'react-redux';
import {GetUserData} from '../../Store/actions/GetUserData';
import {GetUserExpertise} from '../../Store/actions/Expertise';


class ProfileExpertise extends Component{
    componentDidMount(){
        // console.log('mounting in ProfileExpertise');
        this.props.dispatch(GetUserData())
        this.props.dispatch(GetUserExpertise())
    }  

    getCurrentDate(arg){ 
        let d = new Date(arg),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;

        return [day, month, year].join('.');
      }

    render(){
        return (
            <ProfileMainStyled>
                <Navigation/>
                <ProfileStyled>              
                        
                        {this.props.user_data ?
                            <UserProfile  username={this.props.user_data.username} first_name={this.props.user_data.first_name} last_name = {this.props.user_data.last_name}
                             about = {this.props.user_data.about} city={this.props.user_data.city} country = {this.props.user_data.country} email ={this.props.user_data.email} 
                             gitlabe_profile={this.props.user_data.gitlabe_profile} profile_picture={this.props.user_data.profile_picture} status={this.props.user_data.status} 
                             street = {this.props.user_data.street} zip_code = {this.props.user_data.zip_code} date_joined={this.getCurrentDate(this.props.user_data.date_joined)}/> 
                        : 'Loading...'}  
                         
                         {this.props.get_user_expertise ? <ExpertiseSection user_expertise={this.props.get_user_expertise}/>:'Loading'}
                                                                                             
                </ProfileStyled>
            </ProfileMainStyled>
        )
    }
}
const mapStateToProps = (state) => {
    // console.log('User expertise:',  state.get_user_expertise )
    return{
    user_data: state.user_data,
    get_user_expertise: state.get_user_expertise,
}};

export default connect(mapStateToProps)(ProfileExpertise);