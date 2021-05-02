import styled from "styled-components";

export const ProfileMainStyled = styled.section`
width:100vw;
display:flex;
/* background-color:${props => props.theme.pinkColor}; */
`

export const ProfileStyled = styled.section`
display:flex;
justify-content:center;
align-items:center;
width:calc(100vw - 200px);
height:100vh;


@media only screen and (max-width:1200px) {

flex-wrap:wrap;
width: 100%;
height: 100%;
}
`
