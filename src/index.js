// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


// Styles
import 'src/main.scss';

// Pictures
import 'src/img/netflix-bg.jpg';
import 'src/img/logo-netflixroulette.png';

// Modules
import {Body} from 'src/components/body/body.js';
import store from 'src/store/index.js';



const root = document.getElementById("root");
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <Body/>
  </Provider>
  , root);




