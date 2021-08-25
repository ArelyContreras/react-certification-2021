import React, { useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Icon from '@material-ui/core/Icon';
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { AppContext } from "../../providers/AppProvider";
import { HamburguerButton } from '../../styles/buttons';
import { SidebarMenu, SidebarMenuContainer, SideBarMenuList, SideBarMenuListItem } from '../../styles/navbar';

const Sidebar = () => {
	const refSidebar = useRef();
    const [openSideBar, setOpenSideBar] = useState(false);
	const { sessionUser} = useContext(AppContext);

    function makeOpenSideBar(){
		setOpenSideBar(true);
	}
	useOnClickOutside(refSidebar, () => setOpenSideBar(false));

    return(
        <div>
            <HamburguerButton ref={refSidebar} onClick={makeOpenSideBar} className="hamburguerMenu" aria-label='Hamburguer'>
                <Icon>menu</Icon>
            </HamburguerButton>
            <SidebarMenu className="sideBarElement" isOpen={openSideBar}>
                <SidebarMenuContainer isOpen={openSideBar}>
                    <SideBarMenuList>
                        <SideBarMenuListItem>
                            <Link to="/"> Home </Link>
                        </SideBarMenuListItem>
                        {(sessionUser) ?
                            <SideBarMenuListItem>
                                <Link to="/favorites"> Favorites </Link>
                            </SideBarMenuListItem>
                            : ''
                        }
                    </SideBarMenuList>
                </SidebarMenuContainer>
            </SidebarMenu>
        </div>

    );
}
export default Sidebar;
