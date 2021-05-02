import React, {Component} from 'react'
import {Link} from 'react-router-dom';

//style
import {ExpertiseAreaStyled} from './style';

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


class ExpertiseArea extends Component {
    
  
    render(){
    return (
        <ExpertiseAreaStyled>
            <div className="expertise-area">
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
        </ExpertiseAreaStyled>
    )}
}


export default ExpertiseArea;
