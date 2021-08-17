import React, {useContext} from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { AppContext } from "../../providers/AppProvider";
import useDebounce from '../../hooks/useDebounce';

import Layout from '../Layout';
import Navbar from '../Navbar';
import AppRoute from '../AppRoute';
import routes from '../../config/routes';


function App() {
  const { search, fetchVideos, videoId, fetchVideoDetails, fetchRelatedVideos } = useContext(AppContext);

  useDebounce(() => {
    if(search){
      fetchVideos({type: 'search', details: 'snippet', search: search, maxResults: '12'})
    }
    if(videoId){
      fetchVideoDetails({type: 'videos', details: 'contentDetails, player, snippet', id: videoId});
		  fetchRelatedVideos({type: 'search', details: 'snippet', id: videoId, maxResults: '8'});
    }
  }, [search, videoId], 300)

  return (
    <div>
      <BrowserRouter style={{ overflow: 'hidden' }}>
          <Layout>
            <Navbar/>
            <Switch>
              {routes.map((route) => (
                <AppRoute
                  key={route.path}
                  exact
                  path={route.path}
                  component={route.component}
                  isPrivate={route.isPrivate}
                />
              ))}
            </Switch>
          </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
