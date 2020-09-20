import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const {Value, event, block, cond, eq, set} = Animated;

export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      imageAnimation: new Animated.Value(0),
      buttonBoxAnimation: new Animated.Value(0),
    };
  }

  handleSignup = () => {
    console.log('signup pressed');
    Animated.timing(this.state.imageAnimation, {
      toValue: -200,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    Animated.timing(this.state.buttonBoxAnimation, {
      toValue: 250,
      duration: 1600,
      useNativeDriver: true,
    }).start();
  };

  render() {
    const animatedStyle = {
      transform: [
        {
          translateY: this.state.imageAnimation,
        },
      ],
    };

    const buttonBoxAnimatedStyle = {
      transform: [
        {
          translateY: this.state.buttonBoxAnimation,
        },
      ],
    };
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFill,
            ...animatedStyle,
          }}>
          <Image
            source={require('../assets/bg.jpg')}
            style={{flex: 1, height: null, width: null, ...styles.imageView}}
          />
        </Animated.View>
        <Animated.View
          style={{
            height: height / 3,
            justifyContent: 'center',
            ...buttonBoxAnimatedStyle,
          }}>
          <TouchableWithoutFeedback onPress={this.handleSignup}>
            <Animated.View style={{...styles.button}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>SIGN IN</Text>
            </Animated.View>
          </TouchableWithoutFeedback>
          <View style={{...styles.button, backgroundColor: '#2E71DC'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
              SIGN IN WITH FACEBOOK
            </Text>
          </View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: 'white',
    height: 70,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    marginVertical: 5,
  },
  imageView: {
    // borderBottomLeftRadius: 100,
    // borderRadius: 1000,
    // borderBottomRightRadius: 100,
    // borderTopRightRadius: 100,
    // borderColor: 'blue',
    // borderWidth: 5,
  },
});
