import React from 'react';

import {FilmPoster} from '../film/film-poster/film-poster.js';
import {FilmInfo} from '../film/film-info/film-info.js';

const Film = (props) => {
  if (props.active) {
    return (<div className="film">
      <FilmPoster posterPath={props.info['poster_path']}/>
      <FilmInfo info={props.info}/>
    </div>);
  } else {
    return null;
  }
};

export {Film};