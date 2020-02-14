import React from 'react';
import ReactDOM from 'react-dom';
import * as registerServiceWorker from './registerServiceWorker';

import Routes from './components/Routes';

ReactDOM.render(<Routes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
registerServiceWorker.unregister();
