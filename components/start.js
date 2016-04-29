'use strict';

import React, {
	Component,
	View,
	Text,
	TouchableHighlight
} from 'react-native';

import Run from './run';
import styles from '../assets/styles';

export default class Start extends Component {
	constructor(props) {
		super(props);
		this.state = {
			position: null
		};
	}

	watchID = (null: ?number)

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(
			pos => this.setState({ position: pos }), 
			err => alert(err),
			{enableHighAccuracy: true, maximumAge: 1000, timeout: 20000}
		);

		this.watchID = navigator.geolocation.watchPosition(
			pos => this.setState({ position: pos }),
			err => alert(err),
			{enableHighAccuracy: true, maximumAge: 1000, timeout: 20000}
		);
	}

	componentWillUnmount() {
		navigator.geolocation.clearWatch(this.watchID);
	}

	showPosition() {
		let pos = this.state.position;
		return pos ? `${pos.coords.latitude}, ${pos.coords.longitude}` : '';
	}

	goToRun() {
		this.props.navigator.push({
			component: Run,
			title: 'Run'
		});
	}

	render() {
		return (
			<View style={styles.container} >
				<Text>This is where you are:</Text>
				<Text>{this.showPosition()}</Text>
				<TouchableHighlight 
					style={styles.button}
					onPress={this.goToRun.bind(this)}>
					<Text>Go</Text>
				</TouchableHighlight>
			</View>
		);
	}
}
