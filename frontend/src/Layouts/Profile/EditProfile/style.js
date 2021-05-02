import styled from "styled-components";

export const EditProfileStyled = styled.section`
width:100vw;
display:flex;
/* background-color:${props => props.theme.pinkColor}; */
.edit-profile{
    width:calc(100vw - 200px);
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    
    form{
        background-color:${props => props.theme.backgroundColor};
        width:1300px;
        margin: auto;
        border-radius:${props => props.theme.borderRadius};
        border:1px solid ${props => props.theme.greyColor};
        .form-col{
            display:flex;
            flex-direction:row;
            justify-content:center;
            margin:  20px;
            label{
                padding: 10px 30px;
                width:200px;
                font-family:${props => props.theme.fontFamily}; 
            }
            .col{
                display:flex;
                flex-direction:column;
                
            }
            input, textarea, select{
                width:600px;
                padding:10px;
                margin:0 30px;
                font-size:18px;
                align-items:center;
                border:1px solid ${props => props.theme.greyColor};
                border-radius:${props => props.theme.borderRadius};
            }
        }
        .form-btns{
            margin:10px;
            text-align:center;
            /* padding:20px; */
            button{
                width:100px;
                font-size:25px;
                outline:none;
                font-family: ${props => props.theme.fontFamily};
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
.edit-photo{
    display:flex;
    align-items:baseline;
    h1{
        width:500px;
        font-size:20px;
        margin-left:20px;
        font-family: ${props => props.theme.fontFamily};
    }
img{
    width:150px;
    opacity:0.5;
}
}

#upload-photo {
   opacity: 0;
   position: absolute;
   z-index: -1;
}
`