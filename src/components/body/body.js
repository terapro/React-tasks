import React from 'react';

import PropTypes from 'prop-types';


import {Header} from '../../components/header/index.js';
import {Results} from '../../components/results/index.js';
import {Footer} from '../../components/footer/index.js';

const Body = (props) => ( // Footer is separated for the better design expirience
  <React.Fragment>
    <div className="wrapper">
      <Header startSearch = {props.startSearch}   />
      <Results searchResult = {props.searchResult} />
    </div>
    <Footer/>
  </React.Fragment>
);

Body.propTypes = {
  startSearch: PropTypes.func,
  searchResult: PropTypes.array
};

export {Body};