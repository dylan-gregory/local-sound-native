import React, { Component } from 'react';
import _ from 'lodash';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { userProfileCreate, userProfileUpdate, addGenre } from '../actions';
import { Container, Content, Header, Footer, FooterTab, Text, Card, CardItem, Left, Body, Icon, Thumbnail, Right, Form, Item, Input, Label } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Button } from './common';
import UserInfoForm from './UserInfoForm';

class UserInfo extends Component {
  componentWillMount() {
    // _.each(this.props, (value, prop) => {
    //   this.props.userProfileUpdate({ prop, value });
    // });
    // this.state = {
    //   name: this.props.name,
    //   phone: this.props.phone,
    //   bio: this.props.bio
    // };
    // console.log('what', this.props);
  }
  render() {
    return (
      <Container>
        <Content>
          <UserInfoForm {...this.props} />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, bio, uploadURL, location, genreArray, instrumentArray } = state.profileInfo;

  return { name, phone, bio, uploadURL, location, genreArray, instrumentArray };
};

export default connect(mapStateToProps, { userProfileUpdate, userProfileCreate, addGenre })(UserInfo);
