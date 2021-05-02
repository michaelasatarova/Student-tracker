import styled from "styled-components";
import Bg from '../../Assets/crumpled.webp';

export const HomePageStyled = styled.section`
background-image: url(${Bg});
background-repeat: no-repeat;
background-size: cover;
width:100vw;
height:100vh;
display:flex;
justify-content:center;
text-align: left;

.about{
    margin : auto;
    max-width:900px;
    background-color:${props => props.theme.whiteColor};
    padding:20px;
    border-radius:10px;
    h1{
        text-align:center;
        margin:10px;
        padding:10px;
    }
    p{
        text-align:justify;
        line-height:20px;
        padding:20px;
    }
}

`