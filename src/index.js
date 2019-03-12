/* eslint react/jsx-filename-extension:0 */
import React from 'react';
import ReactDOM from 'react-dom';

import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import App from './components/app/app';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';

import './styles/global.css';
import './styles/animations.css';

const store = createStore(
	reducers,
	applyMiddleware(thunkMiddleware)
);

if (process.env.NODE_ENV === 'development') {
	window.store = store;
}

const Application = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(<Application />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
