import styled from "styled-components";

export const GroupCardStyled = styled.section`
width:450px;
background-color: ${props => props.theme.backgroundColor};
font-family:${props => props.theme.fontFamily}; 
padding:20px;
text-align:center;
margin:10px;
border-width: 10px;
border-color: ${props => props.theme.pinkColor};
// border-style: dashed;
border-radius:${props => props.theme.borderRadius};
img{
    width:100px;
    height:100px;
    border-radius: 10px;
    border-color: ${props => props.theme.pinkColor};
    // border-style: dashed;
    border-radius:${props => props.theme.borderRadius};
    background-color: ${props => props.theme.pinkColor};
    
}
h1{
    font-size:20px;
    font-weight:700;
    font-family:${props => props.theme.fontFamily}; 
}
h2, h3{
    font-size:16px;
    font-weight:400; 
    margin:10px 0;
    font-family:${props => props.theme.fontFamily}; 
}
h3{
    font-weight:700;
}
p{
    text-align:justify;
    padding:0 10px;
}
.group-area{
    display:flex;
    // flex-wrap:wrap;
    flex-direction: column;
    justify-content: center;
    p{
        padding:20px;
         margin: 10px;
        background-color:${props => props.theme.backgroundColorLightGrey}; 
        border-radius:200px;
        border-width: 5px;
        border-color: ${props => props.theme.pinkColor};
        border-style: solid;
    }
}
`
