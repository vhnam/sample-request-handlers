import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

import rootReducers from '../redux/reducers';

import {composeEnhancers} from './utils';

function configureStore(initialState = {}) {
  const enhancer = composeEnhancers(applyMiddleware(thunk));
  const store = createStore(rootReducers, initialState, enhancer);

  return store;
}

export default configureStore;
