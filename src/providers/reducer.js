const Reducer = (state, action) => {
    switch(action.type){
        case 'LIGHT':
            return { theme: 'light' };
        case 'DARK':
            return { theme: 'dark' };
        default:
            return state;
    }
}
export default Reducer;