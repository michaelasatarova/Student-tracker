import styled from "styled-components";

export const ExpertiseSectionStyled = styled.section`
width:500px;
height: 730px;
background-color:${props => props.theme.backgroundColor};
margin-left:10px;
border-radius:${props => props.theme.borderRadius};
text-align: center;

h1{
    font-family:${props => props.theme.fontFamily};
    font-size:20px;
    font-weight:700; 
    margin: 20px;
}
ul{
    li{
        padding:5px;
        font-family:${props => props.theme.fontFamily};
    }
}
h2{
    margin:20px;
    margin-top:40px;
    font-size:20px;
    font-weight:700;
    font-family:${props => props.theme.fontFamily};
}
.expertise-area{
    padding:10px;
    a{
        padding:10px;
        cursor:pointer;
        img{
            width:60px;
            margin:10px;
        }
    }
}
@media only screen and (max-width: 1080px) {
    margin-left:0px;
    margin-top:10px;
    max-height: 800px;
}

`