import React from 'react'

//style
import {SearchBarStyled} from './style'

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';


const TitleSearchBar = (props) => {
    console.log(props)
    return (
        <SearchBarStyled>
             <form className="searchbar" onSubmit={props.searchingAction}>
                    <FontAwesomeIcon className="i" icon={faSearch} size = '2x' />
                    <input type="input" value={props.title} onChange={props.searchTitle}/>
                    <button type='submit' >Search</button>
                </form>
        </SearchBarStyled>
    )
}

export default TitleSearchBar
