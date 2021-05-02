import React from 'react';

//Style
import {ProfileStyled, ProfileMainStyled} from './style';

// Components
import Navigation from '../../Components/Navigation/Navigation';
import UserProfile from '../../Components/UserProfile/UserProfile';
import ProgramSection from '../../Components/ProfileSections/ProgramSection/ProgramSection';
import LecturesSection from '../../Components/ProfileSections/LecturesSection/LecturesSection';


const ProfileProgram = () => {
    return (
        <ProfileMainStyled>
            <Navigation/>
            <ProfileStyled>              
                    <UserProfile/> 
                    <div className="wrap">
                         <ProgramSection/>  
                        <LecturesSection/> 
                    </div>                                                                                  
            </ProfileStyled>
        </ProfileMainStyled>
    )
}

export default ProfileProgram;