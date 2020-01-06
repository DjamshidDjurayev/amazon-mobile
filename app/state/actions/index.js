import * as splashActions from './splash';
import * as loginActions from './login';
import * as registrationActions from './registration';
import * as profileActions from './profile'

const actions = {
  ...splashActions,
  ...loginActions,
  ...registrationActions,
  ...profileActions,
};

export {actions};
