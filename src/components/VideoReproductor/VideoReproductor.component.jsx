import React from 'react';

import {
    VideoReproductorContainer,
    VideoIframeContainer,
    VideoInfoContainer,
    VideoInfoContainerTitle,
    VideoInfoContainerDescr,
    VideoInfoContainerInside,
    VideoInfoContainerChannel,
    VideoInfoContainerSave} from '../StyledComponents/StyledComponents.component';

const VideoReproductor = (props) => {
    const { videoId, title, description, channel} = props;
    return(
        <VideoReproductorContainer>
            <VideoIframeContainer>
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </VideoIframeContainer>
            <VideoInfoContainer>
                <VideoInfoContainerTitle>{title}</VideoInfoContainerTitle>
                <VideoInfoContainerInside>
                    <VideoInfoContainerChannel>{channel}</VideoInfoContainerChannel>
                    <VideoInfoContainerSave>Guardar</VideoInfoContainerSave>
                </VideoInfoContainerInside>
                <VideoInfoContainerDescr>{description}</VideoInfoContainerDescr>
            </VideoInfoContainer>
        </VideoReproductorContainer>
    );
};
export default VideoReproductor;