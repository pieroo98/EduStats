import React from 'react';
import {StyleSheet, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import ForgotPass from './screens/ForgotPass';
import NewAccount from './screens/NewAccount';
import Settings from './screens/Settings';
import HomePage from './screens/HomePage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

function Navigation() {
    const navigation = useNavigation();

    const renderL = () => (
        <TouchableOpacity
            onPress={() => navigation.navigate('settings',{username: 'ciao'})}
            style={{ marginLeft: 20, marginTop: 0 }}>
            <Icon name="cog" type="font-awesome" size={30} color="white" />
        </TouchableOpacity>
    );
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
                  },headerTintColor: '#5271ff',headerLeft: null}}
            />

            <Stack.Screen
                name="forgotpass"
                component={ForgotPass}
                options={{ headerTitleAlign: 'center',  headerStyle: {
                    backgroundColor: '#5271ff',
                    shadowColor: 'white',
                    elevation: 0,
                  },headerTintColor: '#5271ff',headerLeft: null}}
            />

            <Stack.Screen
                name="newaccount"
                component={NewAccount}
                options={{ headerTitleAlign: 'center',  headerStyle: {
                    backgroundColor: '#5271ff',
                    shadowColor: 'white',
                    elevation: 0,
                  },headerTintColor: '#5271ff',headerLeft: null}}
            />

            <Stack.Screen
                name="settings"
                component={Settings}
                options={{ headerTitleAlign: 'center',  headerStyle: {
                    backgroundColor: 'white',
                    shadowColor: 'white',
                    elevation: 0,
                  },headerTintColor: 'white',headerLeft: null}}
            />
            
            <Stack.Screen
                name="GraduStats"
                component={HomePage}
                options={{ headerTitleAlign: 'center',  headerStyle: {
                    backgroundColor: '#5271ff',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    elevation: 0,
                  },headerTintColor: 'white',headerLeft: renderL}}
            />
        </Stack.Navigator>
    );
}

export default Navigation;