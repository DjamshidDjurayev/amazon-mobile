import * as splashActions from './splash';
import * as loginActions from './login';
import * as registrationActions from './registration';
import * as profileActions from './profile'
import * as favouritesActions from './favourites'
import * as categoriesActions from './categories'
import * as cartActions from './cart'
import * as myOrdersActions from './myOrders'
import * as homeActions from './home'
import * as productActions from './product'
import * as homeProductsActions from './homeProducts'
import * as logoutActions from './logout'
import * as changePasswordActions from './changePassword'
import * as updateNamesActions from './updateNames'
import * as addToCartActions from './addToCart'

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
  ...productActions,
  ...homeProductsActions,
  ...logoutActions,
  ...changePasswordActions,
  ...updateNamesActions,
  ...addToCartActions,
};

export {actions};
