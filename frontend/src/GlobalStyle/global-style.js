import { createGlobalStyle } from "styled-components";

export const GlobalStyle =  createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    font-family: Helvetica;
    font-weight: 400;
    box-sizing: border-box;

    }

    a{
    text-decoration:none;
    color: #000;
} 
ul{
    list-style:none;
}
.error{
    color:red;
}
`;

export const theme = {
    //Colors
    backgroundColor: '#f3f3f3',
    backgroundColorLightGrey: 'rgba(255,255,255,0.9)',
    greyColor:'#c1c1c1', 
    pinkColor: '#058caa',
    whiteColor: '#fff',
    blueColor: '#66d6ef',
    blueLightColor: '#a3e6f5',
    // pinkColor: '#ef475b',
    //pinkColor: '#058caa', version2
    //backgroundColor: '#f3f3f3',
    //background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(11,184,222,1) 0%, rgba(5,140,170,1) 100%);

    //Box-shadow
    boxShadow: 'none',

    //Border-radius
    borderRadius:'10px',

    //Font Style
    fontFamily: '"Roboto", sans-serif',
};
