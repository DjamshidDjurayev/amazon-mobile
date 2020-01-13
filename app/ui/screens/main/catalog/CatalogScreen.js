import React from 'react'
import {
  StatusBar,
  FlatList,
} from 'react-native';
import BaseComponent from '../../../base/BaseComponent';
import {SafeAreaView} from "react-navigation";
import styles from './style';
import colors from '../../../../colors';
import {connect} from 'react-redux';
import CatalogItem from './CatalogItem';
import CustomText from '../../../components/CustomText';
import strings from '../../../../locales/strings';
import Toolbar from '../../../components/Toolbar';
import NavigationService from '../../../../navigation/NavigationService'
import {actions} from '../../../../state/actions';

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

  renderToolbar = () => {
    return(
      <Toolbar
        title={strings.catalog}
        backButtonEnabled
        searchEnabled
        onBackButtonClick={() => this.onBackButtonClicked()}
        onSearchClick={() => this.onSearchClicked()}
      />
    )
  };

  renderHeader = () => {
    return(
      <CustomText
        size={16}
        title={strings.all_categories}/>
    );
  };

  renderGridView = () => {
    const {categories} = this.props;

    return (
      <FlatList
        style={{flex: 1}}
        columnWrapperStyle={styles.gridColumn}
        data={categories}
        renderItem={({ index, item }) => this.renderCategoryItem(index, item)}
        keyExtractor={item => item.id}
        ListHeaderComponentStyle={styles.headerTitle}
        ListHeaderComponent={this.renderHeader}
        horizontal={false}
        numColumns={3}
      />
    )
  };

  renderCategoryItem = (index, item) => {
    return(
      <CatalogItem
        onClick={() => this.onCategoryItemClicked(item)}
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

  onCategoryItemClicked = item => {

  };

  onBackButtonClicked = () => {
    NavigationService.goBack()
  };

  onSearchClicked = () => {
    NavigationService.navigate('CatalogSearch')
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
