import { combineReducers } from 'redux';

import { moviesReducers } from './moviesReducers';

export const rootReducer = combineReducers({
    moviesReducers,
});