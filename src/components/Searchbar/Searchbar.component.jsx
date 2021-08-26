import React, { useContext } from "react";
import useDebounce from '../../hooks/useDebounce';
import { useHistory, useLocation } from "react-router-dom";
import Icon from '@material-ui/core/Icon';
import { AppContext } from "../../providers/AppProvider";
import { SearchContainer, SearchBox, SearchInput } from '../../styles/navbar';

const Searchbar = () => {
    const history = useHistory();
    const location = useLocation();
    const { search, fetchVideos, handleSearch } = useContext(AppContext);
    function updateSearch(e){
		if(e.key === 'Enter'){
			handleSearch(e.target.value.substring(0, 20));
			if(location.pathname !== '/'){
				history.push(`/`);
			}
		}
	}
    useDebounce(() => {
        fetchVideos({type: 'search', details: 'snippet', search: search, maxResults: '12'})
    }, [search], 300)
    return(
        <SearchContainer className="searchBar">
            <SearchBox>
                <Icon className="menu-search--icon">search</Icon>
                <SearchInput aria-label="Search" type="text" onKeyDown={updateSearch} />
            </SearchBox>
        </SearchContainer>
    );
}
export default Searchbar;
