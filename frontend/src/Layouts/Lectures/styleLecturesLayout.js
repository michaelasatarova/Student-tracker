// src/Layouts/LecturesLayout/style
//
import styled from "styled-components";

export const ListLecturesStyled = styled.section`
width:100vw;
display:flex;
font-family:${props => props.theme.fontFamily}; 
.pt-layout{
    width:calc(100vw - 200px);
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
    margin:20px;
}
.wrap{
    width:calc(100vw - 200px);
    margin-top: 20px;
    text-align:center;
    //searchbar
    .searchbar{
        margin: 50px;
        .i{
            position:relative;
            left:30px;
            color: ${props => props.theme.greyColor};
        }
        input{
           width:50vw;
           outline:none;
           border:none;
           // border-bottom:3px solid ${props => props.theme.greyColor};
           font-size:20px;
           padding:10px 40px;
        }
        button{
            width:200px;
            border-radius:${props => props.theme.borderRadius};
            font-size:20px;
            padding:10px;
            background-color: ${props => props.theme.pinkColor};
            border: none;
            color:${props => props.theme.whiteColor};
            margin-left:10px;
        }
    }
    .cards-list{
        display:flex;
        flex-wrap:wrap;
        margin:10px;
        padding:10px;
        justify-content:center;
    }
    .students-program{
        margin: 50px; 
        h1{
            font-size:30px;
            font-weight:700;
        }
    }
}

`
export const NavigationStyled = styled.section`
position:relative;
/* z-index:-1; */
width:200px;
font-family:${props => props.theme.fontFamily}; 
nav{
    display:flex;
    flex-direction:column;
    width:200px;
    height:100vh;
    position: fixed;
    background:${props => props.theme.pinkColor};
    padding:10px;
    align-items:center;
    justify-content:center;
    
   
    ul{
        list-style:none;
        li{
            color:${props => props.theme.whiteColor};
            font-size:20px;
            font-weight:700;
            padding:10px;
        }
    }
}   
.results{
    padding-left:20px;
    li{
    font-weight:200;
    font-size:16px;   
    &:before{
        content: '♛';
        color: #fff;
        margin-right: 10px;
        position: relative;
        top: 1px;
    }
   } 
} 
`

export const EditLectureStyled = styled.section`
width:100vw;
display:flex;
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
                //background-color:${props => props.theme.backgroundColor};
                border:1px solid ${props => props.theme.greyColor};
                border-radius:${props => props.theme.borderRadius};
            }
        }
        .form-btns{
            margin:10px;
            //width:500px;
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
