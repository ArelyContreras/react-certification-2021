import React, { useRef, useContext } from "react";
import Icon from '@material-ui/core/Icon';
import { ThemeProvider } from 'styled-components';
import useForm from "../../hooks/form";
import { useHistory, useLocation } from "react-router-dom";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { AppContext } from "../../providers/AppProvider";

import {AppBar,
	AppBarContainer,
	AppBarContainerInside,
	HamburguerButton,
	SearchContainer,
	SearchBox,
	SearchInput,
	DarkModeButtonContainer,
	DarkModeSwitch,
	DarkModeInput,
	DarkModeSlider,
	LoginCircleButton,
	Modal,
	ModalContent,
	ModalInput,
	ModalLabel,
	BlackBorderButton,
	CloseButton,
	MenuDropdown,
	FlexContainer,
	ErrorMessageContainer,
	ErrorMessage} from '../../components/StyledComponents/StyledComponents.component';


const Navbar = (props) => {
	const ref = useRef();
    const history = useHistory();
    const location = useLocation();
	const [formValues, setFormValues] = useForm({ username: '', password: ''});
	const { toggleTheme, handleSearch,
			openModal, setOpenModal,
			openDropdown, setOpenDropdown,
			sessionUser, setUser, unsetUser, errorMessage } = useContext(AppContext);


	const handleThemeToggle = (e) => {
		toggleTheme();
	};
	const handleSetUser = () => {
		setUser(formValues.username, formValues.password);
	}
	function updateSearch(e){
		if(e.key === 'Enter'){
			handleSearch(e.target.value.substring(0, 20));
			if(location.pathname !== '/'){
				history.push(`/`);
			}
			console.log(location.pathname !== '/')
		}
	}
	function toggleModal(){
		console.log('modal')
		setOpenModal(!openModal);
	}
	function toggleDropdown(){
		console.log('dropdown')
		setOpenDropdown(!openDropdown);
	}

	useOnClickOutside(ref, () => setOpenDropdown(false));

	let loginDropdown;
	let logoutDropdown;
	if (openDropdown) {
		loginDropdown = <MenuDropdown><BlackBorderButton className="blackBorder" onClick={toggleModal}>Iniciar Sesion</BlackBorderButton></MenuDropdown>;
		logoutDropdown = <MenuDropdown ><BlackBorderButton className="blackBorder" onClick={unsetUser}>Cerrar Sesion</BlackBorderButton></MenuDropdown>;
	}

	return (
		<AppBar aria-label="Header" >
			<AppBarContainer>
				<ThemeProvider theme={{ float: 'left' }}>
					<AppBarContainerInside>
						<HamburguerButton className="hamburguerMenu" aria-label='Hamburguer'>
							<Icon>menu</Icon>
						</HamburguerButton>
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
								<DarkModeSlider></DarkModeSlider>
							</DarkModeSwitch>
						</DarkModeButtonContainer>
						{(sessionUser) ?
							<LoginCircleButton theme={{
								background: sessionUser.image,
								repeat: 'no-repeat',
								position: 'center',
								size: 'cover' }} className="userLogin" ref={ref} aria-label="LoggedIn" onClick={toggleDropdown}></LoginCircleButton>
							:
							<LoginCircleButton className="userLogin" ref={ref} aria-label="Login" onClick={toggleDropdown}>
								<Icon>person</Icon>
							</LoginCircleButton>
						}

						{(sessionUser) ?
							logoutDropdown
							:
							loginDropdown
						}
						{openModal ?
							<Modal>
								<ModalContent>
									<CloseButton onClick={toggleModal}>X</CloseButton>
									<ModalLabel htmlFor="username">Username</ModalLabel>
									<ModalInput type="text" name="username" onChange={setFormValues}/>
									<ModalLabel htmlFor="password">Password</ModalLabel>
									<ModalInput type="text" name="password" onChange={setFormValues}/>
									{errorMessage ?
										<ErrorMessageContainer><ErrorMessage>{errorMessage}</ErrorMessage></ErrorMessageContainer>
										: null
									}
									<FlexContainer>
										<BlackBorderButton className="blackBorder" onClick={toggleModal}>Cancel</BlackBorderButton>
										<BlackBorderButton className="blackBorder" onClick={handleSetUser}>Login</BlackBorderButton>
									</FlexContainer>
								</ModalContent>
							</Modal>
							: ''
						}
					</AppBarContainerInside>
				</ThemeProvider>
			</AppBarContainer>

		</AppBar>
  	);
}

export default Navbar;
