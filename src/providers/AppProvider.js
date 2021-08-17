import React, { createContext, useReducer } from "react";
import Reducer from "./reducer";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, LightDarkTheme } from "../styles";

const initialState = {
  theme: 'light',
  search: 'wizeline'
}

const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(Reducer, initialState);

  //DARK THEME
    const theme = state.theme;
    const specificTheme = LightDarkTheme[theme];
    const toggleTheme = () => {
      let themeType;
      if (theme === 'light'){
        themeType = 'dark';
      }
      else{
        themeType = 'light';
      }
      const typeTheme = {
        type: 'THEME',
        theme: themeType,
      };
      dispatch(typeTheme);
    };


  // SEARCH
    const search = state.search;
    const handleSearch = (searchParam) => {
      const newSearch = {
        type: 'SEARCH',
        newSearch: searchParam,
      };
      dispatch(newSearch);
    }


  const value = { theme, toggleTheme, search, handleSearch };
  return (
    <AppContext.Provider value={value}>
      <ThemeProvider theme={specificTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
      </AppContext.Provider>
    );
};
export const AppContext = createContext(initialState);

export default AppProvider;