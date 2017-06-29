import React, { Component } from 'react';
import { Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
// import { Card, Button } from 'react-native-material-design';
import { Card, Button, CardSection, Input, Spinner } from './common';

class SplashPage extends Component {
  onButtonPress() {
    Actions.auth();
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Text>
            Hello!
          </Text>
        </CardSection>

        <CardSection>
          <Button
            onPress={this.onButtonPress.bind(this)}>
              Sign In
          </Button>
        </CardSection>

      </Card>
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
