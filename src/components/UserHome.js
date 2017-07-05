import React, { Component } from 'react';
import { Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Container, Content, Header, Footer, FooterTab, Button, Text, Card, CardItem, Left, Body, Icon, Thumbnail, Right } from 'native-base';
import { userProfileFetch } from '../actions';
// import { Card, CardSection, Input, Spinner } from './common';

class UserHome extends Component {
  componentWillMount() {

    this.props.userProfileFetch();

    this.createDataSource(this.props);
  }
  componentWillReceiveProps(nextProps) {

    this.createDataSource(nextProps);
  }
  createDataSource({ stuff }) {
    console.log('stuff', stuff);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(stuff);
  }
  onButtonPress() {
    Actions.user_info();
  }
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail square size={50} source={require( '../images/horseshoe.png')} />
                <Body>
                  <Text>My stuff</Text>
                  <Text note>For real, it's mine</Text>
                </Body>
              </Left>
              <Right>
                <Button onPress={this.onButtonPress.bind(this)}>
                  <Text>Edit</Text>
                </Button>
              </Right>
            </CardItem>
            <CardItem carBody>
              <Image source={require('../images/waves.jpeg')} style={{ height: 220, width: null, flex: 1 }} />
            </CardItem>
          </Card>

        </Content>
        <Footer>
          <FooterTab>
            <Button>
              <Text>App</Text>
            </Button>
            <Button>
              <Text>Social</Text>
            </Button>
            <Button>
              <Text>People</Text>
            </Button>
            <Button active>
              <Text>Music</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
      // <Card>
      //   <CardSection>
      //     <Text>
      //       User Home, dude
      //     </Text>
      //   </CardSection>
      // </Card>
    );
  }
}

const mapStateToProps = state => {
  const stuff = _.map(state.stuff, (val, uid) => {
      return { ...val, uid };
    });

  return { stuff };
};

export default connect(null, { userProfileFetch })(UserHome);
