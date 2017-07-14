import React, { Component } from 'react';
import { Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import OtherIcon from 'react-native-vector-icons/MaterialIcons'
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
          <Image source={require('../images/jesse-bass.jpg')} style={{ height: 300, width: null, flex: 1 }} />
          <Card>
            <CardItem>
              <Left>
                <Thumbnail round size={50} source={{ uri: this.props.uploadURL}} />
                <Body>
                  <Text style={styles.textStyle}>{this.props.name}</Text>
                  <Text style={styles.textStyle} note>Home</Text>
                </Body>
              </Left>
              <Right>
                <Button style={styles.roundButton} onPress={this.onButtonPress.bind(this)}>

                    <OtherIcon name="settings" size={25} color="#333" />

                </Button>
              </Right>
            </CardItem>
            <CardItem>

              { this.props.name !== null ?
                <Text style={styles.textStyle}>
                  Name:{this.props.name}
                </Text> : null }

            </CardItem>
            <CardItem>

              { this.props.phone !== null ?
                <Text style={styles.textStyle}>
                  Phone:{this.props.phone}
                </Text> : null }

            </CardItem>
            <CardItem>

              { this.props.bio !== null ?
                <Text style={styles.textStyle}>
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

            <Button style={styles.footerButtonActive}>
              <Icon name="home" size={25} color="#fff" />
            </Button>
            <Button style={styles.footerButton}>
              <Icon name="search" size={25} color="#fff" />
            </Button>
            <Button style={styles.footerButton}>
              <Icon name="group" size={25} color="#fff" />
            </Button>
            <Button style={styles.footerButton}>
              <OtherIcon name="message" size={25} color="#fff" />
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
  },
    footerButton: {
      flex: 1,
      alignSelf: 'stretch',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#333',
      overflow: 'hidden',
    },
    footerButtonActive: {
      flex: 1,
      alignSelf: 'stretch',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#2AC278',
      overflow: 'hidden',
    },
    textStyle: {
      fontFamily: 'Ubuntu'
    }
};

const mapStateToProps = state => {
  const { name, phone, bio, uploadURL, location, genreArray, instrumentArray } = state.profileInfo;

  return { name, phone, bio, uploadURL, location, genreArray, instrumentArray };

};

export default connect(mapStateToProps, { userProfileFetch, logoutUser })(UserHome);
