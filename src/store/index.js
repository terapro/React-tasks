import { createStore, combineReducers, applyMiddleware } from 'redux';
import {films, mode, search} from 'src/store/reducers';
import stateData from 'src/data/initialState.json'
import C from 'src/constants';
import {resultsToStore, recommendedToStore} from 'src/actions'; // TODO; take another action


/**
 * For API requist to the server
 * @param {string} phrase
 * @param {string} searchBy
 * @param {number} limit
 * @returns {Promise<any>}
 * @constructor
 */
const RequestToServer = (phrase, searchBy, limit=21) =>

  new Promise((resolves, rejects) => {
    console.log(phrase);
    console.log(searchBy);
    const api = `http://react-cdp-api.herokuapp.com/movies?search=${phrase}&searchBy=${searchBy}&limit=${limit}`;
    console.log(api);
    const request = new XMLHttpRequest();
    request.open('GET', api);
    request.onload = () =>
      (request.status === 200) ?
        resolves(JSON.parse(request.response)) :
        reject(Error(request.statusText));
    request.onerror = (err) => rejects(err);
    request.send();
  });


const logger = store => next => action => {

  console.log('Before ', action.type);

  // Starting API request for Search mode
  if(action.type == C.START_SEARCH) {// Request to the server
    RequestToServer(action.payload.searchPhrase, action.payload.searchType).then(
      info => store.dispatch(resultsToStore(info.data)),
      err => console.error(
        new Error("cannot load films from server"))
    );
  }
  // Starting API request for Film mode
  if(action.type == C.OPEN_FILM) {// Request to the server
    RequestToServer(action.payload.filmGenre, action.payload.searchType).then(
      info => store.dispatch(recommendedToStore(info.data)),
      err => console.error(
        new Error("cannot load films from server"))
    );
  }

  const returnVal = next(action);
  console.log('After ', action.type);
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

//console.log(store.getState());
localStorage['redux-store'] = JSON.stringify(store.getState());

export default store;