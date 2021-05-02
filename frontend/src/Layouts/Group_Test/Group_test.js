import React from 'react'

//Components
import Navigation from '../../Components/Navigation/Navigation';

//style
import {GroupPageContainerStyled, GroupMainContainer, GroupNavContainer, GroupContainer, GroupContentContainer} from './style';


const Group_test = () => {
    return (

        <GroupPageContainerStyled>
            {/* <p>Green Border // GroupPageContainerStyled</p> */}
            {/* <Navigation /> */}
            <GroupNavContainer>
            <Navigation />
            {/* <p>Yellow Border // GroupListContainer</p> */}
            {/* <h1>GroupPageContainerStyled</h1> */}
            </GroupNavContainer>
            <GroupMainContainer>
                {/* <p>Yellow Border // GroupMainContainer</p> */}
                {/* content form backend */}
                    <GroupContainer>
                        <p>GroupContainer ((Name))</p>
                            <ul>
                                <li>((Members))</li>
                                <li>Group Members</li>
                                <li>Group Members</li>
                            </ul>
                            <GroupContentContainer>
                            {/* <p>GroupContentContainer</p> */}

                            
                            <ul>
                                <li>Group Members</li>
                                <li>Group Members</li>
                                <li>Group Members</li>
                            </ul>
                            </GroupContentContainer>
                    </GroupContainer>
                    
            </GroupMainContainer>

            
        
                        
        
            
           
        </GroupPageContainerStyled>

        
    )
}

export default Group_test;