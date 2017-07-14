import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
// import { Card, Button } from 'react-native-material-design';
import { Container, Content, Card, CardItem, Left, Body, Thumbnail, Right } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Button, CardSection, Input, Spinner } from './common';

class Groups extends Component {
  render() {
    return (
    <Container>
      <Content>
        <Image source={require('../images/ethan-guitar.jpg')} style={{ height: 300, width: null, flex: 1 }} />
      </Content>
    </Container>

  )};
};

export default Groups;
