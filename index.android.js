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
	Navigator,
	TouchableHighlight
} from 'react-native';

import Main from './components/main';

const routeMapper = {
	LeftButton: (route, navigator, index, navState) => {
		if (index === 0) return null;

		const prevRoute = navState.routeStack[index - 1];
		return (
			<TouchableHighlight 
				onPress={() => navigator.pop()} >
				<Text>{prevRoute.title}</Text>
			</TouchableHighlight>
		);
	},
	
	RightButton: (route, navigator, index, navState) => {
		return <Text>Forward</Text>;
	},

	Title: (route, navigator, index, navState) => {
		return <Text>{route.title}</Text>;
	}
}

class justrun extends Component {
	renderScene(route, navigator) {
		return (
				<route.component 
					navigator={navigator} 
					{...route.passProps} 
				/>
		);
	}

  render() {
    return (
			<Navigator
		    style={{flex: 1}}
        initialRoute={{
          title: 'Just Run',
          component: Main
        }}
				renderScene={this.renderScene}
				navigationBar={
					<Navigator.NavigationBar routeMapper={routeMapper}/>
				}
			/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('justrun', () => justrun);
