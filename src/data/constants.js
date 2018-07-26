export const C = { // constants
  START_SEARCH: 'START_SEARCH',
  OPEN_FILM: 'OPEN_FILM', //-
  OPEN_SEARCH: 'OPEN_SEARCH',//-
  CHANGE_SORTING: 'CHANGE_SORTING',//-
  RESULTS_TO_STORE: 'RESULTS_TO_STORE',//-
  RECOMMENDED_TO_STORE: 'RECOMMENDED_TO_STORE'//-
};

export const parameters = {
  searchTypes: [{name: 'title', value: 'title'}, {name: 'genre', value: 'genres'}], // name - for UI, value - for API
  sortParameters: [{name: 'rating', value: 'rating'}, {name: 'release date', value: 'release_date'}], // name - for UI, value - for API
  itemsPerPage: 20
};
