import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '../../../../colors';

const styles = EStyleSheet.create({
  rootView: {
    flex: 1,
    backgroundColor: colors.ultra_light_gray,
  },
  container: {
    flex: 1,
    backgroundColor: colors.ultra_light_gray,
  },
  topContainer: {
    marginTop: '16rem',
    marginBottom: '16rem',
  },
  topItemContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  topLeftIcon: {
    padding: '12rem',
  },
  topRightIcon: {
    margin: '10rem',
  },
  ordersContainer: {
    backgroundColor: colors.white,
    marginBottom: '16rem',
    marginTop: '16rem',
    padding: '14rem',
    borderRadius: '12rem',
  },
  deliveryInfoContainer: {
    backgroundColor: colors.white,
    padding: '14rem',
    borderRadius: '12rem',
    marginBottom: '16rem',
  },
  orderDetailsContainer: {
    backgroundColor: colors.white,
    padding: '14rem',
    borderRadius: '12rem',
    marginBottom: '16rem',
  },
  orderButton: {
    marginBottom: '16rem',
  }
});

export default styles
