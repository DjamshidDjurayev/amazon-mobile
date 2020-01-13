import * as splashActions from './splash';
import * as loginActions from './login';
import * as registrationActions from './registration';
import * as profileActions from './profile'
import * as favouritesActions from './favourites'
import * as categoriesActions from './categories'

const actions = {
  ...splashActions,
  ...loginActions,
  ...registrationActions,
  ...profileActions,
  ...favouritesActions,
  ...categoriesActions,
};

export {actions};
