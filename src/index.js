// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import Favicon from 'react-favicon';

// == Import Router
import { BrowserRouter as Router } from 'react-router-dom';

// == Import Redux
import { Provider } from 'react-redux';

// == Import Store
import store from 'src/store';

// == Import : local
// Composants
import Olympe from 'src/containers/Olympe';

// == Render

const rootReactElement = (
  <Provider store={store}>
    <Router>
      <Favicon url="https://i.goopics.net/exy0x.png" />
      <Olympe />
    </Router>
  </Provider>
);

const target = document.getElementById('root');
render(rootReactElement, target);
