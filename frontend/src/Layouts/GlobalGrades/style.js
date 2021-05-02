import styled from "styled-components";


export const TableStyled = styled.section`
display:flex;
width:100vw;

.overlay-pd{
    display:block;
    position:absolute;
    display:flex;
    z-index:10;
    justify-content:center;
    align-items:center;
    width:calc(100vw - 200px);
    height:120vh;
    background: #021f2247;
}
.overlay-hidden{
  display:none;
}


.program-data{
  width:calc(100vw - 300px);
  .p-data{
    display:flex;
    justify-content:space-between;
    padding:10px;
    margin:50px;
    .pd1{
      .btn-groups{
        text-align: center;
        margin-top: 40px;
        button{
          width:200px;
          padding:10px;
          margin:10px;
          border:none;
          font-size:20px;
          color: ${props => props.theme.whiteColor};
          background-color:${props => props.theme.pinkColor};
          border-radius: ${props => props.theme.borderRadius};
        }
      }
      h1{
        font-size:30px;
        padding:10px;
        font-weight:700;
      }
      h2{
        padding:10px;
        font-size:20px;
      }
      p{
        padding:0 10px;
        text-align:justify;
      }
    }
    .pd2{
      padding:10px;
      background-color:${props => props.theme.pinkColor};
    }
  }
  
}

h1{
  margin-top:20px;
}
p{
    max-width:700px;
    margin: 20px 0;
}
table{
   margin-top:20px;
   position: relative;

}
.wrapper{
  max-width: calc(100vh -500px);
  margin:50px;
  overflow-x: scroll;
}
table, th, td {
  border-bottom: 1px solid black;
  border-collapse: collapse;
}
tr:nth-child(even){
  background-color: #f2f2f2;
  }

tr:hover {
  background-color: #ddd;
  }

th, td {
  padding: 10px;
  text-align: left;
  white-space: nowrap;
}
th{
  font-weight:700;
  background-color: ${props => props.theme.pinkColor};

}
.th-blue{
  background-color:${props => props.theme.blueColor};
}
.table-header{
  position: sticky;
  left: -1px;
  text-align: left;
  color: ${props => props.theme.whiteColor};

}
`