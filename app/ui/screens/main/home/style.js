import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../../../colors';

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
    backgroundColor: colors.green,
    paddingLeft: '16rem',
    paddingRight: '16rem',
    paddingTop: '12rem',
    paddingBottom: '12rem',
  },
  logoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  langContainer: {
    flex: 0.4,
    alignItems: 'flex-end',
  },
  logo: {
    flex: 0.6,
  },
  mainSearchView: {
    marginTop: '20rem'
  },
  sliderContainer: {

  },
  inactiveDot: {
    backgroundColor: colors.gray_D6,
    width: '5rem',
    height: '5rem',
    borderRadius: 10,
    marginRight: '3rem',
    marginBottom: '8rem'
  },
  activeDot: {
    backgroundColor: colors.green,
    width: '5rem',
    height: '5rem',
    borderRadius: 10,
    marginRight: '3rem',
    marginBottom: '8rem'
  },
  imageStyle: {
    height: '180rem',
    backgroundColor: 'white',
    width: null,
  },
  paginationStyle: {
    bottom: 0,
    left: 0,
    right: 0,
  },
  productsTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 16,
  },
  loadingView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  popularBrandsContainer: {
    marginTop: '20rem',
    marginBottom: '20rem',
  },
  popularBrandsTitle: {
    alignSelf: 'center',
    margin: '12rem',
  },
});

export default styles
