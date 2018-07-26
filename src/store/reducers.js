import {C} from  'src/data/constants';

// Main reducers: 'films', 'mode' and 'search'.

export const films = (state={}, action) => {
  switch (action.type) {

    default:
      return state
  }
};
export const mode = (state={}, action) => {
  switch (action.type) {
    case C.START_SEARCH:
      return {
        ...state,
        dataLoading: action.payload.loadingData
      };
    default:
      return state
  }
};
export const search = (state={}, action) => {
  switch (action.type) {
    case C.START_SEARCH:
      return {
        ...state,
        request: action.payload.requestData
      };
    default:
      return state
  }
};

// Descendant reducers:

const filmsSorting = (state={}, action) => {
  switch (action.type) {

    default:
      return state
  }
};






