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
      navigationBarStyle={{ backgroundColor: '#2AC4C0' }}
      barButtonIconStyle={{ tintColor: '#fff' }}
      rightButtonTextStyle={{ color: '#fff' }}
      titleStyle={{ color: 'black' }}

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
              style={{ height: 40, width: 150, alignSelf: 'center', marginTop: 20 }}
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
// seafoam: #2AC4C0****
// darker seafoam: #60FBDB
// yellow: #F0E5A6
// purple: #AF88D5
// pink: #FF4057
// peachy: FFAC81
// dark navy purple: #1E1F59
// lighter blue: #9EE4E2


// cream: #FAEFCC

export default RouterComponent;
