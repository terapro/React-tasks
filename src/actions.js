import {C} from 'src/data/constants';

export const startSearch = (requestData) => {
  return {type: C.START_SEARCH,
    payload: {
      requestData: requestData,
      dataLoading: true
    }
  }
};