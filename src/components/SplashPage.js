import React, { Component } from 'react';
import { Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Button, Spinner } from './common';

class SplashPage extends Component {
  onButtonPress() {
    Actions.
  }
  render() {
    return (
      <Card>
        <Text>
          Hello!
        </Text>

        <Button onPress={this.onButtonPress.bind(this)}>
          Login?
        </Button>
      </Card>
    );
  }
}

export default SplashPage;
