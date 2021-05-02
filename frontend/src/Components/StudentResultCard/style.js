import styled from "styled-components";

export const StudentResultCardStyled = styled.section`
width:300px;
background-color:${props => props.theme.backgroundColor};
padding:10px;
text-align:center;
img{
    width:70px;
    height:70px;
    border-radius:50%;
}
h1,h3{
    font-size:18px;
    font-weight:600;
    margin:10px;
}
h2{
 font-size:14px;
 font-weight:700;
 margin:10px;
}

`