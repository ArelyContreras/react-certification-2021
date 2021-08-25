import React, {useContext} from 'react';
import { AppContext } from "../../providers/AppProvider";
import useDebounce from '../../hooks/useDebounce';
import VideoPlayer from '../../components/VideoPlayer';
import VideoCardList from '../../components/VideoCardList';
import { ContainerFluidMain, ContentSectionReproductor, VideoDetailRelatedList, FlexContainer } from '../../styles/containers';
import { ErrorMessageContainer, ErrorMessage } from '../../styles/messages';
import { LoaderPage, Loader } from '../../styles/generals';

const FavoritesDetailsPage = ({match}) => {
    const { videoId, setVideoId, loadingVid, favoriteVideos, setIsFavorite, videoDetails } = useContext(AppContext);

    const handleFavorite = (data) => {
        if(favoriteVideos !== null){
            for(var i=0; i<favoriteVideos.length;i++){
                if (favoriteVideos[i]['id'] === data){
                    setIsFavorite(true);
                    break;
                }
                else{
                    setIsFavorite(false);
                }
            }
        }
    }
    const getVideoId = () => {
        setVideoId(match.params.videoId)
    }
    useDebounce(() => {
        if (document.readyState === "complete") {
            getVideoId();
            handleFavorite(videoId);

        } else {
            window.addEventListener('load', getVideoId);
            return () => document.removeEventListener('load', getVideoId);
        }
      }, [videoId], 300)


    return(
        <ContainerFluidMain>
            {(loadingVid) ?
                <LoaderPage>
                    <FlexContainer>
                        <Loader></Loader>
                    </FlexContainer>
                </LoaderPage>
                : ''
            }
            {(favoriteVideos.length) ?
                <ContentSectionReproductor>
                    {videoDetails !== null &&
                        <VideoPlayer
                            title={videoDetails.snippet.title}
                            id={videoDetails.id}
                            description={videoDetails.snippet.description}
                            channel={videoDetails.snippet.channelTitle}
                            publishedDate={videoDetails.snippet.publishedAt}
                            tags={videoDetails.snippet.tags}
                            image={videoDetails.snippet.thumbnails.medium.url}
                        />
                    }
                    {favoriteVideos &&
                        <VideoDetailRelatedList>
                            {
                                favoriteVideos
                                // .filter(video => (video.id !== videoDetails.id))
                                .map((video, key) => (
                                    <VideoCardList
                                    key={video.id}
                                    title={video.title}
                                    idVid={video.id}
                                    thumb={video.image}
                                    channel={video.channel}
                                    favoriteCard={true}
                                    />
                                ))
                            }
                        </VideoDetailRelatedList>
                    }
                </ContentSectionReproductor>

                :
                <ContentSectionReproductor role="row">
                    <ErrorMessageContainer className="errorMessage"><ErrorMessage>You haven't added any video to your favorites yet</ErrorMessage></ErrorMessageContainer>
                </ContentSectionReproductor>
            }

        </ContainerFluidMain>
    )
};

export default FavoritesDetailsPage;

