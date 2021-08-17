import React, {useContext} from 'react';
import { AppContext } from "../../providers/AppProvider";
import useDebounce from '../../hooks/useDebounce';
import VideoReproductor from '../../components/VideoReproductor';
import VideoCardList from '../../components/VideoCardList';

import {
	ContainerFluidMain,
	ContentSectionReproductor,
	VideoDetailRelatedList } from '../../components/StyledComponents/StyledComponents.component';

const VideoDetailsPage = ({match}) => {
    const { videoId, setVideoId, videoDetails, relatedVideos } = useContext(AppContext);
    const getVideoId = () => {
        setVideoId(match.params.videoId)
    }

    useDebounce(() => {
        if (document.readyState === "complete") {
            getVideoId();
        } else {
            window.addEventListener('load', getVideoId);
            return () => document.removeEventListener('load', getVideoId);
        }
      }, [videoId], 300)

    return(
        <ContainerFluidMain >

                <ContentSectionReproductor>
                {videoDetails !== null &&
                    <VideoReproductor
                        title={videoDetails.snippet.title}
                        videoId={videoDetails.id}
                        description={videoDetails.snippet.description}
                        channel={videoDetails.snippet.channelTitle}
                        publishedDate={videoDetails.snippet.publishedAt}
                        tags={videoDetails.snippet.tags}
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
