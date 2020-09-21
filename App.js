import React from 'react';
import {store} from './store';
import {Provider} from 'react-redux';
import NavigationPage from './Screens/NavigationPage';


export default function App() {
  return (
    <Provider store={store}>
        <NavigationPage/>
    </Provider>
  )
}

