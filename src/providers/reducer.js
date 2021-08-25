const Reducer = (state, action) => {
    switch(action.type){
        case 'THEME':
            return {
                ...state,
                theme: action.theme
            }
        case 'SEARCH':
            return {
                ...state,
                search: action.newSearch
            };
        case 'TOGGLEMODAL':
            return {
                ...state,
                openModal: action.statusModal
            };
        case 'TOGGLEDROPDOWN':
            return {
                ...state,
                openDropdown: action.statusDropdown
            };
        case 'LOGIN':
            return{
                ...state,
                sessionUser: action.sessionUser
            }
        case "LOGIN_SUCCESS":
            return {
                ...state,
                loginSuccess: true
            };
        case "LOGOUT":
            return {
                ...state,
                sessionUser: "",
            };
        case "LOGIN_ERROR":
            return {
                ...state,
                loginSuccess: false,
                errorMessage: action.error
            };
        case "SET_VIDEOS":
            return{
                ...state,
                videos: action.response
            };
        case "SET_VIDEO_DETAILS":
            return{
                ...state,
                videoDetails: action.response
            };
        case "SET_VIDEO_ID":
            return{
                ...state,
                videoId: action.videoId
            };
        case "SET_RELATED_VIDEOS":
            return{
                ...state,
                relatedVideos: action.response
            };
        case "SET_IS_FAVORITE":
            return{
                ...state,
                isFavorite: action.state
            };
        case "ADD_FAVORITE_VIDEO":
            const fav = [...state.favoriteVideos];
            fav.push(action.vid)
            return{
                ...state,
                favoriteVideos: fav
            };
        case "DELETE_FAVORITE_VIDEO":
            const a = [...state.favoriteVideos]
            a.splice(action.index, 1)
            return{
                ...state,
                favoriteVideos: a
            };
        case "SET_FAVORITE_DETAILS":
            return{
                ...state,
                favoriteVideo: action.video
            };
        case "SET_LOADING_VIDEO":
            return{
                ...state,
                loadingVid: action.status
            };
        case "SET_ERROR":
            return{
                ...state,
                error: action.error
            };
        default:
            return state;
    }
}
export default Reducer;