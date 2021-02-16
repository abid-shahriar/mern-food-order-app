import React from 'react';
import reactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import 'semantic-ui-css/semantic.min.css';

import App from './App';
import reducers from './store/rootReducer';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

reactDom.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
