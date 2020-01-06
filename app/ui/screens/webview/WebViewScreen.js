import React from 'react'
import {StatusBar, View, ScrollView} from 'react-native';
import BaseComponent from '../../base/BaseComponent';
import {SafeAreaView} from "react-navigation";
import styles from './style';
import colors from '../../../colors';
import {connect} from 'react-redux';
import { WebView } from 'react-native-webview';
import BaseApi from '../../../network/BaseApi';
import axios from 'axios';
import HTMLParser from 'fast-html-parser'

class WebViewScreen extends BaseComponent {
  static navigationOptions = {
    header: null,
  };

  componentDidMount(): void {
    // axios
    //   .get('https://amazon.com')
    //   .then(response => {
    //     if (response.status === 200) {
    //       const html = response.data;
    //       console.warn(html)
    //
    //       this.setState({
    //         html: html
    //       })
    //     }
    //   });

    fetch('https://amazon.com', {
      method: 'GET',
      headers: {
        Accept: 'text/html',
        'Content-Type': 'text/html',
      },
    })
      .then(response => response.text())
      .then(text => {
        var root = HTMLParser.parse(text);
        this.setState({
          html: text,
        })
      })
  }

  constructor(props) {
    super(props);
    this.state = {
      html: '',
    }
  }

  render() {
    return(
      <SafeAreaView style={styles.rootView}>
        {this.renderStatusBar()}
        {this.renderWebView()}
      </SafeAreaView>
    )
  }

  renderWebView = () => {
    return(
      <WebView source={{ uri: 'https://amazon.com'}} />
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
)(WebViewScreen);
