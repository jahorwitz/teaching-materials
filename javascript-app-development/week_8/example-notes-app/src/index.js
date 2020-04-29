	import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import BoardContainer from './containers/BoardContainer';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BoardContainer />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
