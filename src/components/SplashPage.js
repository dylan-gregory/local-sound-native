import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
// import { Card, Button } from 'react-native-material-design';
import { Container, Content, Card, CardItem, Left, Body, Thumbnail, Right } from 'native-base';
import { Button, CardSection, Input, Spinner } from './common';

class SplashPage extends Component {
  onButtonPress() {
    Actions.auth();
  }
  render() {
    return (
      <Container>
        <Content>


              <Image source={require('../images/preston-guitar.jpg')}
                style={styles.backdrop}>
                <View style={styles.backdropView}>
                  <Text style={styles.headline}>
                    Let's make some noise
                  </Text>
                </View>
              </Image>



          <Card>
            <Text>
              Are you a musician? A song writer? A producer? A tour manager?
            </Text>
            <Text>
              Local Sound
            </Text>
            <Text>
              is for YOU
            </Text>

            <CardItem>
              <Text>
                Hello!
              </Text>
            </CardItem>

            <CardItem>
              <Button
                onPress={this.onButtonPress.bind(this)}>
                  Sign In
              </Button>
            </CardItem>

          </Card>
        </Content>
      </Container>

    );
  }
}

const styles = {
  backdrop: {
    flex: 1,
    paddingTop: 420,
    width: null,
    height: 600,
    alignItems: 'center',
    marginTop: 5
  },
  backdropView: {
    height: 120,
    width: 320,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  headline: {
    flex: 1,
    fontFamily: 'Baksoda',
    fontSize: 50,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white'
  },
  noise: {
    flex: 1,
    fontFamily: 'Baksoda',
    fontSize: 50,
    textAlign: 'center',
    color: '#333',
  }
};

export default SplashPage;


// Button props:
// overrides={{ backgroundColor: 'paperIndigo', textColor: 'paperAmber' }}
// raised={true}
// text="Login"

// The ONLY color names that can be passed into RNMUI overrides:

// "googleBlue", "googleGreen", "googleGrey", "googleRed", "googleYellow", "paperAmber",
//   "paperBlue", "paperBlueGrey", "paperBrown", "paperCyan", "paperDeepOrange", "paperDeepPurple", "paperGreen",
//   "paperGrey", "paperIndigo", "paperLightBlue", "paperLightGreen", "paperLime", "paperOrange", "paperPink",
//   "paperPurple", "paperRed", "paperTeal", "paperYellow"
