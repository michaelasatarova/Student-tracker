import styled from "styled-components";

export const StudentProfileCardStyled = styled.section`
width:400px;
background-color: ${props => props.theme.backgroundColor};
font-family:${props => props.theme.fontFamily}; 
padding:10px;
text-align:center;
box-shadow:${props => props.theme.boxShadow};
margin:10px;
border-radius:${props => props.theme.borderRadius};
border:1px solid ${props => props.theme.greyColor};
img{
    width:100px;
    height:100px;
    border-radius:50%;
}
h1{
    font-size:20px;
    font-weight:700;
    font-family:${props => props.theme.fontFamily}; 
}
h2 {
    font-size:16px;
    font-weight:400; 
    margin:10px 0;
    font-family:${props => props.theme.fontFamily}; 
}
p{
    text-align:justify;
    padding:0 10px;  
}
.student-level{
    padding:10px;
    .progress-bar{
        width:100px;
        margin:20px;
    }
}
.sucess, .danger, .warning{
    span{
        font-family: ${props => props.theme.fontFamily};
        font-weight:600; 
    }
}
.sucess{
    color:green;
}
.danger{
    color:red;
}
.warning{
    color:#fcba03;
}
`