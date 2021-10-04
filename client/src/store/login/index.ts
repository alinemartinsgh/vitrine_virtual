import actions from './actions';
import * as repository from './repository';
import * as selectors from './selectors';

const loginSelectors = { ...selectors };
const loginRepository = { ...repository };
const loginActions = { ...actions };

export { loginActions, loginRepository, loginSelectors };
