import {combineReducers} from 'redux';

import campanhaReducer from './campanhas/reducers';

export const rootReducer = combineReducers({
  campanhaReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
