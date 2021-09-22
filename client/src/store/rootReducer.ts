import { combineReducers } from 'redux';

import campanhaReducer from './campanhas/reducers';
import loginReducer from './login/reducers';

export const rootReducer = combineReducers({
  loginReducer,
  campanhaReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
