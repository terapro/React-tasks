import React, {Component} from 'react';


//import {NoResults} from '../results/no-results/no-results.js';

import {Item} from './item/item.js';


class Results extends Component {
  constructor() {
    super();
    this.state = {
      status: 'noResults', // 'noResults'


    };
  }

  render() {
    return (
      <div className='results'>

        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    );
  }
}



export {Results};