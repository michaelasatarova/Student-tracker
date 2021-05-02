import React, {Component} from 'react';

//Style
import {ProfileStyled, ProfileMainStyled} from './style';

//img
import loading from '../../Assets/loading.gif'

// Components
import Navigation from '../../Components/Navigation/Navigation';
import UserProfile from '../../Components/UserProfile/UserProfile';
import AdminRightPanel from '../../Components/AdminRightPanel/AdminRightPanel';
import UserProfile2 from '../../Components/UserProfile2/UserProfile2'
//Redux
import {connect} from 'react-redux';
import {GetUserData} from '../../Store/actions/GetUserData';

class Profile extends Component {
    
    componentDidMount(){
        // console.log('mounting in Profile');
        this.props.dispatch(GetUserData())
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
                            <UserProfile2  username={this.props.user_data.username} first_name={this.props.user_data.first_name} last_name = {this.props.user_data.last_name}
                             about = {this.props.user_data.about} city={this.props.user_data.city} country = {this.props.user_data.country} email ={this.props.user_data.email} 
                             gitlabe_profile={this.props.user_data.gitlabe_profile} profile_picture={this.props.user_data.profile_picture} status={this.props.user_data.status} 
                             street = {this.props.user_data.street} zip_code = {this.props.user_data.zip_code} expertise={this.props.user_data.expertise} date_joined={this.getCurrentDate(this.props.user_data.date_joined)}/> 
                        : <img className='Loading' src={loading} alt="Loading"/>} 

                        {/* {this.props.user_data ?
                            <UserProfile  username={this.props.user_data.username} first_name={this.props.user_data.first_name} last_name = {this.props.user_data.last_name}
                             about = {this.props.user_data.about} city={this.props.user_data.city} country = {this.props.user_data.country} email ={this.props.user_data.email} 
                             gitlabe_profile={this.props.user_data.gitlabe_profile} profile_picture={this.props.user_data.profile_picture} status={this.props.user_data.status} 
                             street = {this.props.user_data.street} zip_code = {this.props.user_data.zip_code} date_joined={this.getCurrentDate(this.props.user_data.date_joined)}/> 
                        : 'Loading...'}   
                            <AdminRightPanel/>  */}
                                                    
                </ProfileStyled>
            </ProfileMainStyled>
        )}
}
const mapStateToProps = (state) => (
    console.log('User data:',  state.user_data ),{
    user_data: state.user_data,
});


export default connect(mapStateToProps)(Profile);
