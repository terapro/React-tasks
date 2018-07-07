import React from 'react';

import {Header} from './../components/header/index.js'
import {Summary} from './../components/summary/index.js'
import {Results} from './../components/results/index.js'
import {Footer} from './../components/footer/index.js'

const Body = () => (
  <div className="wrapper">
    <Header/>
    <Summary/>
    <Results/>
  </div>
);

const App = () => (
  <React.Fragment>
    <Body/>
    <Footer/>
  </React.Fragment>
);

export {App};