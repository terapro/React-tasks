import { createStore, combineReducers, applyMiddleware } from 'redux';
import {films, mode, search} from 'src/store/reducers';
import stateData from 'src/data/initialState.json'
//import {C} from 'src/data/constants';
//import {resultsToStore, recommendedToStore} from 'src/actions';


const logger = store => next => action => {

  console.log('before');
  const returnVal = next(action);
  console.log('after');
  return returnVal;
};


const store = createStore(
  combineReducers({films, mode, search}),
  (localStorage['redux-store'])? JSON.parse(localStorage['redux-store']) : stateData,
  applyMiddleware(logger)
);

store.subscribe(() => {
  localStorage['redux-store'] = JSON.stringify(store.getState())
});

localStorage['redux-store'] = JSON.stringify(store.getState());

export default store;