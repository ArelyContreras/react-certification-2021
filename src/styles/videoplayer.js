import styled  from 'styled-components';

// VIDEO REPRODUCTOR --------------------------------------------------------------
export const VideoPlayerContainer = styled.div`
    flex-basis: 100%;
    max-width: 100%;
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    @media only screen and (min-width: 48em) {
        margin-right: 10px;
        flex-basis: calc(70% - 10px);
        max-width: calc(70% - 10px);
    }
`;
export const VideoIframeContainer = styled.div`
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
`;
export const VideoInfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: stretch;
    padding: 20px 0;
    // @media only screen and (min-width: 48em) {
    //     height: 30%;
    // }
`;
export const VideoInfoContainerInside = styled.div`
    flex-basis: 100%;
    max-width: 100%;
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
`;