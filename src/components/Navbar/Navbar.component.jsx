import React, { useState , useRef, useContext } from "react";
import Icon from '@material-ui/core/Icon';
import { ThemeProvider } from 'styled-components';
import useForm from "../../hooks/form";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { AppContext } from "../../providers/AppProvider";

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
	LoginButton,
	LoginModal,
	LoginModalContainer,
	LoginInput,
	LoginLabel,
	GeneralButton,
	CloseButton,
	LoginDropdown,
	FlexContainer} from '../../components/StyledComponents/StyledComponents.component';


const Navbar = (props) => {
	const ref = useRef();
	const {sessionUser, setUser, unsetUser} = props;
	const [formValues, setFormValues] = useForm({ username: '', password: ''});
	const [openModal, setOpenModal] = useState(false);
	const [openDropdown, setOpenDropdown] = useState(false);

	const { toggleTheme, handleSearch } = useContext(AppContext);
	const handleThemeToggle = (e) => {
		toggleTheme();
	};


	// const { state, dispatch, handleSearch } = useContext(AppContext);
	// const theme = state.theme;
	// const handleThemeToggle = (e) => {
	// 	if (theme == 'light'){
	// 		dispatch({ type: "DARK" });
	// 	}
    // 	else{
    //   		dispatch({ type: "LIGHT" });
	// 	}
	// };

	function updateSearch(e){
		if(e.key === 'Enter'){
		handleSearch(e.target.value.substring(0, 20));
		}
	}
	function toggleModal(){
		setOpenModal(!openModal);
	}
	function toggleDropdown(){
		setOpenDropdown(!openModal);
	}

	useOnClickOutside(ref, () => setOpenDropdown(false));

	let loginDropdown;
	let logoutDropdown;
	if (openDropdown) {
		loginDropdown = <LoginDropdown><GeneralButton onClick={toggleModal}>Iniciar Sesion</GeneralButton></LoginDropdown>;
		logoutDropdown = <LoginDropdown ><GeneralButton onClick={unsetUser}>Cerrar Sesion</GeneralButton></LoginDropdown>;
	}

	return (
		<AppBar aria-label="Header" >
			<AppBarContainer>
				<ThemeProvider theme={{ float: 'left' }}>
					<AppBarContainerInside>
						<MenuButton className="hamburguerMenu" aria-label='Hamburguer'>
							<Icon>menu</Icon>
						</MenuButton>
						<SearchContainer className="searchBar">
							<SearchBox>
								<Icon className="menu-search--icon">search</Icon>
								<SearchInput aria-label="Search" type="text" onKeyDown={updateSearch} />
							</SearchBox>
						</SearchContainer>
					</AppBarContainerInside>
				</ThemeProvider>
				<ThemeProvider theme={{ float: 'right' }}>
					<AppBarContainerInside>
						<DarkModeButtonContainer className="switchDarkMode">
							<DarkModeSwitch>
								<DarkModeInput onClick={handleThemeToggle} aria-label="Darkmode" type="checkbox" />
								{/* <DarkModeInput  aria-label="Darkmode" type="checkbox" /> */}
								<DarkModeSlider></DarkModeSlider>
							</DarkModeSwitch>
						</DarkModeButtonContainer>
						<LoginButton className="userLogin" ref={ref} aria-label="Login" onClick={toggleDropdown}>
							<Icon>person</Icon>
						</LoginButton>
						{(sessionUser) ?
							logoutDropdown
							:
							loginDropdown
						}
						{openModal ?
							<LoginModal>
								<LoginModalContainer>
									<CloseButton onClick={toggleModal}>X</CloseButton>
									<LoginLabel htmlFor="username">Username</LoginLabel>
									<LoginInput type="text" name="username" onChange={setFormValues}/>
									<LoginLabel htmlFor="password">Password</LoginLabel>
									<LoginInput type="text" name="password" onChange={setFormValues}/>
									<FlexContainer>
										<GeneralButton onClick={toggleModal}>Cancel</GeneralButton>
										<GeneralButton onClick={() => setUser(formValues.username, formValues.password)}>Login</GeneralButton>
									</FlexContainer>
								</LoginModalContainer>
							</LoginModal>
							: ''
						}
					</AppBarContainerInside>
				</ThemeProvider>
			</AppBarContainer>

		</AppBar>
  	);
}

export default Navbar;
