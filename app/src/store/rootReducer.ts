import { combineReducers } from 'redux';

import loginReducer from './login/reducers';
import campanhaReducer from './campanhas/reducers';

export const rootReducer = combineReducers({
  campanhaReducer,
  loginReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
