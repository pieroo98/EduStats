import React from 'react';
import {StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import ForgotPass from './screens/ForgotPass';
import NewAccount from './screens/NewAccount';

const Stack = createStackNavigator();

function Navigation() {
    return (
        <Stack.Navigator
         initialRouteName={"login"}
         >
            <Stack.Screen
                name="login"
                component={Login}
                options={{ headerTitleAlign: 'center',  headerStyle: {
                    backgroundColor: '#5271ff',
                    shadowColor: 'white',
                    elevation: 0,
                  },headerTintColor: '#5271ff',}}
            />

            <Stack.Screen
                name="forgotpass"
                component={ForgotPass}
                options={{ headerTitleAlign: 'center',  headerStyle: {
                    backgroundColor: '#5271ff',
                    shadowColor: 'white',
                    elevation: 0,
                  },headerTintColor: '#5271ff',}}
            />

            <Stack.Screen
                name="newaccount"
                component={NewAccount}
                options={{ headerTitleAlign: 'center',  headerStyle: {
                    backgroundColor: '#5271ff',
                    shadowColor: 'white',
                    elevation: 0,
                  },headerTintColor: '#5271ff',}}
            />
            
        </Stack.Navigator>
    );
}

export default Navigation;