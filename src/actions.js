import {C} from 'src/data/constants';

export const startSearch = (requestData) => {
  console.log('ha--------', requestData);
  return {type: C.START_SEARCH,
    payload: {
      requestData: requestData,
      dataLoading: true
    }
  }
};