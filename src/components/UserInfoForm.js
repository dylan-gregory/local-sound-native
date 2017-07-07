import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import { userProfileCreate, userProfileUpdate, userProfileFetch } from '../actions';
import { Container, Content, Header, Footer, FooterTab, Text, Card, CardItem, Left, Body, Icon, Thumbnail, Right, Form, Item, Input, Label } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Button } from './common';

class UserInfoForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: this.props.name,
      phone: this.props.phone,
      bio: this.props.bio
    };

    console.log('state', this.state);
    console.log('picker', ImagePicker);

  }
  // componentWillMount() {
  //   this.props.userProfileFetch();
  // }
  // componentWillReceiveProps(nextProps) {
  //   console.log('NextProps', nextProps);
  //
  // }
  uploadPic(){

    const options = {
      title: 'Select Avatar',
      customButtons: [
        {name: 'fb', title: 'Choose Photo from Facebook'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
      }
    });
  }
  onButtonPress() {
    // const { name, phone, bio } = this.props;
    // this.props.userProfileUpdate({ prop: 'name', value: this.state.name });
    this.props.userProfileCreate(this.state);
  }
  render() {

    console.log('props', this.state);
    return (
      <Container>
        <Content>
          <Card>

            <CardItem header>
              <Text>Personal Info:</Text>
            </CardItem>

              <Form>
                <Item floatingLabel>
                  <Label>Name</Label>
                  <Input
                    onChangeText={(text) => this.setState({ name: text })}
                    value={this.state.name}
                  />
                </Item>
                <Item floatingLabel>
                  <Label>Number</Label>
                  <Input
                    value={this.state.phone}
                    onChangeText={(text) => this.setState({ phone: text })}
                  />
                </Item>
                <Item floatingLabel last regular>
                  <Label>Tell us about yourself...</Label>
                  <Input
                    value={this.state.bio}
                    onChangeText={(text) => this.setState({ bio: text })}
                  />
                </Item>

                <Button onPress={this.uploadPic.bind(this)}>
                  <Text>Upload photo?</Text>
                </Button>

                <Button onPress={this.onButtonPress.bind(this)} >
                  <Text>Update</Text>
                </Button>
              </Form>
            </Card>

            <Card>
              <CardItem>
                <Text>{"What kind of music are you trying to play?"}</Text>
              </CardItem>
            </Card>

            <Grid>
              <Col>
                <Button>
                  <Text>Rock</Text>
                </Button>
                <Button>
                  <Text>Pop</Text>
                </Button>
                <Button>
                  <Text>Country</Text>
                </Button>
                <Button>
                  <Text>Ambient</Text>
                </Button>
                <Button>
                  <Text>Bluegrass</Text>
                </Button>
              </Col>

              <Col>
                <Button>
                  <Text>R&B</Text>
                </Button>
                <Button>
                  <Text>Motown</Text>
                </Button>
                <Button>
                  <Text>Jazz</Text>
                </Button>
                <Button>
                  <Text>Dance</Text>
                </Button>
                <Button>
                  <Text>Hip-Hop</Text>
                </Button>
              </Col>
            </Grid>

        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, bio } = state.profileInfo;

  return { name, phone, bio };
};

export default connect(mapStateToProps, { userProfileCreate, userProfileUpdate, userProfileFetch })(UserInfoForm);
