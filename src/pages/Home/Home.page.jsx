import React from 'react';
import styled from 'styled-components';

// import videos from '../../mocks/youtube-videos-mock.json';
import VideoCard from '../../components/VideoCard';

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
export const HomeContent = styled.section`
  max-width: 1135px;
  margin: 0 auto;
`;
export const HomeContentSection = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  padding: 20px;
`;
const HomePage = (props) => {
  const {videos}= props;
  return(
    <HomeContent data-testid="home-view" >
      <Title data-testid="page-name">Welcome to the Challenge!</Title>
      {videos &&
        <HomeContentSection>
          {
            videos.items
              .filter(video => video.id.kind === 'youtube#video')
              .map((video, key) => (
                <VideoCard
                  data-testid="video-card-item"
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
        </HomeContentSection>
      }
    </HomeContent>
  )
};

export default HomePage;
