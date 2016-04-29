/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
	Navigator
} from 'react-native';

import Main from './components/main';

class justrun extends Component {
	renderScene(route, navigator) {
		return (
				<route.component 
					navigator={navigator} 
					{...route.passProps} />
		);
	}
  
	render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{
          name: 'Just Run',
          component: Main
        }}
				renderScene={this.renderScene}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  }
});

AppRegistry.registerComponent('justrun', () => justrun);
