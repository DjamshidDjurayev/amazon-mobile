import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../../utils/colors';
import {toDp} from '../../../utils/ScreenUtils';

const styles = EStyleSheet.create({
  rootView: {
    flex: 1,
    backgroundColor: colors.ultra_light_gray,
  },
  container: {
    flex: 1,
    backgroundColor: colors.ultra_light_gray,
  },
  sliderContainer: {
  },
  slider: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  topHeaderContainer: {
    padding: '10rem',
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    height: '58rem',
  },
  inactiveDot: {
    backgroundColor: colors.white,
    width: '8rem',
    height: '8rem',
    borderRadius: 10,
    marginRight: '4rem',
  },
  activeDot: {
    backgroundColor: colors.green,
    width: '8rem',
    height: '8rem',
    borderRadius: 10,
    marginRight: '4rem',
  },
  imageStyle: {
    height: '280rem',
    backgroundColor: 'white',
    width: null,
  },
  paginationContainer: {
    flex: 1,
  },
  numberPaginationStyle: {
    position: 'absolute',
    backgroundColor: colors.divider_transparent,
    bottom: '10rem',
    left: null,
    right: '8rem',
    borderRadius: '8rem',
    paddingLeft: '6rem',
    paddingRight: '6rem',
  },
  dotsPaginationStyle: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: colors.divider_transparent,
    bottom: '10rem',
    left: '8rem',
    right: null,
    borderRadius: '14rem',
    paddingLeft: '5rem',
    paddingRight: '1rem',
    paddingTop: '2rem',
    paddingBottom: '2rem'
  },
  iconStyle: {
    backgroundColor: colors.divider_transparent,
    borderRadius: '40rem',
    width: '40rem',
    height: '40rem',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '12rem',
  },
  productDescriptionContainer: {
    backgroundColor: colors.white,
    padding: '14rem',
    borderBottomLeftRadius: '16rem',
    borderBottomRightRadius: '16rem',
  },
  productDetailsContainer: {
    marginTop: '16rem',
    marginBottom: '16rem',
  },
  deliveryInfoContainer: {
    marginBottom: '16rem',
  },
  relatedProductsContainer: {
    marginBottom: '16rem',
  },
  addToCartButton: {
    marginTop: '16rem',
    marginBottom: '16rem',
  },
  twisterImage: {
    height: '40rem',
    width: '40rem',
  },
  tableColumnContainer: {
    flexDirection: 'row',
    marginBottom: '6rem',
  },
  tableKeyContainer: {
    flex: 0.5,
    alignItems: 'center',
    flexDirection: 'row'
  },
  tableKey: {
    marginRight: '5rem',
    includeFontPadding: false,
    textAlign: 'left',
    textAlignVertical: 'center',
  },
  dottedView: {
    flex: 1,
    width: '100%',
    borderStyle: 'dotted',
    borderBottomColor: colors.gray_F4,
    borderBottomWidth: '1rem',
    borderRadius: '2rem',
  },
  tableValueContainer: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  tableValue: {
    includeFontPadding: false,
    textAlign: 'right',
    alignSelf: 'stretch',
    textAlignVertical: 'center',
    marginLeft: '5rem'
  },
  tableRowContainer: {
    flexDirection: 'row',
    marginBottom: '4rem',
  },
  specificationsContainer: {
    backgroundColor: colors.white,
    padding: '14rem'
  },
  featuresContainer: {
    backgroundColor: colors.white,
    padding: '14rem'
  },
  featuresItemContainer: {
    flexDirection: 'row',
    marginBottom: '6rem',
    marginRight: '12rem',
  },
  dotView: {
    width: '5rem',
    height: '5rem',
    borderRadius: '10rem',
    backgroundColor: colors.black,
    marginRight: '10rem',
    marginTop: '3rem',
  },
  featuresItemTitle: {
    textAlignVertical: 'center',
    alignSelf: 'flex-start',
  },
  parallaxStyle: {
    flex: 1,
    overflow: 'hidden',
  },
  emptyViewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20rem',
  },
  paymentsContainer: {
    backgroundColor: colors.white,
    padding: 14
  },
});

export default styles
