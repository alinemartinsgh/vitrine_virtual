import { combineReducers } from 'redux';

//import loginReducer from './login/reducers';
import campanhaReducer from './campanhas/reducers';

export const rootReducer = combineReducers({
  // loginReducer,
  campanhaReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
