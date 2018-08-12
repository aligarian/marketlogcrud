import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {userReducer } from './reducers/user-reducer';


const sagaMiddleware = createSagaMiddleware()
function productReducer(state=[], action){
	switch(action.type){
		case 'FETCH_LIST_PRODUCTS':
		 	return {
		 		product: state,
		 		users:action.payload.users
		 	};
		default:
		 	return state;
	}
}

const allReducers =  combineReducers({
	products:productReducer,
	users: userReducer
	
});

const store = createStore(
				allReducers,[],
				compose(applyMiddleware(sagaMiddleware)),
				{
					products:[{name:'iPhone'}],
					users:[{name:'Ammar'}]
				},
				window.devToolsExtension && window.devToolsExtension()
			);




//,{users:[{name:'ammar',id:12}], products:[{name:'samsung', price:12000}]}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

