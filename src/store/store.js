import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { rootReducer } from './root-reducer';

// const loggerMiddleware = (store) => (next) => (action) => {
// 	if (!action.type) {
// 		return next(action);
// 	}

// 	console.log('type: ', action.type);
// 	console.log('payload: ', action.payload);
// 	console.log('currentState: ', store.getState());

// 	next(action);

// 	console.log('next state: ', store.getState());
// };

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart']
};

// eslint-disable-next-line no-unused-vars
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [import.meta.env.NODE_ENV === 'production' && logger, thunk].filter(Boolean);

const composeEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composeEnhancers);

export const persistor = persistStore(store);
