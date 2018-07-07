import React, {Component} from 'react';

import PropTypes from 'prop-types';

import {Header} from './../components/header/index.js'
import {Summary} from './../components/summary/index.js'
import {Results} from './../components/results/index.js'
import {Footer} from './../components/footer/index.js'

const Body = (props) => ( // Footer is separated for the better design expirience
  <div className="wrapper">
    <Header searchButtonCallBack = {props.searchButtonCallBack}/>
    <Summary/>
    <Results/>
  </div>
);
Body.propTypes = {
  searchButtonCallBack: PropTypes.func
};

class App extends Component {
  constructor(){
    super();
    this.state = {



    };

    this.startSearch = () => {

    }
  }
  render() {
    return (
      <React.Fragment>
        <Body searchButtonCallBack = {( ) => console.log(this)} />
        <Footer/>
      </React.Fragment>
    )

  }

}



export {App};