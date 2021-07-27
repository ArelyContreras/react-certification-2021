import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/Home';
import Layout from '../Layout';
import Navbar from '../Navbar';

function App() {
  return (
    <div>
      <BrowserRouter style={{ overflow: 'hidden' }}>
        <Layout>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            {/* <Route exact path="/favorites">
              <FavoritesPage />
            </Route> */}
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
