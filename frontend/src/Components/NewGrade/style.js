import styled from "styled-components";

export const NewGradeStyled = styled.section`
background-color:${props => props.theme.backgroundColor}; 
padding:20px;
margin:20px;
width:700px;
border: 1px solid ${props => props.theme.greyColor};
h1{
        font-weight:700;
        font-size:20px;
        text-align:center;   
        margin:10px;
        margin-bottom:20px;
        padding:10px;
    }
form{ 
    .form-grade{
        margin:10px;
        display:flex;
        label{
            margin:10px;
            width:150px;
            font-size:20px;
        }
        input{
            width:300px;
            padding:10px;
            font-size:20;
            }
        select{
                width:300px;
                padding:10px;
                font-size:20;
                option{
                    font-size:20px;
                }
            }
            }
        .btn-group{
            text-align:center;
            margin-top:30px;
            button{
                padding:10px;
                font-size:20px;
                margin:10px;
                width:140px;
                border-radius:${props => props.theme.borderRadius}; 
            }
            .save{
                background-color:${props => props.theme.pinkColor}; 
                border:none;
                color:${props => props.theme.whiteColor}; 
            }
        }
    
}
`