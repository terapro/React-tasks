import React from 'react';

import {Item} from "../item/item";

const ResultsList = (props) => {
  if (props.searchResult.length) {
    return (props.searchResult.map((item) => (
          <Item key={item['id']} info={item} setFilmModeCallback={props.setFilmModeCallback}/>
        )
      )
    );
  } else {
    throw new Error('No results');
  }


};

export {ResultsList};