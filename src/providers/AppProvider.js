import React, { createContext, useReducer } from "react";
import Reducer from "./reducer";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, LightDarkTheme } from "../styles";
import user from '../mocks/user.json';
import {gapiClient, buildQueryParams} from '../helpers/helpers'
const KEY = process.env.REACT_APP_YT_KEY;

let  currentUser = window.localStorage.getItem("user")
  ? JSON.parse(window.localStorage.getItem("user"))
  : "";
let userPreferences = window.localStorage.getItem("user-preferences")
  ? JSON.parse(window.localStorage.getItem("user-preferences"))
  : "";
const initialState = {
  theme: userPreferences.theme || "light",
  search: 'wizeline',
  openModal: false,
  openDropdown: false,
  sessionUser: "" || currentUser,
  loginSuccess: false,
  errorMessage: null,
  videos: null,
  videoDetails: null,
  relatedVideos: null,
  isFavorite: false,
  favoriteVideos: userPreferences.favoriteVideos || [],
  loadingVid: null,
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
        const userPreferences = {
          theme : theme
        }
        window.localStorage.setItem('user-preferences', JSON.stringify(userPreferences));
      }
      else{
        const setError = {
          type: 'LOGIN_ERROR',
          error: 'User o password incorrecto, favor de verificar',
        };
        const unsetError = {
          type: 'LOGIN_ERROR',
          error: null,
        };

        if(errorMessage){
          dispatch(unsetError);
          setTimeout(function(){dispatch(setError)},200);
        }
        else{
          dispatch(setError);
        }

      }
    };

    const unsetUser = () => {
      const setSessionUser = {
        type: 'LOGOUT',
      };
      dispatch(setSessionUser);
      window.localStorage.removeItem('user');
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
    const loadingVid = state.loadingVid;
    const error = state.error;
    const videoId = state.videoId;
    const setVideoId = (id) => {
      dispatch({type: 'SET_VIDEO_ID', videoId: id});
    }
    const fetchVideos = async (query) => {
        dispatch({type: 'SET_LOADING_VIDEO', status: true});
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
          dispatch({type: 'SET_LOADING_VIDEO', status: false});
        }
    }
    const fetchVideoDetails = async (query) => {
      dispatch({type: 'SET_LOADING_VIDEO', status: true});
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
        dispatch({type: 'SET_LOADING_VIDEO', status: false});
        }
    }
    const fetchRelatedVideos = async (query) => {
      dispatch({type: 'SET_LOADING_VIDEO', status: true});
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
        dispatch({type: 'SET_LOADING_VIDEO', status: false});
        }
    }
  // FAVORITE VIDEOS
    // const videoIdFav = state.videoIdFav;
    const isFavorite = state.isFavorite;
    const favoriteVideos = state.favoriteVideos;

    const setIsFavorite = (state) => {
      dispatch({type: 'SET_IS_FAVORITE', state: state});
    }
    const addFavoriteVideo = (video) => {
      if(userPreferences === ''){
        userPreferences = {favoriteVideos : [video]};
      }
      else{
        if(!favoriteVideos.length){
          userPreferences['favoriteVideos'] = []
        }
        userPreferences.favoriteVideos.push(video);
      }
      // if(!userPreferences.favoriteVideos.includes(video)){
        window.localStorage.setItem('user-preferences', JSON.stringify(userPreferences));
        dispatch({type: 'ADD_FAVORITE_VIDEO', vid: video});
        dispatch({type: 'SET_IS_FAVORITE', state: true});

      // }
    }
    const deleteFavoriteVideo = (id) => {
      for(var i=0; i<favoriteVideos.length;i++){
        if (favoriteVideos[i]['id'] === id){
            userPreferences.favoriteVideos.splice(i, 1);
            window.localStorage.setItem('user-preferences', JSON.stringify(userPreferences));
            dispatch({type: 'DELETE_FAVORITE_VIDEO', index: i});
            dispatch({type: 'SET_IS_FAVORITE', state: false});
            break;
        }
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
        const themePref = {theme : themeType};
        if(userPreferences === ''){
          userPreferences = themePref;
        }
        else{
          userPreferences['theme'] = themeType
        }

        window.localStorage.setItem('user-preferences', JSON.stringify(userPreferences));
      }
    };

  //TOGGLES
    const openModal = state.openModal;
    const openDropdown = state.openDropdown;
    const setOpenModal = (status) => {
      dispatch({type: 'TOGGLEMODAL', statusModal: status});
      if(openDropdown === true) {
        dispatch({type: 'TOGGLEDROPDOWN', statusDropdown: false});
      }
      if(errorMessage){
        dispatch({type: 'LOGIN_ERROR', error: null});
      }
    };
    const setOpenDropdown = (status) => {
      dispatch({type: 'TOGGLEDROPDOWN', statusDropdown: status});
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
    isFavorite, setIsFavorite,
    favoriteVideos, addFavoriteVideo, deleteFavoriteVideo,
    relatedVideos, fetchRelatedVideos,
    loadingVid,
    error
  };

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