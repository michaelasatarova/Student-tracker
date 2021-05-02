import styled from "styled-components";

//img
// import lectures from '../../Assets/grade.jpg';
// import teachers from '../../Assets/groups.png';
// import students from '../../Assets/group-students.webp';
// import studentTracker from '../../Assets/student-tracker.jpg';
// import program from '../../Assets/program.jpg';
// import about from '../../Assets/about.png';

export const HomePageStyled = styled.section`
width:100vw;
display:flex;


.hp-layout{
    width:calc(100vw - 200px);   
    margin:20px auto;
    text-align:center;
    
    h1{
        font-size:30px;
        font-family:${props => props.theme.fontFamily};  
        font-weight:700;
        margin:20px;
    }
    .hp-sublayout{
        display:flex;
        flex-wrap:wrap;
        align-items:center;
        justify-content:center; 
        .program-hp{ 
            height:calc(100vh - 200px);
            background-color:${props => props.theme.backgroundColor};
            margin:10px 10px;
            width:calc((100vw - 800px)/2);
            border-radius:${props => props.theme.borderRadius};
            border:1px solid ${props => props.theme.greyColor};
            .wrap{   
                h1{
                    margin-top:0;
                }          
                h2{
                font-weight:700;
                font-size:20px;
                text-align:left;
                padding:10px;
                margin:10px ;
                }
                h3{
                    color:blue;
                    text-align:left;
                    padding:10px ;
                    margin-bottom:10px;
                }
                p{
                    padding:10px;
                    text-align:justify;
                    margin:10px ;
                    max-width:500px;
                }
                .program-hp-top{
                      /* padding:10px;  */
                      display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;           
                    
                }
            }
            
        }
        .students-hp{
            background-color:${props => props.theme.backgroundColor};
            border:1px solid ${props => props.theme.greyColor};
            border-radius:${props => props.theme.borderRadius};
            margin-left:10px;
            height:calc(100vh - 200px);
            width:calc((100vw - 800px)/2);
        }
    }
}
.students-render{
    /* display:flex;
    flex-wrap:wrap;
    justify-content:center; */
    margin:20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-items: center;
}

@media screen and (max-width: 1500px) {
    .hp-layout .hp-sublayout .program-hp, .students-hp{
        width:calc(100vw/2);
 }
 .hp-layout .hp-sublayout .students-hp{
     width:calc(100vw/2);
 }
}

@media screen and (max-width: 800px) {
    .hp-layout .hp-sublayout .program-hp, .students-hp{
        height:100%;
 }       
 .hp-layout .hp-sublayout .students-hp{
        height:100%;
 }

}
`

//VERSION 2
// export const HomePageStyled = styled.section`
// /* background-color:${props => props.theme.backgroundColor};
// height:100vh; */
// .wrapper {
//     padding: 50px 50px;
//     max-width: 1600px;
//     text-align: center;
//     margin-left: auto;
//     margin-right: auto;
//     margin-top: 20px;
// }

// .right {float: right !important;}
// /* Image zoom on hover + Overlay colour */
// .parent {
//     width: 45%;
//     margin: 20px;
//     height: 300px;
//     overflow: hidden;
//     position: relative;
//     float: left;
//     display: inline-block;
//   cursor: pointer;
// }

// .child {
//     height: 100%;
//     border-radius:${props => props.theme.borderRadius};
//     width: 100%;
//     background-size: cover;
//     background-repeat: no-repeat;
//     -webkit-transition: all .5s;
//     -moz-transition: all .5s;
//     -o-transition: all .5s;
//     transition: all .5s;
// }


// a {
//     display: none;
//     font-size: 35px;
//     color: #ffffff !important;
//     font-family: sans-serif;
//     text-align: center;
//     margin: auto;
//     position: absolute;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     right: 0;
//     height: 50px;
//     cursor: pointer;
//     /*text-decoration: none;*/
// }

// .parent:hover .child, .parent:focus .child {
//     -ms-transform: scale(1.2);
//     -moz-transform: scale(1.2);
//     -webkit-transform: scale(1.2);
//     -o-transform: scale(1.2);
//     transform: scale(1.2);
    
// }

// .parent:hover .child:before, .parent:focus .child:before {
//     display: block;
// }

// .parent:hover a, .parent:focus a {
//     display: block;
// }

// .child:before {
//     content: "";
//     display: none;
//     height: 100%;
//     width: 100%;
//     position: absolute;
//     top: 0;
//     left: 0;
//     background-color: rgba(52,73,94,0.75);
    
// }

// .bg-one{
//     background-image: url(${program});
// }
// .bg-two{
//     background-image: url(${lectures});
// }
// .bg-three{
//     background-image: url(${about});
// }
// .bg-four{
//     background-image:url(${studentTracker});
// }
// .bg-five{
//     background-image:url(${students});
// }
// .bg-six{
//     background-image:url(${teachers});
// }

// /* Media Queries */
// @media screen and (max-width: 960px) {
//     .parent {width: 100%; margin: 20px 0px}
//     .wrapper {padding: 20px 20px;}
// }
// `