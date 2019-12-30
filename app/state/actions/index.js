import * as splashActions from './splash';
import * as loginActions from './login';
import * as registrationActions from './registration';

const actions = {
  ...splashActions,
  ...loginActions,
  ...registrationActions,
};

export {actions};
