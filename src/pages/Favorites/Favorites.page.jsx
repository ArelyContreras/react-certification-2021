import React from 'react';

import {
    ContainerFluidMain,
    ContentSection } from '../../components/StyledComponents/StyledComponents.component';

const FavoritesPage = (props) => {
    const {sessionUser, unsetUser, isLogin} = props;
    return sessionUser || isLogin ? (
        <ContainerFluidMain theme={{ section: 'home' }}>
            <h1>Welcome to the Challenge!</h1>
        </ContainerFluidMain>
    ) : null;
};

export default FavoritesPage;

