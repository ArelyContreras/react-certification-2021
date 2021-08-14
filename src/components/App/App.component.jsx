import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppContext } from "../../providers/AppProvider";

import useGapi from '../../hooks/useGapi';
import useDebounce from '../../hooks/useDebounce';
import useSession from '../../hooks/useSession';

import HomePage from '../../pages/Home';
import VideoDetailsPage from '../../pages/VideoDetails';
// import FavoritesPage from '../../pages/Favorites/Favorites.page';
import Layout from '../Layout';
import Navbar from '../Navbar';

function App() {
  const { search } = useContext(AppContext);
  const { videos, fetchVideos } = useGapi();
  const [sessionUser, setUser, unsetUser] = useSession();

  useDebounce(() => {
      fetchVideos({type: 'search', details: 'snippet', search: search, maxResults: '12'})
  }, [search], 300)

  return (
    <div>
      <BrowserRouter style={{ overflow: 'hidden' }}>
          <Layout>
            <Navbar setUser={setUser} unsetUser={unsetUser} sessionUser={sessionUser}/>
            <Switch>
              <Route exact path="/">
                <HomePage videos={videos} />
              </Route>
              <Route exact path="/details/:videoId">
                <VideoDetailsPage/>
              </Route>
              {/* <Route exact path="/favorites">
                <FavoritesPage isLogin sessionUser={sessionUser} unsetUser={unsetUser}/>
              </Route> */}
            </Switch>
          </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
