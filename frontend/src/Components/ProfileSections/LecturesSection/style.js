import styled from "styled-components";

export const LectureSectionStyled = styled.section`
background-color:${props => props.theme.backgroundColor};
margin:10px;
padding:20px;
border-radius:${props => props.theme.borderRadius};
h1{
    text-align:Center;
    font-family:${props => props.theme.fontFamily};
    font-size:20px;
    font-weight:700; 
    margin:10px;
}
.accordeon-container{
    
    .week{
        display:flex;
        background-color:${props => props.theme.greyColor};
        width:500px;
        justify-content:space-between;
        padding:10px;
        margin-bottom:2px;
        h1{
            font-size:15px;
            margin:3px;;
        }
        span{
            cursor:pointer;
        }
    }

    .lectures{
        p{
            padding:10px;
        }
    }
}

`