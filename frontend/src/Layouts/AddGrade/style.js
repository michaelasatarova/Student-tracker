import styled from "styled-components";

export const AddGradeStyled = styled.section`
width:100vw;
display:flex;


.new-grade{
    width:calc(100vw - 200px);
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
}

.form-grade-layout{
        background-color:${props => props.theme.backgroundColor}; 
        padding:20px;
        margin:20px;
        width:700px;

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
                    }
                    }
                .btn-group{
                    text-align:center;
                    button{
                        padding:10px;
                        font-size:20px;
                        margin:10px;
                    }
                }
            
        }
    }

`