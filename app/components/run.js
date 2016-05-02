'use strict';

import React, {
  Component,
  View,
  Text,
  StyleSheet,
  MapView,
  TouchableHighlight
} from 'react-native';

import { getDistance } from 'geolib';
import styles from '../assets/styles';

export default class Run extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: null,
      lastPosition: null,
      distance: 0,
      time: 0
    }
    this.timerInterval = null;
    this.active = false;
  }

  watchID = (null: ?number)

  componentDidMount() {
    this.toggleClock();
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          currentPosition: position,
          lastPosition: position
        });
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );

    this.watchID = navigator.geolocation.watchPosition(position => {
      this.setState({
        lastPosition: this.state.currentPosition,
        currentPosition: position,
        distance: this.active ? this.calculateDistance() : this.state.distance
      })
    })
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  calculateDistance() {
    if (!this.state.currentPosition || !this.state.lastPosition) {
          return this.state.distance;
    }

    let newDistance = getDistance(
      {
        latitude: this.state.currentPosition.coords.latitude,
        longitude: this.state.currentPosition.coords.longitude
      },
      {
        latitude: this.state.lastPosition.coords.latitude,
        longitude: this.state.lastPosition.coords.longitude
      }
    );
    newDistance = newDistance / 1609.344;
    return this.state.distance + newDistance;
  }

  toggleClock() {
    if (!this.active) {
      this.timerInterval = setInterval(() => {
        this.setState({ time: this.state.time + 1 });
      }, 1000);
    } else {
      clearInterval(this.timerInterval);
    }
    this.active = !this.active;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Here is where you track a run</Text>
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            Total Distance: {this.state.distance.toFixed(2)}
          </Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            Total Seconds: {this.state.time}
          </Text>
        </View>
        <TouchableHighlight
          style={styles.button}
          onPress={this.toggleClock.bind(this)}>
          <Text style={styles.buttonText}>
            {this.active ? 'Pause' : 'Start'}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
