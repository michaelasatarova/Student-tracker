import React, {Component} from 'react';

//style
import{ListTeachersStyled} from '../style';

//img
import loading from '../../../Assets/loading.gif';

//components
import UserProfileCard from '../../../Components/UserProfileCard/UserProfileCard';
import Navigation from '../../../Components/Navigation/Navigation';

//redux
import {connect} from 'react-redux';
import {GetHtmlSpecialist} from '../../../Store/actions/GetAllSpecialists';

class HtmlExperts extends Component {
    
    componentDidMount(){
        // console.log('mounting in ExpertiseArea');
        this.props.dispatch(GetHtmlSpecialist())
    }
  
    render(){
    return (
        <ListTeachersStyled>
            <Navigation/>

            
                <div className="pt-layout">
                    {this.props.get_html_specialists.length ? this.props.get_html_specialists[0].user.map((data, index) =><UserProfileCard key={index} first_name={data.first_name} last_name={data.last_name}
                    about = {data.about} email={data.email} profile_picture={data.profile_picture} expertise={data.expertise}/> ): <img src={loading} alt="loading"/> }        
                </div> 
           
            
        </ListTeachersStyled>
    )}
}
const mapStateToProps = (state) => {
    // console.log("Html Specialists: ",state.get_html_specialists);
    return {
   get_html_specialists: state.get_html_specialists,
}};

export default connect(mapStateToProps)(HtmlExperts);