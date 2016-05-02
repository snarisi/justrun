import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  container: {
		paddingTop: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    backgroundColor: 'black',
    margin: 10,
    padding: 40,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30
  },
  welcome: {
    flex: 3,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
