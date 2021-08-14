import React from 'react';
import { MainContainer } from '../../components/StyledComponents/StyledComponents.component';


function Layout({ children }) {
  return <MainContainer>{children}</MainContainer>;
}

export default Layout;
