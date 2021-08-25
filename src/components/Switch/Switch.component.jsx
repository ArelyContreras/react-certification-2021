import React, { useContext } from "react";
import { AppContext } from "../../providers/AppProvider";
import { DarkModeButtonContainer, DarkModeSwitch, DarkModeInput, DarkModeSlider } from '../../styles/navbar';

const Switch = () => {
    const { toggleTheme } = useContext(AppContext);
	const handleThemeToggle = (e) => {
		toggleTheme();
	};

    return(
        <DarkModeButtonContainer className="switchDarkMode">
            <DarkModeSwitch>
                <DarkModeInput onClick={handleThemeToggle} aria-label="Darkmode" type="checkbox" />
                <DarkModeSlider></DarkModeSlider>
            </DarkModeSwitch>
        </DarkModeButtonContainer>
    );
}
export default Switch;
