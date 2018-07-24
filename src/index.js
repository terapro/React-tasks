// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';


// Styles
import 'src/main.scss';

// Pictures
import 'src/img/netflix-bg.jpg';
import 'src/img/logo-netflixroulette.png';
import 'src/img/spiner.gif'

// Modules
import {Body} from 'src/components-v2/body/body.js';

import {PageMain} from 'src/components-v2/pages/main/page-main';
import {PageFilm} from 'src/components-v2/pages/film/page-film';
import {PageSearch} from 'src/components-v2/pages/search/page-search';

import store from 'src/store/index.js';

const root = document.getElementById("root");

ReactDOM.render(
  (<Router>
    <Provider store={store}>
      <Body>
        <Route exact path='/' component={PageMain} />
        <Route exact path='/search' component={PageSearch} />
        <Route exact path='/film' component={PageFilm} />
      </Body>
    </Provider>
  </Router>),
  root);




