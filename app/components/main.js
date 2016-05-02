import React, {
  StyleSheet,
  View,
  Text,
  Component,
  TouchableHighlight
} from 'react-native';

import Start from './start';
import styles from '../assets/styles';

export default class Main extends Component {
  goToStart() {
    this.props.navigator.push({
      component: Start,
      title: 'Run'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcome}>
          <Text>
            Welcome to Just Run!
          </Text>
        </View>
        <TouchableHighlight
          style={styles.button}
          onPress={this.goToStart.bind(this)}>
          <Text style={styles.buttonText}>
            Run
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>
            Stats
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
