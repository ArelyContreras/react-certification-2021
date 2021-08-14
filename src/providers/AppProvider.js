import React, { createContext, useReducer, useState } from "react";
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
      if (theme === 'light'){
        dispatch({ type: "DARK" });
      }
      else{
        dispatch({ type: "LIGHT" });
      }
    };

  // SEARCH
  // const search = state.search;
  const [search, setSearch] = useState('wizeline'); //starts search with wizeline
  const handleSearch = (searchParam) => {
    setSearch(searchParam);
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