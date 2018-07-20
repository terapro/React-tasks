import C from 'src/constants';
import {moviesDB} from 'src/data/data.js';
const searchKeysAliases = { // only lower case!
  'sci fi': 'science fiction',
  'scifi': 'science fiction',
  'sci-fi': 'science fiction',
  'sf': 'science fiction',
  'melodrama': 'drama',
  'cartoon': "animation"
};

const startSearchFunc =(phrase, type) => {
  type = type.toLowerCase();
  phrase = phrase.toLowerCase();
  let result = [];
  switch(type){
    case 'genres': // Search by genres
      phrase = searchKeysAliases[phrase] ? searchKeysAliases[phrase] : phrase; // Synonyms for genres
      for (let i = 0; i < moviesDB.data.length; i++) {
        if (moviesDB.data[i][type].some((genre) => genre.toLowerCase() === phrase))
          result.push(moviesDB.data[i]);

      }
      break;
    case 'title': // Search by title
      for (let i = 0; i < moviesDB.data.length; i++) {
        if (moviesDB.data[i][type].toLowerCase() === phrase // Search by the direct coincidence
          || moviesDB.data[i][type].toLowerCase().indexOf(phrase) >= 0) { // Search by keywords in the title
          result.push(moviesDB.data[i]);
        }
      }
  }

  return result;
};

const searchInFilmModeByGenre = (genre) => {
  return startSearchFunc(genre, 'genres')
};

export const startSearch = (phrase, type) => {
  return {
    type: C.START_SEARCH,
    payload: {
      searchPhrase: phrase,
      searchType: type,
      searchResult: startSearchFunc(phrase, type)
    }
  }
};
export const openFilm = (film) => {
  const genre = film['genres'][0];
  return {
    type: C.OPEN_FILM,
    payload: {
      filmToOpen: {...film},
      filmGenre: genre,
      recommendedList: searchInFilmModeByGenre(genre)
    }
  }
};
export const openSearch = () => {
  return {
    type: C.OPEN_SEARCH,
    payload: {

    }
  }
};

export const changeItem = (newCriterion) => {
  return {
    type: C.CHANGE_SORTING,
    payload: {
      chosenParameter: newCriterion
    }
  }

};


