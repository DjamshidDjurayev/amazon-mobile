import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../../colors';

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
  topHeaderContainer: {
    position: 'absolute',
    top: '28rem',
    padding: '10rem',
    flexDirection: 'row',
    left: 0,
    right: 0,
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
  }
});

export default styles
