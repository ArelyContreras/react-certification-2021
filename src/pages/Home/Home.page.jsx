import React from 'react';
import VideoCard from '../../components/VideoCard';

import {
  ContainerFluidMain,
  ContentSection,
  Title } from '../../components/StyledComponents/StyledComponents.component';



const HomePage = (props) => {
  const {videos}= props;
  // console.log(videos)
  return(
    <ContainerFluidMain theme={{ section: 'home' }}>
      <Title>Welcome to the Challenge!</Title>
      {videos &&
        <ContentSection role="row">
          {
            videos
              .filter(video => video.id.kind === 'youtube#video')
              .map((video, key) => (
                <VideoCard
                  key={key}
                  title={video.snippet.title}
                  videoId={video.id.videoId}
                  thumb={video.snippet.thumbnails.medium.url}
                  description={video.snippet.description}
                  channel={video.snippet.channelTitle}
                  publishedDate={video.snippet.publishedAt}
                />
              ))
          }
        </ContentSection>
      }
    </ContainerFluidMain>
  )
};

export default HomePage;
