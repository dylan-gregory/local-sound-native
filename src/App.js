import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import { Container, Content, Footer, FooterTab, Button, Text } from 'native-base';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: "AIzaSyBlVcM8XYMb9B1PMFEeKlIkSnENnhosenI",
    authDomain: "local-sound-28e64.firebaseapp.com",
    databaseURL: "https://local-sound-28e64.firebaseio.com",
    projectId: "local-sound-28e64",
    storageBucket: "gs://local-sound-28e64.appspot.com",
    messagingSenderId: "763062690386"
  };
  firebase.initializeApp(config);

  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
