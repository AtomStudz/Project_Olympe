// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import Router
import { Route, Switch } from 'react-router-dom';

// == Import
import './styles.scss';

// == Import components
import Nav from 'src/containers/Nav';
import PageUndefined from 'src/components/PageUndefined';
import Login from 'src/components/Login';
import Challenges from 'src/containers/Challenges';
import Challenge from 'src/containers/Challenge';
import Subscribe from 'src/components/Subscribe';
import Team from 'src/components/Team';
import Dashboard from 'src/containers/Dashboard';
import Home from 'src/containers/Home';

// == Component
const Olympe = ({ reconnectUser, loadUserProfil }) => {
  useEffect(() => {
    if (localStorage.getItem('token')) {
      reconnectUser();
      loadUserProfil();
    }
  }, []);

  return (
    <div className="olympe">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/inscription-connexion">
          <Login />
        </Route>
        <Route exact path="/tableaudebord">
          <Dashboard />
        </Route>
        <Route exact path="/inscription">
          <Subscribe />
        </Route>
        <Route exact path="/defis">
          <Challenges />
        </Route>
        <Route path="/defi/:slug">
          <Challenge />
        </Route>
        <Route exact path="/lesolympiens">
          <Team />
        </Route>
        <Route>
          <PageUndefined />
        </Route>
      </Switch>
    </div>
  );
};

Olympe.propTypes = {
  reconnectUser: PropTypes.func.isRequired,
  loadUserProfil: PropTypes.func.isRequired,
};

// == Export
export default Olympe;
