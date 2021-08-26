import React, { useRef, useContext } from "react";
import Icon from '@material-ui/core/Icon';
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { AppContext } from "../../providers/AppProvider";
import { FlexContainer } from '../../styles/containers';
import { Modal, ModalContent, ModalInput, ModalLabel } from '../../styles/modals';
import { LoginCircleButton, BlackBorderButton } from '../../styles/buttons'
import { ErrorMessageContainer, ErrorMessage } from '../../styles/messages';
import { MenuDropdown } from '../../styles/navbar';

const Login = () => {
	const refButton = useRef();
	const refModal = useRef();
	const { formValues, setFormValues, openModal, setOpenModal,
            openDropdown, setOpenDropdown,
			sessionUser, setUser, unsetUser, errorMessage } = useContext(AppContext);
	const handleSetUser = () => {
		setUser(formValues.username, formValues.password);
	}
    const handleFormValues = (e) => {
        setFormValues(e)
    }
	function handleModal(){
		setOpenModal(!openModal);
	}
	function handleDropdown(){
        console.log(openDropdown)
		setOpenDropdown(!openDropdown);
	}

	useOnClickOutside(refButton, () => setOpenDropdown(false));
    useOnClickOutside(refModal, () => setOpenModal(false));

	let loginDropdown;
	let logoutDropdown;
	if (openDropdown) {
		loginDropdown = <MenuDropdown><BlackBorderButton className="blackBorder" onClick={handleModal}>Iniciar Sesion</BlackBorderButton></MenuDropdown>;
		logoutDropdown = <MenuDropdown ><BlackBorderButton className="blackBorder" onClick={unsetUser}>Cerrar Sesion</BlackBorderButton></MenuDropdown>;
	}

    return(
        <div>
            {(sessionUser) ?
                <LoginCircleButton theme={{
                    background: sessionUser.avatarUrl,
                    repeat: 'no-repeat',
                    position: 'center',
                    size: 'cover' }} className="userLogin" ref={refButton} aria-label="LoggedIn" onClick={handleDropdown}></LoginCircleButton>
                :
                <LoginCircleButton className="userLogin" ref={refButton} aria-label="Login" onClick={handleDropdown}>
                    <Icon>person</Icon>
                </LoginCircleButton>
            }
            {(sessionUser) ?
                logoutDropdown
                :
                loginDropdown
            }
            {openModal ?
                <Modal className="modal">
                    <ModalContent ref={refModal}>
                        <ModalLabel htmlFor="username">Username</ModalLabel>
                        <ModalInput type="text" name="username" onChange={handleFormValues}/>
                        <ModalLabel htmlFor="password">Password</ModalLabel>
                        <ModalInput type="text" name="password" onChange={handleFormValues}/>
                        {errorMessage ?
                            <ErrorMessageContainer className="errorMessage"><ErrorMessage>{errorMessage}</ErrorMessage></ErrorMessageContainer>
                            : null
                        }
                        <FlexContainer>
                            <BlackBorderButton className="blackBorder" onClick={handleModal}>Cancel</BlackBorderButton>
                            <BlackBorderButton className="blackBorder" onClick={handleSetUser}>Login</BlackBorderButton>
                        </FlexContainer>
                    </ModalContent>
                </Modal>
                : ''
            }
        </div>
    );
}
export default Login;
