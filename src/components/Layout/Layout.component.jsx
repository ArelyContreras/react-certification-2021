import React from 'react';
import styled from 'styled-components';

export const MainContainer = styled.main`
  width: 100vw;
  position: relative;
`;

function Layout({ children }) {
  return <MainContainer>{children}</MainContainer>;
}

export default Layout;
