import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyC1_JAASbJ9Deaut8Zi99-BpJZpfhO_PHc',
      authDomain: 'employee-manager-374f5.firebaseapp.com',
      databaseURL: 'https://employee-manager-374f5.firebaseio.com',
      storageBucket: 'employee-manager-374f5.appspot.com',
      messagingSenderId: '1067290929534'
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
