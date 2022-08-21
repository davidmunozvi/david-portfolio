import React, { createContext, useReducer } from 'react';

import localeReducer from './localeReducer';
import themeReducer from './themeReducer';

const initialState = {
	theme: 'dark',
	locale: '',
};

const combineReducers = reducers => {
	return (state = {}, action) => {
		const newState = {};
		for (let key in reducers) {
			newState[key] = reducers[key](state[key], action);
		}
		return newState;
	};
};

const reducer = combineReducers({
	theme: themeReducer,
	locale: localeReducer,
});

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const store = React.useMemo(() => [state, dispatch], [state]);

	return (
		<GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
	);
};
