import styled from "styled-components";

export const UserProfileCardStyled = styled.section`
width:400px;
background-color: ${props => props.theme.backgroundColor};
border-radius:${props => props.theme.borderRadius};
height:715px;
width:500px;
padding:10px;

.admin-profile{
    text-align:center;  
    
    img{
        width:200px;
        border-radius:${props => props.theme.borderRadius};
    }
    h1{
        font-size:20px;
        font-weight:700;
        font-family:${props => props.theme.fontFamily};
        margin-top:10px;
    }
    h2{
        font-size:16px;
        font-family:${props => props.theme.fontFamily};
        margin:5px;
    }
    .user-info{
        text-align:left;
        padding:20px;
        h2{
            span{
                font-weight:700;
            }
        }
        h3{
            padding: 10px 0;
            font-weight:700;
            font-size:18px;
        }
        p{
           text-align:justify;
           height:110px;
        }
    }
    .edit-delete{
        margin:10px;
        margin-top:0;
        button{
            margin:10px;
            outline:none;
            border:none;
            cursor:pointer;
            .d{
                color:red;
            }
        }
    }
}

@media only screen and (max-width: 1080px) {
    width:500px;
}
`