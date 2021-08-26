import styled  from 'styled-components';

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

export const SidebarMenu = styled.div`
    background-color: rgba(0,0,0,.5);
    width: 100vw;
    height: 100vh;
    position:fixed;
    left: 0;
    top: 0;
    opacity: ${(props) => (props.isOpen ? "1" : "0")};
    visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
    z-index: 1;
    transition: opacity ease-in 0.2s;
`;
export const SidebarMenuContainer = styled.div`
    position: relative;
    width: 90%;
    height: 100vh;
    left: ${(props) => (props.isOpen ? "0" : "-100%")};
    transition: all ease-in 0.3s;
    @media only screen and (min-width: 48em) {
        width 250px;
    }
`;
export const SideBarMenuList = styled.ul`
    padding: 0
`;
export const SideBarMenuListItem = styled.li`
    width: 100%;
    line-height:50px;
    display: block;
    font-size: 20px;
    border-bottom: 1px solid rgba(68, 68, 68, .15);
    &:hover{
        background-color: rgba(128, 128, 128, .15)
    }
`;
export const HeaderLogo = styled.img`
    width: 80px;
    padding: 0 10px;
`;
