
import styled from "styled-components";

export const SocialIconsStyled = styled.section`
.social-i{
    display:flex;
    justify-content:center;
    .i{
        margin:10px;
        color: ${props => props.theme.greyColor};
        cursor: pointer;
    }
}
`