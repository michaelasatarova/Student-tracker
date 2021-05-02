import React from 'react'

//style
import {SocialIconsStyled} from './style'

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';


const SocialIcons = () => {
    return (
       <SocialIconsStyled> 
            <div className="social-i">
                <a href="https://github.com/"> <FontAwesomeIcon className="i" icon={faGithub} size = '2x' /></a>
                <a href="https://twitter.com/?lang=en"><FontAwesomeIcon className="i" icon={faTwitter} size = '2x' /></a>
                <a href="https://www.linkedin.com/feed/"><FontAwesomeIcon className="i" icon={faLinkedin} size = '2x' /></a>
            </div>
     </SocialIconsStyled> 
    )
}

export default SocialIcons
