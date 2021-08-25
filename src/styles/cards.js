import styled  from 'styled-components';

// CARDS -------------------------------------------------------------------
export const CardItem = styled.div`
    flex-basis: 100%;
    max-width: 100%;
    margin: 10px;
    border-radius: 4px;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.12);
    cursor: pointer;
    @media only screen and (min-width: 48em) {
        flex-basis: calc(33.33333333% - 20px);
        max-width: calc(33.33333333% - 20px);
    }
`;
export const CardItemListed = styled(CardItem)`
    box-shadow: none;
    border-radius: 0;
    overflow: hidden;
    @media only screen and (min-width: 48em) {
        flex-basis: 100%;
        max-width: 100%;
    }
`;
export const CardImgContainer = styled.div`
    width: 100%;
    border-radius: 4px 4px 0 0;
    overflow: hidden;
    height: 180px;
    display: block;
`;
export const CardImgContainerListed = styled(CardImgContainer)`
    flex-basis: 50%;
    max-width: 250px;
    border-radius: 0;
    height: 80px;
`;
export const CardInfo = styled.div`
    padding: 15px;
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    // height: calc(100% - 150px);
    text-align: left;
`;
export const CardInfoListed = styled(CardInfo)`
    padding: 0;
    padding-left: 15px;
    flex-basis: 50%;
    max-width: 50%;
`;
export const CardInfoSubtitle = styled.h2`
    flex-basis: calc(100% - 200px);
    max-width: calc(100% - 200px);
`;
export const CardDescription = styled.p`
    font-size: 12px;
    height: 100px;
    overflow: hidden;
    white-space: break-spaces;
    text-overflow: ellipsis;
    width: 100%;
    word-break: break-all;
`;
export const CardDescriptionBig = styled.p`
    font-size: 14px;
    height: ${props => (props.theme.show ? 'auto' : '100px')};
    overflow: hidden;
    white-space: break-spaces;
    text-overflow: ellipsis;
    width: 100%;
`;
export const CardDate = styled.span`
    flex-basis: 50%;
    max-width: 50%;
    text-align: right;
`;
export const CardDateInside = styled.span`
    text-align: left;
`;
export const CardBy = styled.span`
    flex-basis: 100%;
    max-width: 100%;
    text-align: left;
    text-transform: uppercase;
    padding: 20px 0;
`;
export const CardBySmall = styled(CardBy)`
    padding: 0;
    font-size: 10px;
    text-transform: initial;
`;