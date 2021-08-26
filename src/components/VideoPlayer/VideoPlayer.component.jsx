import React, { useState, useContext } from 'react';
import { AppContext } from "../../providers/AppProvider";
import { VideoPlayerContainer, VideoIframeContainer, VideoInfoContainer, VideoInfoContainerInside } from '../../styles/videoplayer';
import { TitleIntern } from '../../styles/generals';
import { CardDescriptionBig, CardInfoSubtitle, CardDateInside } from '../../styles/cards';
import { BlackBorderButtonAbsolute, ButtonAsLink } from '../../styles/buttons';

const VideoPlayer = (props) => {
    const { id, title, description, channel, publishedDate, image} = props;
    const { sessionUser, isFavorite, addFavoriteVideo, deleteFavoriteVideo } = useContext(AppContext);
    const [ showText, setShowText ] = useState(false);

    const handleDeleteFavorite = () => {
        deleteFavoriteVideo(id)
    }
    const handleAddFavorite = (event) => {
        event.preventDefault();
        const saveVideoData = {
            id: id,
            title: title,
            description: description,
            image: image,
            date: publishedDate,
            channel: channel
        };
        addFavoriteVideo(saveVideoData)
    }
    const handleShowText = () => {
        setShowText(!showText)
    }
    return(
        <VideoPlayerContainer className="reproductor">
            <VideoIframeContainer>
                <iframe
                    className="ytPlayer"
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${id}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </VideoIframeContainer>
            <VideoInfoContainer>
                <TitleIntern className="TitleBorder">{title}</TitleIntern>
                <CardDateInside>{publishedDate.slice(0, 10)}</CardDateInside>
                <VideoInfoContainerInside>
                    <CardInfoSubtitle>{channel}</CardInfoSubtitle>
                    {(sessionUser) ?
                        (!isFavorite) ?
                            <BlackBorderButtonAbsolute onClick={handleAddFavorite} className="blackBorder">Guardar</BlackBorderButtonAbsolute>
                                :
                                <BlackBorderButtonAbsolute  onClick={handleDeleteFavorite} className="blackBorder">Eliminar de Favoritos</BlackBorderButtonAbsolute>
                        : ''
                    }
                </VideoInfoContainerInside>
                <CardDescriptionBig theme={{ show: showText }}>{description}</CardDescriptionBig>
                <ButtonAsLink className="link" onClick={handleShowText}>Mostrar {(showText ? 'menos':'más')}</ButtonAsLink>
            </VideoInfoContainer>
        </VideoPlayerContainer>
    );
};
export default VideoPlayer;