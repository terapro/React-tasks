import { createStore, combineReducers} from 'redux';
import {films, mode, search} from 'src/store/reducers';
import stateData from 'src/data/initialState.json'

const store = createStore(
  combineReducers({films, mode, search}),
  (localStorage['redux-store'])? JSON.parse(localStorage['redux-store']) : stateData
);


store.subscribe(() => {
  localStorage['redux-store'] = JSON.stringify(store.getState())
});

//console.log(store.getState());
localStorage['redux-store'] = JSON.stringify(store.getState());

export default store;