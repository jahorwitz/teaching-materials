import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import BoardContainer from './containers/BoardContainer';
import { setInitialNoteState } from './actions/BoardAction';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

// Thunk allows us to use async functions as actions, instead of plain objects
const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(setInitialNoteState());

ReactDOM.render(
  <Provider store={store}>
    <BoardContainer />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
