// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';

// Styles
import 'src/main.scss';

// Pictures
import 'src/img/netflix-bg.jpg';
import 'src/img/logo-netflixroulette.png';
import 'src/img/spiner.gif'

// Components
import {Body} from 'src/components-v2/body/body.js';
import {PageMain} from 'src/components-v2/pages/main/page-main';
import {PageFilm} from 'src/components-v2/pages/film/page-film';
import {PageSearchByUrl} from 'src/components-v2/pages/searchByUrl/page-search-by-url';
import {PageUnknown} from 'src/components-v2/pages/unknown/page-unknown';

// Modules
import store from 'src/store/index.js';


const root = document.getElementById("root");

ReactDOM.render(
  (<Router>
    <Provider store={store}>
    <Body>
      <Switch>
        <Route exact path='/' component={PageMain} />
        <Route path='/search*' component={PageSearchByUrl}/>
        <Route path='/film' component={PageFilm} />
        <Route path='*' component={PageUnknown} />
      </Switch>
    </Body>
    </Provider>
  </Router>),
    root);
