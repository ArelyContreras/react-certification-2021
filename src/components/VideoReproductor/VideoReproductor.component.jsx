import React, { useState } from 'react';

import {
    VideoReproductorContainer,
    VideoIframeContainer,
    VideoInfoContainer,
    TitleIntern,
    CardDate,
    CardDescriptionBig,
    VideoInfoContainerInside,
    CardInfoSubtitle,
    BlackBorderButtonAbsolute,
    ButtonAsLink} from '../StyledComponents/StyledComponents.component';

const VideoReproductor = (props) => {
    const { videoId, title, description, channel, publishedDate} = props;
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
                <TitleIntern className="TitleBorder">{title}</TitleIntern>
                <CardDate>{publishedDate.slice(0, 10)}</CardDate>
                <VideoInfoContainerInside>
                    <CardInfoSubtitle>{channel}</CardInfoSubtitle>
                    <BlackBorderButtonAbsolute className="blackBorder">Guardar</BlackBorderButtonAbsolute>
                </VideoInfoContainerInside>
                <CardDescriptionBig theme={{ show: showText }}>{description}</CardDescriptionBig>
                <ButtonAsLink className="link" onClick={handleShowText}>Mostrar {(showText ? 'menos':'más')}</ButtonAsLink>
            </VideoInfoContainer>
        </VideoReproductorContainer>
    );
};
export default VideoReproductor;