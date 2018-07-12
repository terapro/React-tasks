import React from 'react';

import {FilmPoster} from 'src/components/film/film-poster/film-poster.js';
import {FilmInfo} from 'src/components/film/film-info/film-info.js';

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