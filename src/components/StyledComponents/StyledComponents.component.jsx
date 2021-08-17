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
  export const ContentSectionReproductor = styled(ContentSection)`
    align-items: flex-start;
  `;
  export const FlexContainer = styled.div`
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
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
// BUTTONS----------------------------------------------------------------------------------
  export const BlackBorderButton = styled.button`
    height: 40px;
    line-height: 40px;

    min-width: 100px;
    margin: 5px;
    @media only screen and (min-width: 48em) {
      min-width: 150px;
    }
  `;
  export const BlackBorderButtonAbsolute = styled(BlackBorderButton)`
    min-width: 100px;
    text-transform uppercase;
  `;
  export const HamburguerButton = styled.button`
    flex-basis 50px;
    max-width: 50px;
    line-height: 60px;
  `;
  export const LoginCircleButton = styled.button`
    width: 40px;
    flex-basis: 40px;
    max-width: 40px;
    height: 40px;
    cursor: pointer;
    border-radius: 100%;
    color: white;
    background-image: url(${props => props.theme.background});
    background-repeat: ${props => props.theme.repeat};
    background-position: ${props => props.theme.position};
    background-size: ${props => props.theme.size};
  `;
  export const CloseButton = styled.button`
    color: white;
    font-size: 30px;
    line-height: 25px;
    position: absolute;
    right: 0;
    top: -40px;
    z-index: 1;
    @media only screen and (min-width: 48em) {
      right: -30px;
      top: -30px;
    }
  `;
  export const CardContainer = styled.button`
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: stretch;
    align-items: stretch;
    width: 100%
  `;
  export const CardContainerTopCenter = styled(CardContainer)`
    justify-content: center;
    align-items: flex-start;
  `;
  export const ButtonAsLink = styled.button`
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    font-size:14px;
    padding: 10px 0;
    text-transform: uppercase;
  `;
// TEXTS ------------------------------------------------------------------------
  export const Title = styled.h1`
      font-size: 30px;
      line-height: 1.2;
      flex-basis: 100%;
      max-width: 100%;
      padding-top: 30px;
      @media only screen and (min-width: 48em) {
        font-size: 40px;
      }
  `;
  export const TitleIntern = styled.h1`
    text-align: left;
    font-size: 16px;
    flex-basis: 100%;
    max-width: 100%;
  `;
  export const Subtitle = styled.h2`
    padding-bottom: 10px;
    flex-basis: 50%;
    max-width: 50%;
  `;
  export const SmallerSubtitle = styled(Subtitle)`
    flex-basis: 100%;
    max-width: 100%;
    overflow: hidden;
    display: block;
    text-overflow: ellipsis;
    white-space: normal;
    max-height: 40px;
  `;
  export const CardInfoSubtitle = styled.h2`
      flex-basis: calc(100% - 120px);
      max-width: calc(100% - 120px);
  `;
  export const CardDescriptionBig = styled.p`
    font-size: 14px;
    height: ${props => (props.theme.show ? 'auto' : '100px')};
    overflow: hidden;
    white-space: break-spaces;
    text-overflow: ellipsis;
    width: 100%;
  `;
  export const CardDate = styled.span`
    flex-basis: 50%;
    max-width: 50%;
    text-align: right;
  `;
  export const CardBy = styled.span`
    flex-basis: 100%;
    max-width: 100%;
    text-align: left;
    text-transform: uppercase;
    padding: 20px 0;
  `;
  export const CardBySmall = styled(CardBy)`
    padding: 0;
    font-size: 10px;
    text-transform: initial;
  `;
  export const ImageGeneral = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    flex-shrink: 0;
  `;
// MODAL------------------------------------------------------------------------
  export const Modal = styled.div`
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
  export const ModalContent = styled(ContentSection)`
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
  export const ModalInput = styled.input`
    width: 90%;
    height 40px;
    line-height: 40px;
    border-bottom: 1px solid gray;
    margin-bottom: 10px;
  `;
  export const ModalLabel = styled.label`
    width: 90%;
    height 16px;
    line-height: 16px;
    color: #444444;
    font-size: 14px;
  `;
// MENSAJES -------------------------------------------------------------------
  export const ErrorMessageContainer = styled.div`
    width: 100%;
    padding: 10px;
  `;
  export const ErrorMessage = styled.span`
    color: #ff0000ba;
    font-size: 15px;
    text-align: center;
    display: block;
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
  export const MenuDropdown= styled.div`
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
// CARDS -------------------------------------------------------------------
  export const CardItem = styled.div`
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
  export const CardItemListed = styled(CardItem)`
    box-shadow: none;
    border-radius: 0;
    overflow: hidden;
    @media only screen and (min-width: 48em) {
        flex-basis: 100%;
        max-width: 100%;
    }
  `;
  export const CardImgContainer = styled.div`
    width: 100%;
    border-radius: 4px 4px 0 0;
    overflow: hidden;
    height: 180px;
    display: block;
  `;
  export const CardImgContainerListed = styled(CardImgContainer)`
    flex-basis: 50%;
    max-width: 250px;
    border-radius: 0;
    height: 80px;
  `;
  export const CardInfo = styled.div`
    padding: 15px;
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    height: calc(100% - 150px);
    text-align: left;
  `;
  export const CardInfoListed = styled(CardInfo)`
    padding: 0;
    padding-left: 15px;
    flex-basis: 50%;
    max-width: 50%;
  `;
// VIDEO REPRODUCTOR --------------------------------------------------------------
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
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
  `;
  export const VideoInfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: stretch;
    padding: 20px 0;
    // @media only screen and (min-width: 48em) {
    //     height: 30%;
    // }
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