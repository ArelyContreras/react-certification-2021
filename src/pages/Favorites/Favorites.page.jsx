import React, { useContext } from 'react';
import { AppContext } from "../../providers/AppProvider";
import VideoCard from '../../components/VideoCard';
import { ContainerFluidMain, ContentSection, FlexContainer } from '../../styles/containers';
import { ErrorMessageContainer, ErrorMessage } from '../../styles/messages';
import { LoaderPage, Loader } from '../../styles/generals';

const FavoritesPage = (props) => {
    const { loadingVid, favoriteVideos } = useContext(AppContext);
    return (
        <ContainerFluidMain theme={{ section: 'home' }}>
            {(loadingVid) ?
                <LoaderPage>
                    <FlexContainer>
                        <Loader></Loader>
                    </FlexContainer>
                </LoaderPage>
                : ''
            }
            {(favoriteVideos.length) ?
                <ContentSection role="row">
                    {
                        favoriteVideos
                        .map((video, key) => (
                            <VideoCard
                            key={key}
                            title={video.title}
                            videoId={video.id}
                            thumb={video.image}
                            description={video.description}
                            channel={video.channel}
                            publishedDate={video.date}
                            favoriteCard={true}
                            />
                        ))
                    }
                </ContentSection>
                :
                <ContentSection role="row">
                    <ErrorMessageContainer className="errorMessage"><ErrorMessage>You haven't added any video to your favorites yet</ErrorMessage></ErrorMessageContainer>
                </ContentSection>


            }
            {/* <Title>Favorites!</Title> */}
        </ContainerFluidMain>
    )
};

export default FavoritesPage;

