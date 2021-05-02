import styled from "styled-components";


export const NavigationStyled = styled.section`
position:relative;
/* z-index:-1; */
width:200px;

.full{
    display:flex;
    width:200px;
    justify-content:space-between;
    .i{
    width:20px;  
    color:${props => props.theme.whiteColor}; 
    }
    img{
        width:150px;
    }
    .arrow-right{
        display:none;
    }
    ul{
        span{
        display:none;
    }
    }
}
.half{
    display:flex;
    width:80px;
   
    justify-content:space-between;
    .i{
    width:20px;  
    color:${props => props.theme.whiteColor}; 
    }
    img{
        width:50px;
    }
    .arrow-left{
        display:none;
    }
    ul{
        li{
            display:none;
        }
    }
}


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
        a{
            display:flex;
        li{
            color:${props => props.theme.whiteColor};
            font-size:20px;
            font-weight:700;
            padding:10px;
        }
        }
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