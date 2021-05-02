import React from 'react'

//style
import {SearchBarStyled} from './style'
//animate css
import {Animated} from "react-animated-css";
//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';



const Searchbar = (props) => {
    console.log(props)
    return (
        <SearchBarStyled>
           <Animated animationIn="bounce"  isVisible={true} animationInDuration={2000}>
             <form className="searchbar" onSubmit={props.searchingAction}>
                    <FontAwesomeIcon className="i" icon={faSearch} size = '2x' />
                    <input type="input" value={props.name} onChange={props.searchName}/>
                    <button type='submit' >Search</button>
                </form>
            </Animated> 
        </SearchBarStyled>
    )
}

export default Searchbar
