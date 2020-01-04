import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../../../../colors';
import {toDp} from '../../../../../utils/ScreenUtils';

const styles = EStyleSheet.create({
  rootView: {
    flex: 1,
    backgroundColor: colors.ultra_light_gray,
    paddingBottom: '50rem'
  },
  container: {
    flex: 1,
    backgroundColor: colors.ultra_light_gray,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '18rem',
    marginBottom: '18rem',
  },
  backButtonContainer: {
    marginLeft: '16rem',
  },
  searchContainer: {
    flex: 1,
    marginLeft: '16rem',
    marginRight: '16rem',
  },
  categoriesTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: '16rem',
    padding: '14rem',
  },
  categoriesTitle: {
    flex: 1,
  },
  rightIcon: {

  },
  popularSearchesTitle: {
    marginLeft: '14rem',
    marginRight: '14rem',
    marginTop: '14rem',
    marginBottom: '14rem',
  },
  popularCategoriesItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: '14rem',
  },
  firstItem: {
    borderTopLeftRadius: toDp(16),
    borderTopRightRadius: toDp(16),
  },
  lastItem: {
    borderBottomLeftRadius: toDp(16),
    borderBottomRightRadius: toDp(16),
    borderTopColor: colors.gray_D6,
    borderTopWidth: 0.5,
  },
  item: {
    borderRadius: 0,
    borderTopColor: colors.gray_D6,
    borderTopWidth: 0.5,
  },
});

export default styles
