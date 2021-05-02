import styled from "styled-components";

export const UserProfile2Styled = styled.section`
height:calc(100vh - 100px);
width:calc(100vw - 1000px);
border-radius:${props => props.theme.borderRadius};
display:flex;
margin:20px, 20px;
padding:10px;
background-color: ${props => props.theme.backgroundColor};
justify-content:space-between;
border:1px solid ${props => props.theme.greyColor};


.user-short-info{
    width:600px;
    text-align:center;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    .img-bg{
        img{
        width:350px;
        margin:10px; 
        margin-top:0px; 
        border-radius:${props => props.theme.borderRadius};      
    } 
    }
    
    h1{
        font-size:25px;
        font-weight:700;
        padding:10px;
    }  
    h2{
        font-size:20px;
        font-weight:100;
        padding:10px; 
    }
    .student-progress{
        width:300px;
        margin:0px auto;
        padding:10px;
        .danger{
            color:red;
            padding:10px;
        }
        .warning{
            color:#fcba03;
            padding:10px;
        }
        .sucess{
            color:green;
            padding:10px;
        }
    }
    .edit-delete{
        margin-top:20px;
        margin-bottom:-10px;
        button{
            font-weight:100;
            font-size:10px;
            outline:none;
            font-family: ${props => props.theme.fontFamily};
            border:1px solid ${props => props.theme.greyColor};
            background:none;
            outline:none;
            padding:10px;
            margin:5px;
            border-radius:${props => props.theme.borderRadius}; 
            color:${props => props.theme.greyColor}; 
        }
        .delete-me{
            border:1px solid red;
           .d{
               color:red;
            } 
        }
        
    }
}

.student{
    margin-top:60px;
}

.user-main-info{
    margin-top:5px;
    padding:15px;
    width:800;
    .user-data2{
        padding:10px;
       h1{
        padding:5px;
        font-size:25px;
        font-weight:700;
        } 
        h2{
            font-size:20px;
            padding:5px;
        }
        p{
            font-size:20px;
            max-width:600px;
            /* text-align:justify; */
            padding:5px;
        }
        ul{
            padding:5px;
            li{
                font-size:20px;
                padding:5px;
                :before{
                content: '▶';
                font-size:25px;
                color:${props => props.theme.pinkColor}; ;
                margin-right: 10px;
                position: relative;
                top: 1px;
                }
            }

        }
    }  
}
.expertise-area-group{
    display:flex;
    flex-direction:column;
    align-items:space-around;
    justify-content:space-between;
    margin: 0 40px;
        img{
            width:80px;
            margin:10px;
            padding:10px;
        }
    }

`