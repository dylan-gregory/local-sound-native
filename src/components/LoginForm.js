import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Container, Content, Card, CardItem } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }
  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }
  render() {
    return (
      <Container>
        <Content>
          <Card>

            <CardItem>
              <Input
                label="Email"
                placeholder="email@gmail.com"
                onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}
              />
            </CardItem>

            <CardItem>
              <Input
                secureTextEntry
                label="Password"
                placeholder="password"
                onChangeText={this.onPasswordChange.bind(this)}
                value={this.props.password}
              />
            </CardItem>

            <Text style={styles.errorTextStyle}>
              {this.props.error}
            </Text>

            <CardItem>
              {this.renderButton()}
            </CardItem>

            <Grid>
              <Row>
                <Text style={styles.paragraphText}>
                  Are you a musician?
                </Text>
              </Row>
              <Row>
                <Text style={styles.paragraphText}>
                   Songwriter?
                </Text>
              </Row>
              <Row>
                <Text style={styles.paragraphText}>
                   Producer?
                </Text>
              </Row>
              <Row>
                <Text style={styles.paragraphText}>
                   Tour manager?
                </Text>
              </Row>
            </Grid>

              <Text style={styles.accentText}>
                Local Sound is for YOU
              </Text>

          </Card>
        </Content>
      </Container>

    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  headerText: {
    flex: 1,
    fontFamily: 'Baksoda',
    fontSize: 50,
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15
  },
  paragraphText: {
    fontFamily: 'Ubuntu',
    fontSize: 16,
    marginLeft: 10
  },
  accentText: {
    flex: 1,
    fontFamily: 'Baksoda',
    fontSize: 45,
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15,
    lineHeight: 50
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser})(LoginForm);
