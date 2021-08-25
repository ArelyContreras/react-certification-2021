import React, { useContext } from 'react';
import { AppContext } from "../../providers/AppProvider";
import useDebounce from '../../hooks/useDebounce';
import VideoPlayer from '../../components/VideoPlayer';
import VideoCardList from '../../components/VideoCardList';
import { ContainerFluidMain, ContentSectionReproductor, VideoDetailRelatedList, FlexContainer } from '../../styles/containers';
import { LoaderPage, Loader } from '../../styles/generals';

const VideoDetailsPage = ({match}) => {
    const { videoId, setVideoId, videoDetails, relatedVideos, loadingVid, favoriteVideos, setIsFavorite } = useContext(AppContext);

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
                {relatedVideos &&
                    <VideoDetailRelatedList>
                        {
                            relatedVideos
                            .filter(video => video.snippet)
                            .map((video, key) => (
                                <VideoCardList
                                key={video.id.videoId}
                                title={video.snippet.title}
                                idVid={video.id.videoId}
                                thumb={video.snippet.thumbnails.default.url}
                                channel={video.snippet.channelTitle}
                                />
                            ))
                        }
                    </VideoDetailRelatedList>
                }
            </ContentSectionReproductor>
        </ContainerFluidMain>
    )
};

export default VideoDetailsPage;
