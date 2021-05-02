import React from 'react';

//style
import{ListTeachersStyled} from './style';

//components
import UserProfileCard from '../../Components/UserProfileCard/UserProfileCard';
import Navigation from '../../Components/Navigation/Navigation';

const ExpertsList = () => {
    return (
        <ListTeachersStyled>
            <Navigation/>
            <div className="pt-layout">
                <UserProfileCard/>
                <UserProfileCard/>
                <UserProfileCard/>
            </div>    
        </ListTeachersStyled>
    )
}

export default ExpertsList;
