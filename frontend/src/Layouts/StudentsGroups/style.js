import styled from "styled-components";

export const StudentsGroupsStyled = styled.section`
/* padding:10px; */
margin:10px;

table{
   margin-top:20px;
   position: relative;

}
/* .wrapper{
  max-width: calc(100vh -200px);
  overflow-x: scroll;
} */
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
th, td {
  padding: 10px;
  text-align: left;
  white-space: nowrap;
}
th{
  font-weight:700;
  background-color: ${props => props.theme.pinkColor};
  color:${props => props.theme.whiteColor};
}

tr:nth-child(even){
  background-color:${props => props.theme.whiteColor};
  }

tr:hover {
  background-color: #ddd;
  }

`