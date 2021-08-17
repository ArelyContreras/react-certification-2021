import React, { createContext, useReducer, useEffect } from "react";
import Reducer from "./reducer";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, LightDarkTheme } from "../styles";
import user from '../mocks/user.json';
import {gapiClient, buildQueryParams} from '../helpers/helpers'
const KEY = process.env.REACT_APP_YT_KEY;

let  currentUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : "";

  console.log(localStorage.getItem("theme"));
let currentTheme = localStorage.getItem("theme")
? localStorage.getItem("theme")
: "";
const initialState = {
  theme: currentTheme || "light",
  search: 'wizeline',
  openModal: false,
  openDropdown: false,
  sessionUser: "" || currentUser,
  loginSuccess: false,
  errorMessage: null,
  videos: null,
  videoDetails: null,
  relatedVideos: null,
  loading: null,
  error: null,
  videoId: "",
}

const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(Reducer, initialState);

  // LOGIN
    const sessionUser = state.sessionUser;
    const errorMessage = state.errorMessage;
    const setUser = (username, password, setOpenModal) => {
      if (username === user.username && password === user.password) {
      console.log(username, password)

        window.localStorage.setItem('user', JSON.stringify(user));
        const setSessionUser = {
          type: 'LOGIN',
          sessionUser: user,
        };
        dispatch(setSessionUser);
        const success = {
          type: 'LOGIN_SUCCESS',
        };
        dispatch(success);
        const toggleModal = {
          type: 'TOGGLEMODAL',
          statusModal: false,
        };
        dispatch(toggleModal);
        window.localStorage.setItem('theme', theme);
      }
      else{
        const setError = {
          type: 'LOGIN_ERROR',
          error: 'User o password incorrecto, favor de verificar',
        };
        dispatch(setError);
      }
    };

    const unsetUser = () => {
      const setSessionUser = {
        type: 'LOGOUT',
      };
      dispatch(setSessionUser);
      window.localStorage.removeItem('user');
      window.localStorage.removeItem('theme');
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
  // VIDEOS
    const videos = state.videos;
    const videoDetails = state.videoDetails;
    const relatedVideos = state.relatedVideos;
    const loading = state.loading;
    const error = state.error;
    const videoId = state.videoId;
    const setVideoId = (id) => {
      dispatch({type: 'SET_VIDEO_ID', videoId: id});
    }
    const fetchVideos = async (query) => {
      // const query = {type: 'search', details: 'snippet', search: search, maxResults: '12'};
        dispatch({type: 'SET_LOADING', status: true});
        try {
            const queryParams = buildQueryParams({
                part: query.details,
                maxResults: query.maxResults,
                q: query.search,
                regionCode: 'MX',
                type: 'video',
                videoDefinition: 'high'
            });

            const response = await gapiClient(`/search?${queryParams}&key=${KEY}`);
            dispatch({type: 'SET_VIDEOS', response: response.data.items});
        }
        catch(err){
          dispatch({type: 'SET_ERROR', error: err});
        }
        finally {
          dispatch({type: 'SET_LOADING', status: false});
        }
    }
    const fetchVideoDetails = async (query) => {
      dispatch({type: 'SET_LOADING', status: true});
        try {
            const queryParams = buildQueryParams({
                part: query.details,
                id: query.id,
                regionCode: 'MX',
                videoDefinition: 'high'
            });
            const response = await gapiClient(`/videos?${queryParams}&key=${KEY}`);
            // console.log(response.data.items[0]);
            dispatch({type: 'SET_VIDEO_DETAILS', response: response.data.items[0]});
        }
        catch(err){
          dispatch({type: 'SET_ERROR', error: err});
        }
        finally {
        dispatch({type: 'SET_LOADING', status: false});
        }
    }
    const fetchRelatedVideos = async (query) => {
      dispatch({type: 'SET_LOADING', status: true});
        try {
            const queryParams = buildQueryParams({
                part: query.details,
                maxResults: query.maxResults,
                relatedToVideoId: query.id,
                regionCode: 'MX',
                type: 'video',
                videoDefinition: 'high'
            });

            const response = await gapiClient(`/search?${queryParams}&key=${KEY}`);
            dispatch({type: 'SET_RELATED_VIDEOS', response: response.data.items});
        }
        catch(err){
          dispatch({type: 'SET_ERROR', error: err});
        }
        finally {
        dispatch({type: 'SET_LOADING', status: false});
        }
    }
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
      if(sessionUser){
        window.localStorage.setItem('theme', themeType);
      }
    };

    //TOGGLES
      const openModal = state.openModal;
      const setOpenModal = (status) => {
        const toggleModal = {
          type: 'TOGGLEMODAL',
          statusModal: status,
        };
        dispatch(toggleModal);
        if(errorMessage){
          const setError = {
            type: 'LOGIN_ERROR',
            error: null,
          };
          dispatch(setError);
        }
      };
      const openDropdown = state.openDropdown;
      const setOpenDropdown = (status) => {
        const toggleDropdown = {
          type: 'TOGGLEDROPDOWN',
          statusDropdown: status,
        };
        dispatch(toggleDropdown);
      };

  const value = {
    theme, toggleTheme,
    search, handleSearch,
    openModal, setOpenModal,
    openDropdown, setOpenDropdown,
    sessionUser, setUser, unsetUser, errorMessage,
    videoId, setVideoId,
    videos, fetchVideos,
    videoDetails, fetchVideoDetails,
    relatedVideos, fetchRelatedVideos,
    loading,
    error
  };

    useEffect(() => {
      fetchVideos();
      fetchVideoDetails();
      fetchRelatedVideos();
    }, [])



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