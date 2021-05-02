import React, {Component} from 'react';

//Style
import {ProfileStyled, ProfileMainStyled} from './style';

// Components
import Navigation from '../../Components/Navigation/Navigation';
import StudentProfile2 from '../../Components/UserProfile2/StudentProfile2';
import StudentRightPanel from '../../Components/AdminRightPanel/StudentRightPanel';

//img
import loading from '../../Assets/loading.gif'

//Redux
import {connect} from 'react-redux';
import {GetAllUsers} from '../../Store/actions/GetUserData';

class ProfileStudent extends Component {
    componentDidMount() {
        // console.log('mounting in Profile');
        this.props.dispatch(GetAllUsers())
    }

    getCurrentDate(arg) {
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

    render() {
        return (
            <ProfileMainStyled>
                <Navigation/>
                <ProfileStyled>


                    <StudentProfile2/>
                    {/* <StudentRightPanel/> */}

 
                </ProfileStyled>
            </ProfileMainStyled>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log('Get all Users data:', state.get_all_users)
    return {
        get_all_users: state.get_all_users
    }
};


export default connect(mapStateToProps)(ProfileStudent);
