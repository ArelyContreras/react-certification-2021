import styled  from 'styled-components';

// CONTAINERS ----------------------------------------------------------
  export const MainContainer = styled.main`
    width: 100vw;
    position: relative;
    min-height: 100vh;
  `;
  export const ContainerFluidMain = styled.section`
    max-width: 1135px;
    margin: 0 auto;
    padding-top: 60px;
  `;
  export const ContentSection = styled.div`
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: stretch;
    padding: 20px;
  `;
  export const ContentSectionReproductor = styled(ContentSection)`
    align-items: flex-start;
  `;
  export const FlexContainer = styled.div`
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  `;
  // video List Detils
    export const VideoDetailRelatedList = styled.div`
      flex-basis: 100%;
      max-width: 100%;
      display: flex;
      flex-flow: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin: 5px 0;
      border-radius: 0;
      @media only screen and (min-width: 48em) {
        margin-left: 10px;
        flex-basis: calc(30% - 10px);
        max-width: calc(30% - 10px);
      }
    `;
