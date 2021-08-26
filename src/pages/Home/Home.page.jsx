import React, {useContext} from 'react';
import { AppContext } from "../../providers/AppProvider";
import useDebounce from '../../hooks/useDebounce';
import VideoCard from '../../components/VideoCard';
import { ContainerFluidMain, ContentSection, FlexContainer } from '../../styles/containers';
import { LoaderPage, Loader } from '../../styles/generals';

const HomePage = (props) => {
  const {videos, loadingVid,
    search, fetchVideos, videoId, fetchVideoDetails, fetchRelatedVideos} = useContext(AppContext);
  useDebounce(() => {
    if(search){
      fetchVideos({type: 'search', details: 'snippet', search: search, maxResults: '12'})
    }
    if(videoId){
      fetchVideoDetails({type: 'videos', details: 'contentDetails, player, snippet', id: videoId});
		  fetchRelatedVideos({type: 'search', details: 'snippet', id: videoId, maxResults: '8'});
    }
  }, [search, videoId], 300)

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
