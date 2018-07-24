// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';


// Styles
import 'src/main.scss';

// Pictures
import 'src/img/netflix-bg.jpg';
import 'src/img/logo-netflixroulette.png';
import 'src/img/spiner.gif'

// Modules
import {Body} from 'src/components/body/body.js';
import store from 'src/store/index.js';

const root = document.getElementById("root");

ReactDOM.render(
  (<Router>
    <Provider store={store}>
      <Body/>
    </Provider>
  </Router>),
  root);




