import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { gapi } from 'gapi-script';

import HomePage from '../../pages/Home';
import Layout from '../Layout';
import Navbar from '../Navbar';
import VideoDetails from '../../pages/VideoDetails';

const ytKey = process.env.REACT_APP_YT_KEY;

function App() {

  const [search, setSearch] = useState('wizeline'); //starts search with wizeline
  const [videos, setVideos] = useState('');

  function handleSearch(searchState){
    setSearch(searchState);
  }

  useEffect(() => {

    window.gapi.load("client", () => {
      window.gapi.client
      .init({
        apiKey: ytKey
      }).then(function() {
        return window.gapi.client.request({
          'path': `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&regionCode=MX&type=video&videoDefinition=high&channelType=any&q=${search}`,
        });
      }).then(function(response) {
        setVideos(response.result);
      }, function(reason) {
        console.log('Error: ' + reason.result.error.message);
      });
    });

  }, [search]);

  return (
    <div data-testid="app-component">
      <BrowserRouter style={{ overflow: 'hidden' }}>
        <Layout>
          <Navbar handleSearch={handleSearch}/>
          <Switch>
            <Route exact path="/details">
              <VideoDetails />
            </Route>
            {/* <Route exact path="/">
                <HomePage videos={videos} />
            </Route> */}

          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
