import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import {
	ContainerFluidMain,
	ContentSection,
	VideoDetailRelatedList } from '../../components/StyledComponents/StyledComponents.component';

import VideoReproductor from '../../components/VideoReproductor';
import VideoCardList from '../../components/VideoCardList';

import useGapi from '../../hooks/useGapi';
import useDebounce from '../../hooks/useDebounce';


const VideoDetailsPage = (props) => {
  	const { videoDetails, relatedVideos, fetchVideoDetails, fetchRelatedVideos } = useGapi();
    const params = useParams();
    const videoId = params.videoId;

    useDebounce(() => {
		fetchVideoDetails({type: 'videos', details: 'contentDetails, player, snippet', id: videoId});
		fetchRelatedVideos({type: 'search', details: 'snippet', id: videoId, maxResults: '8'});
    }, [videoId], 300)


    return(
        <ContainerFluidMain>

                <ContentSection>
                {videoDetails &&
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
                                    videoId={video.id.videoId}
                                    thumb={video.snippet.thumbnails.default.url}
                                    channel={video.snippet.channelTitle}
                                    />
                                ))
                            }
                        </VideoDetailRelatedList>
                    }

                </ContentSection>

        </ContainerFluidMain>

    )
};

export default VideoDetailsPage;
