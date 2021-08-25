import styled  from 'styled-components';

// BUTTONS----------------------------------------------------------------------------------
export const BlackBorderButton = styled.button`
    height: 40px;
    line-height: 40px;
    min-width: 100px;
    margin: 5px;
    padding: 0 5px;
    @media only screen and (min-width: 48em) {
        min-width: 150px;
    }
`;
export const BlackBorderButtonAbsolute = styled(BlackBorderButton)`
    min-width: 100px;
    text-transform uppercase;
`;
export const HamburguerButton = styled.button`
    flex-basis 50px;
    max-width: 50px;
    line-height: 60px;
`;
export const LoginCircleButton = styled.button`
    width: 40px;
    flex-basis: 40px;
    max-width: 40px;
    height: 40px;
    cursor: pointer;
    border-radius: 100%;
    color: white;
    background-image: url(${props => props.theme.background});
    background-repeat: ${props => props.theme.repeat};
    background-position: ${props => props.theme.position};
    background-size: ${props => props.theme.size};
`;
export const CloseButton = styled.button`
    color: white;
    font-size: 30px;
    line-height: 25px;
    position: absolute;
    right: 0;
    top: -40px;
    z-index: 1;
    @media only screen and (min-width: 48em) {
    right: -30px;
    top: -30px;
    }
`;
// export const CardContainer = styled.button`
//   display: flex;
//   flex-flow: row;
//   flex-wrap: wrap;
//   justify-content: stretch;
//   align-items: stretch;
//   width: 100%
// `;
// export const CardContainerTopCenter = styled(CardContainer)`
//   justify-content: center;
//   align-items: flex-start;
// `;
export const ButtonAsLink = styled.button`
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    font-size:14px;
    padding: 10px 0;
    text-transform: uppercase;
`;