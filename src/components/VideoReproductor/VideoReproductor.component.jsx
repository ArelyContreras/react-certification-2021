import React, {useState} from 'react';

import {
    VideoReproductorContainer,
    VideoIframeContainer,
    VideoInfoContainer,
    VideoInfoContainerTitle,
    VideoInfoContainerDescr,
    VideoInfoContainerInside,
    VideoInfoContainerChannel,
    VideoInfoContainerSave,
    ButtonAsLink} from '../StyledComponents/StyledComponents.component';

const VideoReproductor = (props) => {
    const { videoId, title, description, channel} = props;
    const [ showText, setShowText ] = useState(false);
    const handleShowText = () => {
        setShowText(!showText)
    }
    return(
        <VideoReproductorContainer className="reproductor">
            <VideoIframeContainer>
                <iframe
                    className="ytPlayer"
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
                <VideoInfoContainerTitle className="TitleBorder">{title}</VideoInfoContainerTitle>
                <VideoInfoContainerInside>
                    <VideoInfoContainerChannel>{channel}</VideoInfoContainerChannel>
                    <VideoInfoContainerSave className="blackBorder">Guardar</VideoInfoContainerSave>
                </VideoInfoContainerInside>
                <VideoInfoContainerDescr theme={{ show: showText }}>{description}</VideoInfoContainerDescr>
                <ButtonAsLink className="link" onClick={handleShowText}>Mostrar {(showText ? 'menos':'más')}</ButtonAsLink>
            </VideoInfoContainer>
        </VideoReproductorContainer>
    );
};
export default VideoReproductor;