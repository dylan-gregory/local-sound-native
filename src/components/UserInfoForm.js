import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { userProfileCreate, userProfileUpdate, userProfileFetch } from '../actions';
import { Container, Content, Header, Footer, FooterTab, Text, Card, CardItem, Left, Body, Icon, Thumbnail, Right, Form, Item, Input, Label } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Button } from './common';

class UserInfoForm extends Component {
  constructor(props){
    super(props);

  }
  componentWillMount() {
    this.props.userProfileFetch();
  }
  componentWillReceiveProps(nextProps) {
    console.log('NextProps', nextProps);
    // this.createDataSource(nextProps);
  }
  // createDataSource({ stuff }) {
  //   console.log('stuff', stuff);
  //
  //   const ds = new ListView.DataSource({
  //     rowHasChanged: (r1, r2) => r1 !== r2
  //   });
  //
  //   this.dataSource = ds.cloneWithRows(stuff);
  // }
  onButtonPress() {
    const { name, phone, bio } = this.props;

    this.props.userProfileCreate({ name, phone, bio });
  }
  render() {

    console.log('props', this.props.userProfileCreate);
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
                    type="text"

                    onChangeText={(text) => this.props.userProfileUpdate({ prop: 'name', value: text })}
                    value={this.props.name}
                  />
                </Item>
                <Item floatingLabel>
                  <Label>Number</Label>
                  <Input
                    type="text"
                    value={this.props.phone}
                    onChangeText={(text) => this.props.userProfileUpdate({ prop: 'phone', value: text })}
                  />
                </Item>
                <Item floatingLabel last regular>
                  <Label>Tell us about yourself...</Label>
                  <Input
                    type="text"
                    value={this.props.bio}
                    onChangeText={(text) => this.props.userProfileUpdate({ prop: 'bio', value: text })}
                  />
                </Item>

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
  const { name, phone, bio } = state.userProfileInfo;

  return { name, phone, bio };
};

export default connect(mapStateToProps, { userProfileCreate, userProfileUpdate, userProfileFetch })(UserInfoForm);
