import React, { Component } from 'react';
import { Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Content, Header, Footer, FooterTab, Text, CardItem, Left, Body, Thumbnail, Right } from 'native-base';
import { userProfileFetch, logoutUser } from '../actions';
import { Card, CardSection, Button, Spinner } from './common';

class UserHome extends Component {
  componentWillMount() {

      console.log('these', this.props);

    this.props.userProfileFetch();
    //
    // this.createDataSource(this.props);
  }
  // componentWillReceiveProps(nextProps) {
  //
  //   console.log('nextProps', nextProps);
  //
  // }
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
    Actions.user_info();
  }
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail round size={50} source={{ uri: this.props.uploadURL}} />
                <Body>
                  <Text>My stuff</Text>
                  <Text note>For real, it's mine</Text>
                </Body>
              </Left>
              <Right>
                <Button style={styles.roundButton} onPress={this.onButtonPress.bind(this)}>

                    <Icon name="edit" size={25} color="#333" />

                </Button>
              </Right>
            </CardItem>
            <CardItem carBody>
              <Image source={require('../images/waves.jpeg')} style={{ height: 220, width: null, flex: 1 }} />
            </CardItem>
            <CardItem>

              { this.props.name !== null ?
                <Text>
                  Name:{this.props.name}
                </Text> : null }

            </CardItem>
            <CardItem>

              { this.props.phone !== null ?
                <Text>
                  Phone:{this.props.phone}
                </Text> : null }

            </CardItem>
            <CardItem>

              { this.props.bio !== null ?
                <Text>
                  Bio:{this.props.bio}
                </Text> : null }

            </CardItem>

            <CardItem>
              <Button onPress={this.props.logoutUser}>
                <Text>Log Out</Text>
              </Button>
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

    );
  }
}

const styles = {
  roundButton: {
    flex: 1,
    // flexDirection: 'column',
    // alignSelf: 'stretch',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#AF506C',
    borderRadius: 30,
    margin: 6,
    paddingHorizontal: 10,
    paddingTop: 5,
    overflow: 'hidden',
    // paddingVertical: 5,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 0
    }
  }
};

const mapStateToProps = state => {
  const { name, phone, bio, uploadURL, location, genreArray, instrumentArray } = state.profileInfo;

  return { name, phone, bio, uploadURL, location, genreArray, instrumentArray };

};

export default connect(mapStateToProps, { userProfileFetch, logoutUser })(UserHome);
