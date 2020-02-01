import React from 'react'
import {StatusBar, View, ScrollView} from 'react-native';
import BaseComponent from '../../../../base/BaseComponent';
import styles from './style';
import {SafeAreaView} from "react-navigation";
import Toolbar from '../../../../components/Toolbar';
import strings from '../../../../../locales/strings';
import colors from '../../../../../utils/colors';
import NavigationService from '../../../../../navigation/NavigationService';
import {connect} from 'react-redux';
import CustomText from '../../../../components/CustomText';
import FavouriteItem from './FavouriteItem';
import TextUtils from '../../../../../utils/TextUtils';

class FavouritesScreen extends BaseComponent {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <SafeAreaView style={styles.rootView}>
        {this.renderStatusBar()}
        {this.renderToolbar()}
        {this.renderContent()}
      </SafeAreaView>
    )
  }

  renderContent = () => {
    const {favourites} = this.props;

    if (!TextUtils.checkObjectIsEmpty(favourites)) {
      return  (
        <ScrollView>
          {Object.keys(favourites).map((key) => {
            return (
              <View key={key}>
                <FavouriteItem item={favourites[key]} onClick={() => this.onProductClicked(favourites[key])}/>
              </View>
            );
          })}
        </ScrollView>
      )
    } else {
      return this.renderEmptyView()
    }
  };

  renderEmptyView = () => {
    return (
      <View style={styles.emptyViewContainer}>
        <CustomText title={strings.empty}/>
      </View>
    )
  };

  renderToolbar = () => {
    return(
      <Toolbar
        title={strings.favorites}
        backButtonEnabled
        onBackButtonClick={() => this.onBackButtonClicked()}
      />
    )
  };

  renderStatusBar = () => {
    return(
      <StatusBar
        backgroundColor={colors.statusbar_transparent}
        hidden={false}
        barStyle={'light-content'} />
    )
  };

  onBackButtonClicked = () => {
    NavigationService.goBack()
  };

  onProductClicked = product => {
    NavigationService.navigate('ProductDetails', {product})
  };
}

export default connect(
  (state, props) => ({
    user: state.profile.user,
    favourites: state.favourites.favourites,
  }),
  dispatch => ({
  }),
)(FavouritesScreen);
