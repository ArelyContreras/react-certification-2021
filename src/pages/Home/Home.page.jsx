import React, {useContext} from 'react';
import { AppContext } from "../../providers/AppProvider";
import VideoCard from '../../components/VideoCard';
import { ContainerFluidMain, ContentSection, FlexContainer } from '../../styles/containers';
import { LoaderPage, Loader } from '../../styles/generals';

const HomePage = (props) => {
  const {videos, loadingVid} = useContext(AppContext);
  return(
    <ContainerFluidMain theme={{ section: 'home' }}>
      {(loadingVid) ?
        <LoaderPage>
          <FlexContainer>
            <Loader></Loader>
          </FlexContainer>
        </LoaderPage>
        : ''
      }
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
