// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Search} from 'src/components-v2/search/search';

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
import {PageSearchByUrl} from 'src/components-v2/pages/searchByUrl/page-searchByUrl';
import {PageUnknown} from 'src/components-v2/pages/unknown/page-unknown';

import store from 'src/store/index.js';

const root = document.getElementById("root");

ReactDOM.render(
  (<Router>
    <Body>
      <Switch>
        <Route exact path='/' component={PageMain} />
        <Route exact path='/search' component={PageSearch}/>
        <Route path='/search' component={PageSearchByUrl}/>
        <Route path='/film' component={PageFilm} />
        <Route path='*' component={PageUnknown} />
      </Switch>
    </Body>
  </Router>),
    root);
