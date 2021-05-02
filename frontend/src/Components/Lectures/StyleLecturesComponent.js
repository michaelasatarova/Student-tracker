import styled from "styled-components";

export const CoursesListStyle = styled.section`
    width:calc(100vw - 200px);
    //height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;

.list-row{
width:600px;
background-color: ${props => props.theme.backgroundColor};
font-family:${props => props.theme.fontFamily}; 
padding:10px;
// text-align:center;
// box-shadow:${props => props.theme.boxShadow};
margin:10px;
border-radius:${props => props.theme.borderRadius};

p{
    text-align:justify;
    padding:0 10px;  
    
}
}
`
export const CoursesCardStyle = styled.section`
.edit-profile{
    width:calc(100vw - 200px);
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    
    form{
        background-color:${props => props.theme.backgroundColor};
        //max-width:540px;
        margin:0 auto;
        border-radius:${props => props.theme.borderRadius};
        .form-col{
            display:flex;
            flex-direction:row;
            margin:  20px;
            label{
                padding: 10px 0;
                width:200px;
            }
            .col{
                display:flex;
                flex-direction:column;
                
            }
            input, textarea{
                width:500px;
                padding:10px;
                font-size:18px;
                align-items:center;
                background-color:${props => props.theme.backgroundColor};
                border:1px solid ${props => props.theme.greyColor};
                border-radius:${props => props.theme.borderRadius};
            }
        }
        .form-btns{
            margin:10px;
            text-align:center;
            padding:20px;
            button{
                width:100px;
                font-size:25px;
                outline:none;
                border:none;
                outline:none;
                padding:10px;
                margin:10px;
                border-radius:${props => props.theme.borderRadius}; 
            } 
            .btn-save{
                background-color:${props => props.theme.pinkColor};
                color:${props => props.theme.whiteColor};
            }
            .btn-cancle{
                border:1px solid ${props => props.theme.greyColor};
            }
        }
    }
}
`
