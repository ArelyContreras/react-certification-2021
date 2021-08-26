import styled, { keyframes } from 'styled-components';

// TEXTS ------------------------------------------------------------------------
export const Title = styled.h1`
    font-size: 30px;
    line-height: 1.2;
    flex-basis: 100%;
    max-width: 100%;
    padding-top: 30px;
    @media only screen and (min-width: 48em) {
        font-size: 40px;
    }
`;
export const TitleIntern = styled.h1`
    text-align: left;
    font-size: 16px;
    flex-basis: 100%;
    max-width: 100%;
`;
export const Subtitle = styled.h2`
    padding-bottom: 10px;
    flex-basis: 50%;
    max-width: 50%;
`;
export const SmallerSubtitle = styled(Subtitle)`
    flex-basis: 100%;
    max-width: 100%;
    overflow: hidden;
    display: block;
    text-overflow: ellipsis;
    white-space: normal;
    max-height: 40px;
`;
export const ImageGeneral = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    flex-shrink: 0;
`;

export const LoaderPage = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(255, 255, 255, 0.7);
    z-index: 1;
`;
const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;
export const Loader = styled.div`
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    animation: ${spin} 2s linear infinite;
`;
