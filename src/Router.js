import React, { Component } from 'react';
import { Image } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import SplashPage from './components/SplashPage';
import LoginForm from './components/LoginForm';
import UserHome from './components/UserHome';
import UserInfo from './components/UserInfo';
import Groups from './components/Groups';

// {<Image style={styles.logoStyle} source={require('./images/local-sound-ls.png')} />}

const RouterComponent = () => {
  return(
    <Router
      sceneStyle={{ paddingTop: 65, backgroundColor: '#333'}}
      navigationBarStyle={{ backgroundColor: '#2AC4C0', justifyContent: 'center' }}
      barButtonIconStyle={{ tintColor: '#fff' }}
      rightButtonTextStyle={{ color: '#fff' }}
      titleStyle={{ color: '#fff', fontFamily: 'Ubuntu', justifyContent: 'center' }}

    >

            {/* add this prop to the scene to change the header font
            titleStyle={{ fontFamily: 'Baskerville' }}
            */}
      <Scene key="main">
        <Scene
          key="splash"
          component={SplashPage}
          title="Local Sound"
          renderTitle={() =>
            <Image
              source={require('./images/local-sound-words.png')}
              style={{ height: 40, width: 150, alignSelf: 'center', marginBottom: -15 }}
            /> }
          initial
        />
        <Scene
          key="auth"
          component={LoginForm}
          title="Login"
        />
      </Scene>

      <Scene key="user_main">
        <Scene
          key="user_home"
          component={UserHome}
          title="Home"
          initial
        />
        <Scene
          key="user_info"
          component={UserInfo}
          title="Profile Info"
        />
      </Scene>

      <Scene
        key="groups"
        component={Groups}
        title="Groups"
      />



    </Router>
  );
};

const styles = {
  logoStyle: {
    height: 10,
    width: 10
  }
};


// COLORS:
// seafoam: #B2FFD6****
// darker seafoam: #60FBDB
// yellow: #F2F19D
// purple: #AF88D5
// pink: #FF4057
// peachy: FFAC81




// cream: #FAEFCC
// off black: #333
// peachy: #DB6F59
// light peachy: #FEE0D5
// yellowy peach: #F8AA84
// brownish peach: #DB995A
// tealy: #00A5A5
// lighter teal: #79D2CA
// purpley: #576AAC
// magenta-y: #AF506C
// navy: #354370
// maroon: #590925

// purpley: #576AAC
// different purple #5D5D81
// darker purple #3B3355
// light blue #BFCDE0
// white-ish mint #F4F9E9
// dark grey #B4B8AB
// dark mint #71B48D
// gold #FFC857
export default RouterComponent;
