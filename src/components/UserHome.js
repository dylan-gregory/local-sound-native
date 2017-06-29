import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';

class UserHome extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Text>
            User Home, dude
          </Text>
        </CardSection>
      </Card>
    );
  }
}

export default UserHome;
