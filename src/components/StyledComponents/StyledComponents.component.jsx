import styled  from 'styled-components';

// CONTAINERS ----------------------------------------------------------
export const MainContainer = styled.main`
  width: 100vw;
  position: relative;
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
  // Video List Detils
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
// NAVBAR -------------------------------------------------------

  export const AppBar = styled.nav`
    width: 100vw;
    position: fixed;
    height 60px;
    box-shadow: 0 1px 6px 0 rgba(0,0,0,.20);
  `;
  export const AppBarContainer = styled.div`
    width: calc(100% - 20px);
    margin: 0 auto;
    font-size: 0;
  `;
  export const AppBarContainerInside = styled.div`
    float: ${props => props.theme.float};
    width: ${props => (props.theme.float === 'left' ? '50%' : 'auto')};
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    @media only screen and (min-width: 48em) {
      width: auto
    }
  `;
  export const MenuButton = styled.button`
    flex-basis 50px;
    max-width: 50px;
    border: 0;
    background-color: transparent;
    cursor: pointer;
  `;
  export const SearchContainer = styled.div`
    flex-basis: calc(100% - 60px);
    max-width: calc(100% - 60px);
    cursor: text;
  `;
  export const SearchBox = styled.div`
    background-color: rgba(0, 0, 0, 0.06);
    padding-left: 15px;
    border-radius: 3px;
    display: flex;
    align-items: center;
  `;
  export const SearchInput = styled.input`
    padding-left: 15px;
    height 35px;
    line-height: 35px;
    font-size: 16px;
    font-weight: 400;
    width: calc(100% - 50px);
  `;







  export const DarkModeButtonContainer = styled.div`
    flex-basis: calc(100% - 60px);
    max-width: calc(100% - 60px);
    width: 100px;
  `;
  export const DarkModeSwitch = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 35px;
  `;
  export const DarkModeSlider = styled.span`
    position: absolute;
    cursor: pointer;
    border-radius: 35px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: .4s;
    &:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: .4s;
      border-radius: 50%;
    }
  `;
  export const DarkModeInput = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + ${DarkModeSlider}:before {
      transform: translateX(26px);
    }
  `;












  export const LoginButton = styled.button`
    flex-basis: 40px;
    max-width: 40px;
    height: 40px;
    border: 0;
    cursor: pointer;
    border-radius: 100%;
    color: white;
  `;
  export const LoginDropdown= styled.div`
    position: absolute;
    background: white;
    top: 15px;
    right: 15px;
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 0px 5px 14px 0px rgb(68, 68, 68,.48);
  `;
  export const LoginModal = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,.5);
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  `;
  export const LoginModalContainer = styled(ContentSection)`
    background-color: white;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    position: relative;
    max-width: 90%;
    @media only screen and (min-width: 48em) {
      max-width: 500px;
    }
  `;
  export const LoginInput = styled.input`
    width: 90%;
    height 40px;
    line-height: 40px;
    border-bottom: 1px solid gray;
    margin-bottom: 10px;
  `;
  export const LoginLabel = styled.label`
    width: 90%;
    height 16px;
    line-height: 16px;
    color: #444444;
    font-size: 14px;
  `;
  export const CloseButton = styled.button`
    color: white;
    background: transparent;
    border: none;
    font-size: 30px;
    line-height: 25px;
    display:block;
    position: absolute;
    right: 0;
    top: -40px;
    z-index: 1;
    cursor: pointer;
    @media only screen and (min-width: 48em) {
      right: -30px;
      top: -30px;
    }
  `;
  export const GeneralButton = styled.button`
    height: 40px;
    line-heigth: 40px;
    background-color: white;
    border: 1px solid #444444;
    color: #444444;
    display: block;
    min-width: 100px;
    border-radius: 4px;
    cursor: pointer;
    margin: 5px;
    @media only screen and (min-width: 48em) {
      min-width: 150px;
    }
  `;
  export const FlexContainer = styled.div`
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  `;



