import React from 'react';
import {Link} from 'react-router-dom';
//img
import user from '../../Assets/user.jpg';
//img
import javascript from '../../Assets/expertise_areas/javascript.png';
import docker from '../../Assets/expertise_areas/docker.png';
import node from '../../Assets/expertise_areas/node.png';
import python from '../../Assets/expertise_areas/python.png';
import sass from '../../Assets/expertise_areas/sass.png';
import react from '../../Assets/expertise_areas/react.png';
import html from '../../Assets/expertise_areas/html.png';
import git from '../../Assets/expertise_areas/git.png';
import django from '../../Assets/expertise_areas/django.png';
//style
import {UserProfile2Styled} from './style';
//Components
import SocialIcons from '../../Components/SocialIcons/SocialIcons';

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt} from '@fortawesome/free-regular-svg-icons';

const UserProfile2 = (props) => {
   
    return (
        <UserProfile2Styled>
            
            <div className="user-short-info">
                <div className="user1">
                    <div className="img-bg">
                        <img src={user} alt="user"/>
                    </div>                 
                    <h1>{props.username}</h1>
                    <h2>{props.email}</h2>
                    <SocialIcons/>
                </div>

                <div></div>

                <div className="edit-delete">
                    <Link to='/edit_profile'><button> <FontAwesomeIcon className="i" icon={faEdit} size = '2x' /></button></Link>
                    <button className="delete-me"> <FontAwesomeIcon className="d" icon={faTrashAlt} size = '2x' /></button>
                </div>
            </div>
            

            <div className="user-main-info">
                <div className="user-data2">
                    <h1>Name</h1>
                    <h2>{props.first_name} {props.last_name}</h2>
                </div>
                
                <div className="user-data2">
                   <h1>Status</h1>
                    <h2>{props.status}</h2> 
                </div>
                
                <div className="user-data2">
                   <h1>Address</h1>
                   <h2>{props.city}, {props.country}</h2> 
                </div>
                
                <div className="user-data2">
                   <h1>About</h1>
                   <p>{props.about}</p>
                
                </div>

                <div className="user-data2">
                <h1>Expertise</h1>
                <ul>
                    {props.expertise ? props.expertise.map((data,index)=> <li key={index}>{data.name}</li> ): 'No data'}
                </ul>
                </div>
            </div>

            <div className="expertise-area-group">
                <Link to='/git_experts'><img src={git} alt="git"/></Link>
                <Link to='/html_experts'><img src={html} alt="html"/></Link>
                <Link to='/sass_experts'><img src={sass} alt="sass"/></Link>
                <Link to='/javascript_experts'><img src={javascript} alt="javascript"/></Link>
                <Link to='/react_experts'><img src={react} alt="react"/></Link>
                <Link to='/node_experts'><img src={node} alt="node"/></Link>
                <Link to='/python_experts'><img src={python} alt="python"/></Link>
                <Link to='/django_experts'><img src={django} alt="django"/></Link>
                <Link to='/docker_experts'><img src={docker} alt="docker"/></Link>  
            </div>
            
           
        
        </UserProfile2Styled>
    )
}

export default UserProfile2;