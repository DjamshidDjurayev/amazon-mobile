import React from 'react'
import {
  StatusBar,
  FlatList,
  View,
  ActivityIndicator
} from 'react-native';
import BaseComponent from '../../../base/BaseComponent';
import {SafeAreaView} from "react-navigation";
import styles from './style';
import colors from '../../../../utils/colors';
import {connect} from 'react-redux';
import CatalogItem from './CatalogItem';
import CustomText from '../../../components/CustomText';
import strings from '../../../../locales/strings';
import Toolbar from '../../../components/Toolbar';
import NavigationService from '../../../../navigation/NavigationService'
import {actions} from '../../../../state/actions';
import {toDp} from '../../../../utils/ScreenUtils';

class CatalogScreen extends BaseComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount(): void {
    this.props.getCategories();
  }

  componentWillUnmount(): void {
    if (this.props.isLoading) {
      this.props.cancelGetCategories()
    }
  }

  render() {
    return(
      <SafeAreaView style={styles.rootView}>
        {this.renderStatusBar()}
        {this.renderToolbar()}
        {this.renderGridView()}
      </SafeAreaView>
    )
  }

  renderLoadingView = () => {
    return(
      <View style={styles.loadingViewContainer}>
        <ActivityIndicator color={colors.black} size={toDp(30)}/>
      </View>
    )
  };

  renderToolbar = () => {
    return(
      <Toolbar
        title={strings.catalog}
        backButtonEnabled
        searchEnabled
        onBackButtonClick={() => this.onBackButtonClicked()}
        onSearchClick={() => this.onSearchClicked(null)}
      />
    )
  };

  renderHeader = () => {
    const {categories, isLoading} = this.props;

    if (isLoading || categories.length === 0) {
      return null;
    }

    return(
      <CustomText
        size={16}
        title={strings.all_categories}/>
    );
  };

  renderGridView = () => {
    const {categories, isLoading} = this.props;

    if (isLoading) {
      return this.renderLoadingView();
    }

    return (
      <FlatList
        style={styles.gridView}
        columnWrapperStyle={styles.gridColumn}
        data={categories}
        renderItem={({ index, item }) => this.renderCategoryItem(index, item)}
        keyExtractor={item => item.id}
        ListHeaderComponentStyle={styles.headerTitle}
        ListHeaderComponent={this.renderHeader}
        ListEmptyComponent={this.renderEmptyView()}
        horizontal={false}
        numColumns={3}
      />
    )
  };

  renderEmptyView = () => {
    return(
      <View style={styles.emptyViewContainer}>
        <CustomText title={strings.empty}/>
      </View>
    )
  };

  renderCategoryItem = (index, item) => {
    return(
      <CatalogItem
        onClick={() => {
          this.onSearchClicked(item.name)
        }}
        id={index}
        item={item}
        numColumns={3} />
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

  onSearchClicked = query => {
    NavigationService.navigate('HomeSearch', {category: query})
  };
}

export default connect(
  (state, props) => ({
    categories: state.categories.categories,
    isLoading: state.categories.isLoading,
  }),
  dispatch => ({
    getCategories: () => dispatch(actions.getCategories()),
    cancelGetCategories: () => dispatch(actions.getCategoriesCancel())
  }),
)(CatalogScreen);
