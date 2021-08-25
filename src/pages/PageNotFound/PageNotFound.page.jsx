import React from 'react';
import { ContainerFluidMain, ContentSection } from '../../styles/containers';

const PageNotFound = (props) => {
    return (
        <ContainerFluidMain theme={{ section: 'home' }}>
            <ContentSection>
            <h1>Page not found</h1>
            </ContentSection>
        </ContainerFluidMain>
    );
}

export default PageNotFound;