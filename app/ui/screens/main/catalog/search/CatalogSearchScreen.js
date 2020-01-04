import React from 'react'
import BaseComponent from '../../../../base/BaseComponent';
import {connect} from 'react-redux';
import styles from './style';
import {
  StatusBar,
  TouchableOpacity,
  View
} from 'react-native';
import colors from '../../../../../colors';
import {SafeAreaView} from "react-navigation";
import Entypo from 'react-native-vector-icons/Entypo';
import Materialicon from 'react-native-vector-icons/MaterialCommunityIcons';
import {toDp} from '../../../../../utils/ScreenUtils';
import MainSearchView from '../../../../components/MainSearchView';
import strings from '../../../../../strings';
import CustomText from '../../../../components/CustomText';
import * as NavigationService from '../../../../../navigation/NavigationService'

class CatalogSearchScreen extends BaseComponent {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      popularCategories: [
        {id: 1, title: 'телефон Хиаоми 112'},
        {id: 2, title: 'телефон Хиаоми 222'},
        {id: 3, title: 'телефон Хиаоми 333'},
        {id: 4, title: 'телефон Хиаоми 444'},
        {id: 5, title: 'телефон Хиаоми 555'},
        {id: 6, title: 'телефон Хиаоми 666'},
        {id: 7, title: 'телефон Хиаоми 777'},
      ]
    };
  }

  render() {
    return(
      <SafeAreaView style={styles.rootView}>
        {this.renderStatusBar()}
        {this.renderSearchView()}
        {this.renderCategoriesTitle()}
        {this.renderPopularCategories()}
      </SafeAreaView>
    )
  }

  renderPopularCategories = () => {
    return(
      <View>
        <CustomText
          style={styles.popularSearchesTitle}
          size={18}
          title={strings.popularSearches}/>

        {this.state.popularCategories.map( (item, i) => {
          return this.renderPopularCategoriesItem(item, i, this.state.popularCategories.length)
        })}
      </View>
    )
  };

  renderPopularCategoriesItem = (item, index, size) => {
    let lastItem = index === (size - 1);
    let firstItem = index === 0;

    return(
      <TouchableOpacity
        onPress={() => this.onPopularCategoriesItemClicked(item)}
        style={[styles.popularCategoriesItemContainer,
          firstItem ? styles.firstItem : lastItem ? styles.lastItem : styles.item
        ]}>
        <CustomText
          style={{flex: 1}}
          title={item.title}
          size={14}
          textColor={colors.black}/>

        <Materialicon
          name={'arrow-top-left'}
          size={toDp(18)}
          color={colors.gray_D6}/>
      </TouchableOpacity>
    )
  };

  renderCategoriesTitle = () => {
    return(
      <TouchableOpacity
        onPress={() => this.onCategoriesTitleClicked()}
        style={styles.categoriesTitleContainer}>

        <CustomText
          style={styles.categoriesTitle}
          title={strings.all_categories}/>

        <Entypo
          style={styles.rightIcon}
          name={'chevron-thin-right'}
          size={toDp(14)}
          color={colors.gray_D6}/>
      </TouchableOpacity>
    )
  };

  renderSearchView = () => {
    return(
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => this.onBackButtonClicked()}
          style={styles.backButtonContainer}>
          <Entypo
            name={'chevron-thin-left'}
            size={toDp(20)}
            color={colors.black}/>
        </TouchableOpacity>

        <View style={styles.searchContainer}>
          <MainSearchView
            fontSize={toDp(16)}
            title={strings.what_to_find} />
        </View>

      </View>
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

  onCategoriesTitleClicked = () => {

  };

  onBackButtonClicked = () => {
    NavigationService.goBack()
  };

  onPopularCategoriesItemClicked = item => {

  };
}

export default connect(
  (state, props) => ({
  }),
  dispatch => ({
  }),
)(CatalogSearchScreen);
