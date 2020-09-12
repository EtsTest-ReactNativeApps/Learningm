import React from 'react';
import { StyleSheet, View } from 'react-native';
import {StatusBar} from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LandingPage from './Screens/LandingPage';
import LoginOptionPage from './Screens/LoginOptionPage';
import LoginPage from './Screens/LoginPage';
import UserHome from './Screens/UserHome';
import RegisterPage from './Screens/Registerpage';
import RegisterOptionPage from './Screens/RegisterOptionPage';
import LanguagePage from './Screens/LanguagePage';
import {store} from './store';
import {Provider} from 'react-redux'
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator()
export default function App() {
  return (
    <AppProvider/>
  );
}


function AppProvider() {
  return (
    <Provider store={store}>
        <NavigationContainer>
            <View style={styles.container}>
                <StatusBar/>
                  <Stack.Navigator headerMode="none" mode="card" screenOptions="" >
                    <Stack.Screen
                      name="LandingPage"
                      component={LandingPage}
                    />
                    <Stack.Screen
                      name="RegisterOption"
                      component={RegisterOptionPage}
                    />

                    <Stack.Screen
                      name="LoginOptionPage"
                      component={LoginOptionPage}
                      
                    />
                    <Stack.Screen
                      name="LoginPage"
                      component={LoginPage}
                      
                    />
                    <Stack.Screen
                      name="Language"
                      component={LanguagePage}
                    />
                    <Stack.Screen
                      name="RegisterPage"
                      component={RegisterPage}
                      
                    />
                    <Stack.Screen
                    name="UserHome"
                    component={UserHome}
                    />
                  </Stack.Navigator>
                  {/* <Drawer.Navigator>
                    <Drawer.Screen 
                      name="UserHome"
                      component={UserHome}
                    />
                  </Drawer.Navigator> */}
            </View>
        </NavigationContainer>
    </Provider>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