// VIDEO CARD -------------------------------------------------------------------

  export const VideoCardItem = styled.div`
  flex-basis: 100%;
  max-width: 100%;
  margin: 10px;
  border-radius: 4px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.12);
  cursor: pointer;
  @media only screen and (min-width: 48em) {
    flex-basis: calc(33.33333333% - 20px);
    max-width: calc(33.33333333% - 20px);
  }
`;
export const VideoCardItemButton = styled.button`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  border: 0;
  cursor: pointer;
  padding: 0;
`;
export const VideoCardImgCont = styled.div`
  width: 100%;
  border-radius: 4px 4px 0 0;
  overflow: hidden;
  height: 180px;
  display: block;
`;
export const VideoCardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  flex-shrink: 0;
`;
export const VideoCardInfo = styled.div`
  padding: 15px;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  height: calc(100% - 150px);
  text-align: left;
`;
export const VideoCardInfoTitle = styled.h2`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.6px;
  padding-bottom: 10px;
  flex-basis: 50%;
  max-width: 50%;
`;
export const VideoCardInfoText = styled.p`
  color: rgba(0, 0, 0, 0.54);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.4px;
`;
export const VideoCardinfoDate = styled.span`
  color: rgba(0, 0, 0, 0.54);
  font-size: 12px;
  flex-basis: 50%;
  max-width: 50%;
  text-align: right;
`;
export const VideoCardChannel = styled.span`
  text-transform: uppercase;
  font-weight: 300;
  color: black;
  font-size: 12px;
  line-height: 14px;
  padding: 20px 0;
  text-align: left;
  flex-basis: 100%;
  max-width: 100%;
`;

//MODIFIED CARDS

export const VideoListedItem = styled(VideoCardItem)`
    box-shadow: none;
    border-radius: 0;
    overflow: hidden;
    @media only screen and (min-width: 48em) {
        flex-basis: 100%;
        max-width: 100%;
    }
`;
export const VideoListedItemButton = styled(VideoCardItemButton)`
    align-items: stretch;
    justify-content: stretch;
    width 100%;
`;
export const VideoListedImgCont = styled(VideoCardImgCont)`
    flex-basis: 50%;
    max-width: 250px;
    border-radius: 0;
    height: 120px;
`;

export const VideoListedCardInfo = styled(VideoCardInfo)`
    flex-basis: 50%;
    max-width: 50%;
`;
export const VideoListedCardInfoTitle = styled(VideoCardInfoTitle)`
    flex-basis: 100%;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

//Video Reproductor

export const VideoReproductorContainer = styled.div`
    flex-basis: 100%;
    max-width: 100%;
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    @media only screen and (min-width: 48em) {
        margin-right: 10px;
        flex-basis: calc(70% - 10px);
        max-width: calc(70% - 10px);
    }

`;
export const VideoIframeContainer = styled.div`
    width: 100%;
    @media only screen and (min-width: 48em) {
        height: 70%;
    }
`;
export const VideoInfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: stretch;
    padding: 20px 0;
    @media only screen and (min-width: 48em) {
        height: 30%;
    }
`;
export const VideoInfoContainerTitle = styled.h1`
    font-weight: 500;
    font-size: 16px;
    flex-basis: 100%;
    max-width: 100%;
    border-bottom 1px solid rgba(0, 0, 0, 0.1);
`;
export const VideoInfoContainerDescr = styled.p`
    color: black;
    font-weight: 400;
    font-size: 14px;
    height: 50%;
`;
export const VideoInfoContainerInside = styled.div`
    flex-basis: 100%;
    max-width: 100%;
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 0;
`;

export const VideoInfoContainerChannel = styled.h2`
    color: black;
    font-weight: 500;
    font-size: 14px;
    flex-basis: calc(100% - 120px);
    max-width: calc(100% - 120px);
`;
export const VideoInfoContainerSave = styled.a`
    width: 100px;
    position: relative;
    border: 1px solid black;
    height: 35px;
    line-height: 35px;
    cursor: pointer;
    font-weight: 400;
    text-align: center;
    font-size: 12px;
    display: inline-block;
    letter-spacing: 1px;
    transition: 0.2s all ease;
    border-radius: 3px;
    text-transform uppercase;
    color:black;
	padding: 0px 10px;
`;


export const Title = styled.h1`
    font-size: 30px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: 1px;
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
