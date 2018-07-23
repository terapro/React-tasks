import C from  'src/constants';

// Main reducers: 'films', 'mode' and 'search'.

export const films = (state={}, action) => {
  switch (action.type) {
    case C.START_SEARCH :
      return {
        ...state,
        searchList: action.payload.replaceCurrentResultsBy
      };
    case C.OPEN_FILM:
      return {
        ...state,
        currentFilm: action.payload.filmToOpen,
        currentFilmGenre: action.payload.filmGenre
      };
    case C.CHANGE_SORTING:
      return {
        ...state,
        sortBy: filmsSorting(state.sortBy, action)
      };
    case C.RESULTS_TO_STORE:
      return {
        ...state,
        searchList: action.payload.foundResults
      };
    case C.RECOMMENDED_TO_STORE:
      return {
        ...state,
        recommendedList: action.payload.foundRecommended
      };
    default:
      return state
  }
};
export const mode = (state={}, action) => {
  switch (action.type) {
    case C.OPEN_FILM:
      return {
        ...state,
        search: false,
        film: true,
        loadingData: action.payload.loadingData
      };
    case C.OPEN_SEARCH:
      return {
        ...state,
        search: true,
        film: false
      };
    case C.START_SEARCH :
      return {
        ...state,
        loadingData: action.payload.loadingData
      };
    case C.RESULTS_TO_STORE:
      return {
        ...state,
        loadingData: action.payload.loadingData
      };
    case C.RECOMMENDED_TO_STORE:
      return {
        ...state,
        loadingData: action.payload.loadingData
      };
    default:
      return state
  }
};
export const search = (state={}, action) => {
  switch (action.type) {
    case C.START_SEARCH :

    return {
      phrase: action.payload.searchPhrase,
      type: action.payload.searchType,
    };

    default:
      return state
  }
};

// Descendant reducers:

 const filmsSorting = (state={}, action) => {
  switch (action.type) {
    case C.CHANGE_SORTING :
      return {
        ...state,
        chosenParameter: action.payload.chosenParameter
      };
    default:
      return state
  }
};






