import React, { Component } from 'react';
import { Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
// import { Card, Button } from 'react-native-material-design';
import { Container, Content, Card, CardItem } from 'native-base';
import { Button, CardSection, Input, Spinner } from './common';

class SplashPage extends Component {
  onButtonPress() {
    Actions.auth();
  }
  render() {
    return (
      <Container>
        <Content>
          <Card>
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
