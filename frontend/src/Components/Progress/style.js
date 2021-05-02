import styled from "styled-components";

export const ProgressStyled = styled.section`

svg{
    height:120px;
    width:120px;
    position:relative;
    top:55px;
    transform: translate(-50%, -50%);
    circle{
        fill:transparent;
        stroke:#007eff;
        stroke-width:10;
        stroke-linecap:round;
        stroke-dasharray:500;
        stroke-dashoffset:500;
        top:100px;
        animation:animate 4s linear;
    }
}

@keyframes animate{
    100%{
        stroke-dashoffset:0;
    }
}

`