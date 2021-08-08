import React from 'react';
import styled from 'styled-components';
import VideoCard from '../../components/VideoCard';

import {
  ContainerFluidMain,
  ContentSection } from '../../components/StyledComponents/StyledComponents.component';

export const Title = styled.h1`
    font-size: 30px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: 1px;
    color: black;
    flex-basis: 100%;
    max-width: 100%;
    text-align: center;
    display: block;
    margin: 0;
    padding-top: 30px;
    text-align: center;
    text-transform: uppercase;
    @media only screen and (min-width: 48em) {
      font-size: 40px;
    }
`;

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
