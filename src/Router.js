import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import SplashPage from './components/SplashPage';
import LoginForm from './components/LoginForm';
import UserHome from './components/UserHome';

const RouterComponent = () => {
  return(
    <Router
      sceneStyle={{ paddingTop: 65, backgroundColor: '#333'}}
      navigationBarStyle={{ backgroundColor: '#FAEFCC' }}
      barButtonIconStyle={{ tintColor: '#333' }}
      rightButtonTextStyle={{ color: '#333' }}
    >
      <Scene key="main">
        <Scene
          key="splash"
          component={SplashPage}
          title="Local Sound"
          titleStyle={{ fontFamily: 'Baskerville' }}
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
          key="user-home"
          component={UserHome}
          title="User Home"
          initial
        />
      </Scene>



    </Router>
  );
};


// COLORS:
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
export default RouterComponent;
