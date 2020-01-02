import React from 'react'
import {
  StatusBar,
  View,
  FlatList,
} from 'react-native';
import BaseComponent from '../../../base/BaseComponent';
import {SafeAreaView} from "react-navigation";
import styles from '../home/style';
import colors from '../../../../colors';
import {connect} from 'react-redux';
import CatalogItem from './CatalogItem';
import CustomText from '../../../components/CustomText';
import strings from '../../../../strings';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

class CatalogScreen extends BaseComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <SafeAreaView style={styles.rootView}>
        {this.renderStatusBar()}
        {this.renderGridView()}
      </SafeAreaView>
    )
  }

  renderHeader = () => {
    return(
      <View>
        <CustomText title={strings.all_categories}/>
      </View>
    );
  };

  renderGridView = () => {
    return (
      <FlatList
        data={DATA}
        renderItem={({ item }) => <CatalogItem title={item.title} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={this.renderHeader}
        horizontal={false}
        numColumns={3}
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
}

export default connect(
  (state, props) => ({
  }),
  dispatch => ({
  }),
)(CatalogScreen);
