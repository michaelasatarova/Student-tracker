import React, {Component} from 'react';

//style
import{ListTeachersStyled} from '../style';
//animate css

//img
import loading from '../../../Assets/loading.gif';

//components
import UserProfileCard from '../../../Components/UserProfileCard/UserProfileCard';
import Navigation from '../../../Components/Navigation/Navigation';

//redux
import {connect} from 'react-redux';
import {GetDjangoSpecialist} from '../../../Store/actions/GetAllSpecialists'

class DjangoExperts extends Component {
    
    componentDidMount(){
        // console.log('mounting in ExpertiseArea');
        this.props.dispatch(GetDjangoSpecialist())
    }
  
    render(){
    return (
        <ListTeachersStyled>
            <Navigation/>         

            
                <div className="pt-layout">
                    {this.props.get_django_specialists.length ? this.props.get_django_specialists[0].user.map((data, index) =><UserProfileCard key={index} first_name={data.first_name} last_name={data.last_name}
                    about = {data.about} email={data.email} profile_picture={data.profile_picture} expertise={data.expertise}/> ): <img src={loading} alt="loading"/> }
                </div> 
                    
               
        </ListTeachersStyled>
    )}
}
const mapStateToProps = (state) => {
    // console.log("Django Specialists: ",state.get_django_specialists);
    return {
   get_django_specialists: state.get_django_specialists,
}};

export default connect(mapStateToProps)(DjangoExperts);