import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
// import { Card, Button } from 'react-native-material-design';
import { Container, Content, Card, CardItem, Left, Body, Thumbnail, Right } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
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
                  <Grid>
                    <Col>
                      <Button
                        onPress={this.onButtonPress.bind(this)}>
                          Log In
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        onPress={this.onButtonPress.bind(this)}>
                          Sign Up
                      </Button>
                    </Col>
                  </Grid>


                </View>
              </Image>

          <Card>

            <Text style={styles.headerText}>
              What is Local Sound?
            </Text>

            <CardSection>
              <Grid>
                <Row>
                  <Text style={styles.paragraphText}>
                    Local sound is you.
                  </Text>
                </Row>
                <Row>
                  <Text style={styles.paragraphText}>
                    Your band.
                  </Text>
                </Row>
                <Row>
                  <Text style={styles.paragraphText}>
                    Your friends.
                  </Text>
                </Row>
                <Row>
                  <Text style={styles.paragraphText}>
                    Your music.
                  </Text>
                </Row>
              </Grid>

            </CardSection>
            <CardSection>
              <Text style={styles.accentText}>
                It's the sound of your city.
              </Text>
            </CardSection>

          </Card>

        </Content>
      </Container>

    );
  }
}

const styles = {
  backdrop: {
    flex: 1,
    paddingTop: 435,
    width: null,
    height: 600,
    alignItems: 'center',
    marginTop: 5
  },
  backdropView: {
    // justifyContent: 'center',
    padding: 5,
    paddingTop: 12,
    height: 130,
    width: 360,
    // alignItems: 'center',
    // backgroundColor: 'rgba(80,80,80,0.8)',
    backgroundColor: 'rgba(255,172,129,0.8)',
    borderRadius: 5
  },
  headline: {
    flex: 1,
    fontFamily: 'GlossAndBloom',
    lineHeight: 60,
    // justifyContent: 'center',
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#F4F9E9'
  },
  headerText: {
    flex: 1,
    fontFamily: 'GlossAndBloom',
    fontSize: 25,
    lineHeight: 45,
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15
  },
  paragraphText: {
    // fontFamily: 'Raleway',
    fontSize: 16,
    marginLeft: 10
  },
  accentText: {
    flex: 1,
    fontFamily: 'GlossAndBloom',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15,
    lineHeight: 50
  }
};

export default SplashPage;


// The ONLY color names that can be passed into RNMUI overrides:

// "googleBlue", "googleGreen", "googleGrey", "googleRed", "googleYellow", "paperAmber",
//   "paperBlue", "paperBlueGrey", "paperBrown", "paperCyan", "paperDeepOrange", "paperDeepPurple", "paperGreen",
//   "paperGrey", "paperIndigo", "paperLightBlue", "paperLightGreen", "paperLime", "paperOrange", "paperPink",
//   "paperPurple", "paperRed", "paperTeal", "paperYellow"
