import React from 'react';
import styled from 'styled-components';
const BASE_EMBED_URL = 'https://www.youtube.com/embed/';

export const VideoDetailsContent = styled.section`
  max-width: 1135px;
  margin: 0 auto;
`;

const VideoDetailsPage = (props) => {
    const {videoId} = props;
    console.log(videoId);
    const embedUrl = `${BASE_EMBED_URL}${props.videoId}`;
    console.log(embedUrl);
    return(
        <VideoDetailsContent>

<iframe width={'560'} height={'315'} src={embedUrl} frameBorder='0'
            allow='autoplay; encrypted-media' allowFullScreen />
        </VideoDetailsContent>
    );
};

export default VideoDetailsPage;
