import React from 'react';
import {Link} from 'react-router-dom';
//img
import user from '../../Assets/user.jpg';
//style
import {UserProfileCardStyled} from './style';
//Components
import SocialIcons from '../../Components/SocialIcons/SocialIcons';

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt} from '@fortawesome/free-regular-svg-icons';

const UserProfileCard = (props) => {
   
    return (
        <UserProfileCardStyled>
            
             <div className="admin-profile">
                <img src={props.profile_picture ? props.profile_picture : user} alt="user"/>
                <h1>{props.username}</h1>
                <h2>{props.email}</h2>
                <SocialIcons/>
                <h1>About</h1>
                <div className="user-info">  
                    <h2><span>Name:</span>{props.first_name} {props.last_name} </h2>
                    <h2><span>Adress:</span> {props.street} {props.zip_code} {props.country}</h2>
                    <h2><span>Status:</span>{props.status}</h2>
                    <h2><span>Member since:</span> {props.date_joined}</h2>
                    <h3>About {props.first_name}</h3>
                    <p>{props.about}</p>               
                </div>
                <div className="edit-delete">
                <Link to='/edit_profile'><button> <FontAwesomeIcon className="i" icon={faEdit} size = '2x' /></button></Link>
                <button> <FontAwesomeIcon className="d" icon={faTrashAlt} size = '2x' /></button>
                </div>
            </div>
        
        </UserProfileCardStyled>
    )
}

export default UserProfileCard;
