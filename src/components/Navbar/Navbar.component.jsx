import React from "react";
import Icon from '@material-ui/core/Icon';
import { ThemeProvider } from 'styled-components';

import {AppBar,
	AppBarContainer,
	AppBarContainerInside,
	MenuButton,
	SearchContainer,
	SearchBox,
	SearchInput,
	DarkModeButtonContainer,
	DarkModeSwitch,
	DarkModeInput,
	DarkModeSlider,
	LoginButton} from '../../components/StyledComponents/StyledComponents.component';


const Navbar = (props) => {
	const {handleSearch} = props;

	function updateSearch(e){
		if(e.key === 'Enter'){
		handleSearch(e.target.value.substring(0, 20));
		}
	}

	return (
		<AppBar >
			<AppBarContainer>
				<ThemeProvider theme={{ float: 'left' }}>
					<AppBarContainerInside>
						<MenuButton>
							<Icon>menu</Icon>
						</MenuButton>
						<SearchContainer>
							<SearchBox>
								<Icon className="menu-search--icon">search</Icon>
								<SearchInput type="text" onKeyDown={updateSearch} />
							</SearchBox>
						</SearchContainer>
					</AppBarContainerInside>
				</ThemeProvider>
				<ThemeProvider theme={{ float: 'right' }}>
					<AppBarContainerInside>
						<DarkModeButtonContainer>
							<DarkModeSwitch>
								<DarkModeInput type="checkbox" />
								<DarkModeSlider></DarkModeSlider>
							</DarkModeSwitch>
						</DarkModeButtonContainer>
						<LoginButton>
							<Icon>person</Icon>
						</LoginButton>
					</AppBarContainerInside>
				</ThemeProvider>
			</AppBarContainer>
		</AppBar>
  	);
}

export default Navbar;
