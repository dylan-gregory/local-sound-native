import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Header, Footer, FooterTab, Text, Card, CardItem, Left, Body, Icon, Thumbnail, Right, Form, Item, Input, Label } from 'native-base';
import { Button } from './common';

class UserInfo extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <Form>
              <Item floatingLabel>
                <Label>Name</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Number</Label>
                <Input />
              </Item>
              <Item floatingLabel last>
                <Label>sdgfsd</Label>
                <Input />
              </Item>
              <Button block type="submit" >
                <Text>Update</Text>
              </Button>
            </Form>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default UserInfo;
