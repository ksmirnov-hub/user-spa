import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from "react-redux";

import './index.css';
import App from './containers/App';

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga'
import thunk from "redux-thunk";

import rootReducer from "./redux/reducers/rootReducer";
import rootSaga from './redux/sagas'

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	composeEnhancer(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	</React.StrictMode>
);

