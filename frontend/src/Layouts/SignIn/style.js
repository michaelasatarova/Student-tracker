import styled from "styled-components";

export const SignInStyled = styled.section`
display: flex;
align-items:center;
justify-content:center;
width:100vw;
height:100vh;

.sign-in{
    display:flex;
    background-color:${props => props.theme.backgroundColor};
    //width:600px;
    padding:20px;
    border-radius:${props => props.theme.borderRadius};
    box-shadow: ${props => props.theme.boxShadow};
    .propulsion-logo-main-page{
        width:400px;
        height:400px;

    }
    .form-row{
            width:400px;
            height:400px;
            form { 
                margin:20px auto;
                .form-col{
                    display:flex;
                    flex-direction:column;
                    background-color:${props => props.theme.backgroundColor};
                    
                    input{
                        width:300px;
                        font-size:20px;
                        border-radius:5px;
                        border:none;
                        outline:none;
                        padding:10px;
                        margin: 10px 0;
                    }   
                }
                button{
                        width:300px;
                        font-size:20px;
                        border-radius:5px;
                        border:none;
                        outline:none;
                        padding:10px;
                        margin: 15px 0;
                        background-color:#ef475b;
                        font-weight:700;
                        color: ${props => props.theme.backgroundColor};
                        cursor: pointer;
                }
                a{
                    text-align:center;
                 }       
            }
    }
}
.error{
    color:red;
}
`
