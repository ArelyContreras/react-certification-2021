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
        default:
            return state;
    }
}
export default Reducer;