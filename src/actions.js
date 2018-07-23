import C from 'src/constants';

export const startSearch = (phrase, type) => (
  {type: C.START_SEARCH,
   payload: {
      searchPhrase: phrase,
      searchType: type,
      replaceCurrentResultsBy: [],
      loadingData: true
    }
  });

export const resultsToStore = results =>
  ({type: C.RESULTS_TO_STORE,
    payload: {
      foundResults: results,
      loadingData: false
    }
  });

export const openFilm = film =>
  ({type: C.OPEN_FILM,
   payload: {
      filmToOpen: {...film},
      filmGenre: film['genres'][0],
      loadingData: true,
      searchType: 'genres'
    }
  });

export const recommendedToStore = results => ({
    type: C.RECOMMENDED_TO_STORE,
    payload: {
      foundRecommended: results,
      loadingData: false
    }
  });

export const openSearch = () =>
  ({type: C.OPEN_SEARCH,
    payload: {}
  });

export const changeItem = newCriterion =>
  ({type: C.CHANGE_SORTING,
    payload: {
      chosenParameter: newCriterion
    }
  });



