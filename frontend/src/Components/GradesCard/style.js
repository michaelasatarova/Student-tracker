import styled from "styled-components";

export const GradesCardStyle = styled.section`
    display: flex;
    justify-content: space-around;
    top: 0px;
    position: relative;
    width: 20%;
    
    align-items: center;
    background-color:${props => props.theme.backgroundColor};
    border-radius: 4px;
    padding: 32px 24px;
    margin: 12px;
    text-decoration: none;
    z-index: 0;
    overflow: hidden;
    border: 1px solid #f2f8f9;
        
    &:hover {
            transition: all 0.2s ease-out;
            box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
            top: -4px;
            border: 1px solid #cccccc;
            background-color: white;
  }

    &:before {
            content: "";
            position: absolute;
            z-index: -1;
            top: -16px;
            right: -16px;
            background-color:${props => props.theme.pinkColor};
            height: 32px;
            width: 32px;
            border-radius: 32px;
            transform: scale(2);
            transform-origin: 50% 50%;
            transition: transform 0.15s ease-out;
  } 
    .image-card-user {
            background-size: cover;
            background-position: center;
            width: 50px;
            height: 50px;
            border-radius: 4%;
        }
`;

export const CardDetailStyle = styled.div`
font-size: 14px;
color: #646464;
`;

export const StudentDetailStyle = styled.div`

 `;