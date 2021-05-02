import styled from "styled-components";

export const StudentTrackerStyled = styled.section`
width:100vw;
display:flex;

.tracker{
    width:calc(100vw - 200px);
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    margin:20px;
}
.st{
    height:100vh;
    padding:10px;
    margin: 10px 2px;
}
.program{
    max-width:300px;
    height:calc(100vh - 80px);
    background-color:${props => props.theme.backgroundColor};
    h1{
        padding:10px;
        font-family:${props => props.theme.fontFamily};
    }
    p{
        padding:10px; 
        font-size:18px; 
         &:hover, &:active, &:focus{
        border-bottom:none;
        background-color:${props => props.theme.greyColor};
        }   
    }
}
.week{
    background-color:${props => props.theme.backgroundColor};
    height:calc(100vh - 80px);
    width:300px;
    h1{
        padding:10px;
        font-family:${props => props.theme.fontFamily};
    }
    ul{
        display:flex;
        justify-content:space-around;
        flex-direction:column;
        align-items:space-around;
        a{          
            li{
                padding:10px; 
                font-size:18px; 
                &:hover, &:active, &:focus{
                border-bottom:none;
                background-color:${props => props.theme.greyColor};
                }      
            }
        }
    }
}

.days{
    background-color:${props => props.theme.backgroundColor};
    height:calc(100vh - 80px);
    max-width:calc(100vw - 900px);
    h1{
        padding:10px;
        font-family:${props => props.theme.fontFamily};
        text-align:center;
        }
    .students-days{
        display:flex; 
        flex-wrap:wrap; 
        justify-content:center;  
        .day{
            width:300px;
            text-align:center;
            margin:10px;
            .progress-bar{
                max-width:100px;
                padding:10px;
            }
            p{
                margin-top:10px;
            }
        }
    }    

}
`