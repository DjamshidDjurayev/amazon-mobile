import React from 'react'
import {
  StatusBar,
  View,
  FlatList,
} from 'react-native';
import BaseComponent from '../../../base/BaseComponent';
import {SafeAreaView} from "react-navigation";
import styles from './style';
import colors from '../../../../colors';
import {connect} from 'react-redux';
import CatalogItem from './CatalogItem';
import CustomText from '../../../components/CustomText';
import strings from '../../../../strings';
import {toDp} from '../../../../utils/ScreenUtils';
import Toolbar from '../../../components/Toolbar';
import * as NavigationService from '../../../../navigation/NavigationService'

const items = Array.apply(null, Array(20)).map((v, i) => {
  return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1), title: 'title ' + i, empty: false };
});

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ title: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

class CatalogScreen extends BaseComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount(): void {
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
    return (
      <FlatList
        style={{flex: 1}}
        columnWrapperStyle={styles.gridColumn}
        data={formatData(items, 3)}
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
  }),
  dispatch => ({
  }),
)(CatalogScreen);
