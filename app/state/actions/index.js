import * as splashActions from './splash';
import * as loginActions from './login';
import * as registrationActions from './registration';
import * as profileActions from './profile'
import * as favouritesActions from './favourites'
import * as categoriesActions from './categories'
import * as cartActions from './cart'
import * as myOrdersActions from './myOrders'
import * as homeActions from './home'

const actions = {
  ...splashActions,
  ...loginActions,
  ...registrationActions,
  ...profileActions,
  ...favouritesActions,
  ...categoriesActions,
  ...cartActions,
  ...myOrdersActions,
  ...homeActions,
};

export {actions};
