import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import {NavigationStyled} from './style';

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight, faHome, faAddressCard, faUserGraduate, faUsers, faChalkboard, faGraduationCap, faBook, faDoorOpen, faUsersCog} from '@fortawesome/free-solid-svg-icons';

//img
import propBg from '../../Assets/propulsion-logo.png';



const Navigation = () => {
  const history = useHistory()
  const[sidebarcollapse, setSidebarcollapse ] = useState(true)

    const Logout =()=>{
        localStorage.clear();
        history.push('/')
    }
    
    const changeColor = e =>{
      e.preventDefault();
      setSidebarcollapse(!sidebarcollapse)
   }

  
  return (
        <NavigationStyled>
            <div className={sidebarcollapse ? 'full' : 'half'}>
                  
             </div>
                  
           <nav  className={sidebarcollapse ? 'full' : 'half'}> 
              <img src={propBg} alt="logo" onClick={changeColor}/>
             {/* <FontAwesomeIcon onClick={changeColor} className="i arrow-right" icon={faCaretRight} size = '3x' />
              <FontAwesomeIcon onClick={changeColor} className="i arrow-left" icon={faCaretLeft} size = '3x' />   */}
            <ul>
                <Link to="/home_page"><li>Home</li><span><FontAwesomeIcon  className="i" icon={faHome} size = '3x' /> </span></Link>
                <Link to="/profile"><li>Profil</li><span><FontAwesomeIcon  className="i" icon={faAddressCard} size = '3x' /> </span></Link>
                <Link to="/lectures"><li>Lectures</li><span><FontAwesomeIcon  className="i" icon={faChalkboard} size = '3x' /> </span></Link>
                {/* <Link to="/construction"><li >Grade</li><span><FontAwesomeIcon  className="i" icon={faGraduationCap} size = '3x' /> </span></Link> */}
                <Link to="/group"><li >Group</li><span><FontAwesomeIcon  className="i" icon={faUsersCog} size = '3x' /> </span></Link>
                <Link to="/profile_teachers_list"><li>Teachers</li><span><FontAwesomeIcon  className="i" icon={faUsers} size = '3x' /> </span></Link>
                <Link to="/students_list"><li>Students</li><span><FontAwesomeIcon  className="i" icon={faUserGraduate} size = '3x' /> </span></Link>
                <Link to="/"><li onClick={()=>Logout()}>Logout</li><span><FontAwesomeIcon  className="i" icon={faDoorOpen} size = '3x' /> </span></Link>
            </ul>
            <div></div>
          </nav> 

    </NavigationStyled>
    )
}

export default Navigation;