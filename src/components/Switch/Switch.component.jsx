import React, { useContext } from "react";
import { AppContext } from "../../providers/AppProvider";
import { DarkModeButtonContainer, DarkModeSwitch, DarkModeInput, DarkModeSlider } from '../../styles/navbar';

const Switch = () => {
    const {theme, toggleTheme } = useContext(AppContext);
	const handleThemeToggle = (e) => {
		toggleTheme();
	};

    return(
        <DarkModeButtonContainer className="switchDarkMode">
            <DarkModeSwitch>
                <DarkModeInput onClick={handleThemeToggle} aria-label="Darkmode" data-theme={theme} type="checkbox" />
                <DarkModeSlider></DarkModeSlider>
            </DarkModeSwitch>
        </DarkModeButtonContainer>
    );
}
export default Switch;
