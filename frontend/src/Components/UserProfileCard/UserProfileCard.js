import React from 'react';

//style
import {UserCardStyled} from './style';

//images
import user from '../../Assets/user.jpg';

//components
import SocialIcons from '../../Components/SocialIcons/SocialIcons';

const UserProfileCard = (props) => {
    return (
        
        <UserCardStyled>       
            <img src={props.profile_picture? props.profile_picture : user} alt="user picture"/>
            <h1>{props.first_name} {props.last_name}</h1>
            <h2>{props.email}</h2>
            <p>{props.about}</p>
            <h3>Expertise areas</h3>
            <div className="expertise-area">
                {props.expertise ? props.expertise.map((data,index)=> <p key={index}>{data.name}</p> ): 'No data'}
             
            </div>
            <h3>Where you can find me?</h3>
            <SocialIcons/>
        </UserCardStyled>
        
    )
}

export default UserProfileCard;
