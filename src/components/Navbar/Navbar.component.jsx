import React from "react";
import { Link } from "react-router-dom";
import Sidebar from '../Sidebar';
import Searchbar from '../Searchbar';
import Switch from '../Switch';
import Login from '../Login';
import { AppBar, AppBarContainer, AppBarContainerInside, HeaderLogo } from '../../styles/navbar';

const Navbar = () => {
	return (
		<AppBar aria-label="Header" >
			<AppBarContainer>
				<AppBarContainerInside theme={{ float: 'left' }}>
					{/* SIDEBAR */}
						<Sidebar></Sidebar>
						<Link to="/">
							<HeaderLogo src="../cocatube.png" alt="CocaTube" title="CocaTuube" />
						</Link>
					{/* SEARCHBAR */}
						<Searchbar></Searchbar>
				</AppBarContainerInside>
				<AppBarContainerInside theme={{ float: 'right' }}>
					{/* DARKMODE */}
						<Switch></Switch>
					{/* LOGIN */}
						<Login></Login>
				</AppBarContainerInside>
			</AppBarContainer>
		</AppBar>
  	);
}

export default Navbar;
