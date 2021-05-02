import styled from "styled-components";

export const ProgramSectionStyled = styled.section`
max-width:540px;
background-color:${props => props.theme.backgroundColor};
border-radius:${props => props.theme.borderRadius};
padding:20px;
margin:10px;
text-align:center;
h1{
    font-size:20px;
    font-weight:700;
    font-family:${props => props.theme.fontFamily};
    margin:20px;
}
.program-about, .program-termin{
    h2{
        font-size:15px;
        font-weight:100;
        font-family:${props => props.theme.fontFamily};
        margin:10px;
        text-align:left;
        text-decoration:underline;
    }
    p{
        text-align:justify;
        margin:10px;      
    }
}
`