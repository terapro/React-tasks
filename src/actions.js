import C from 'src/constants';

export const startSearch = (phrase, type) => {
  return {
    type: C.START_SEARCH,
    payload: {
      searchPhrase: phrase,
      searchType: type,
      replaceCurrentResultsBy: [],
      loadingData: true
    }
  }
};

export const resultsToStore = (results) => {
  return {
    type: C.RESULTS_TO_STORE,
    payload: {
      foundResults: results,
      loadingData: false
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
      loadingData: true,
      searchType: 'genres'
    }
  }
};

export const recommendedToStore = (results) => {
  return {
    type: C.RECOMMENDED_TO_STORE,
    payload: {
      foundRecommended: results,
      loadingData: false
    }
  }
};

export const openSearch = () => {
  return {
    type: C.OPEN_SEARCH,
    payload: {}
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


