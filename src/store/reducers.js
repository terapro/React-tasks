import C from  'src/constants';


export const films = (state={}, action) => {
  switch (action.type) {
    case C.START_SEARCH :
      return {
        ...state,
        searchList: action.payload.searchResult
      };
    case C.OPEN_FILM:
      return {
        ...state,
        currentFilm: action.payload.filmToOpen,
        recommendedList: action.payload.recommendedList
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
        filmModeSettings: {genre: action.payload.filmGenre}
      };
    case C.OPEN_SEARCH:
      return {
        ...state,
        search: true,
        film: false
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





