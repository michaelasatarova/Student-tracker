import React from 'react';

//style
import {GroupCardStyled} from './style';

//images
import group from '../../Assets/Group_font_awesome.svg';

//components


const GroupCard = (props) => {
    console.log("In da groupCard", props)
    return (

        <GroupCardStyled>
            <img src={group} alt='Group'/>

            <h1> {props.data.name}</h1>
             <div className="group-area">
                {props.data.members.length ? props.data.members.map((data,index)=> <p key={index}>{data.first_name} {data.last_name}</p> ): 'No members'}
            </div>
        </GroupCardStyled>

    )
}

export default GroupCard;
