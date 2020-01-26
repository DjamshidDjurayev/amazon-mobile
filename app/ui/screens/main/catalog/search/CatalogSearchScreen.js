import React from 'react'
import BaseComponent from '../../../../base/BaseComponent';
import {connect} from 'react-redux';
import styles from './style';
import {
  StatusBar,
  TouchableOpacity,
  View
} from 'react-native';
import colors from '../../../../../utils/colors';
import {SafeAreaView} from "react-navigation";
import Entypo from 'react-native-vector-icons/Entypo';
import Materialicon from 'react-native-vector-icons/MaterialCommunityIcons';
import {toDp} from '../../../../../utils/ScreenUtils';
import MainSearchView from '../../../../components/MainSearchView';
import strings from '../../../../../locales/strings';
import CustomText from '../../../../components/CustomText';
import NavigationService from '../../../../../navigation/NavigationService'
import MenuItem from '../../../../components/MenuItem';

class CatalogSearchScreen extends BaseComponent {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.inputs = {};

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

  componentDidMount(): void {

  }

  render() {
    return(
      <SafeAreaView style={styles.rootView}>
        {this.renderStatusBar()}
        {this.renderSearchView()}
        {this.renderAllCategoriesTitle()}
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
        key={index}
        onPress={() => this.onPopularCategoriesItemClicked(item)}
        style={[styles.popularCategoriesItemContainer,
          firstItem ? styles.firstItem : lastItem ? styles.lastItem : styles.item
        ]}>
        <CustomText
          style={{flex: 1}}
          title={item.title}
          size={15}
          textColor={colors.black}/>

        <Materialicon
          name={'arrow-top-left'}
          size={toDp(18)}
          color={colors.gray_5F}/>
      </TouchableOpacity>
    )
  };

  renderAllCategoriesTitle = () => {
    return(
      <MenuItem
        onClick={() => this.onCategoriesTitleClicked()}
        title={strings.all_categories}/>
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
            autoFocus
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
