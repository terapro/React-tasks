import React from 'react';

import {FilmPoster} from 'src/components/film/film-poster/film-poster.js';
import {FilmInfo} from 'src/components/film/film-info/film-info.js';


const Film = (props) => {
  const {active, info} = props;
  if (active) {
    return (<div className="film">
      <FilmPoster posterPath={info['poster_path']}/>
      <FilmInfo info={info}/>
    </div>);
  } else {
    return null;
  }
};

export {Film};