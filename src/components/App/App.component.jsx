import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'gapi-script';

import HomePage from '../../pages/Home';
import Layout from '../Layout';
import Navbar from '../Navbar';
import VideoDetails from '../../pages/VideoDetails';

import useGapi from '../../hooks/useGapi';
import useDebounce from '../../hooks/useDebounce';



function App() {
  const { videos, fetchVideos } = useGapi();

  const [search, setSearch] = useState('wizeline'); //starts search with wizeline

  const handleSearch = (searchParam) => {
    setSearch(searchParam);
  }

  useDebounce(() => {
      fetchVideos({type: 'search', details: 'snippet', search: search, maxResults: '12'})
  }, [search], 300)

  return (
    <div data-testid="app-component">
      <BrowserRouter style={{ overflow: 'hidden' }}>
        <Layout>
          <Navbar handleSearch={handleSearch}/>
          <Switch>
            <Route exact path="/">
                <HomePage videos={videos} />
            </Route>
            <Route exact path="/details/:videoId">
              <VideoDetails/>
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
