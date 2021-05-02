import styled from "styled-components";

export const GroupStyled = styled.section`
width:100vw;
display:flex;

.pt-layout{
    width:calc(100vw - 200px);
    display:flex;
    flex-wrap:wrap;
    // align-items:center;
    // justify-content:center;
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
           border-bottom:3px solid ${props => props.theme.greyColor};
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
            font-family: ${props => props.theme.fontFamily};
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