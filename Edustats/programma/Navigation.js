import React from 'react';
import {StyleSheet, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './screens/Login';
import ForgotPass from './screens/ForgotPass';
import NewAccount from './screens/NewAccount';
import Settings from './screens/Settings';
import HomePage from './screens/HomePage';
import Statistic from './screens/Statistic';
import Esami from './screens/Esami';
import UserInfo from './screens/UserInfo';
import AddExam from './screens/AddExam';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Start() {
    const navigation = useNavigation();

    const renderL = () => (
        <TouchableOpacity
            onPress={() => navigation.navigate('settings',{username: 'ciao'})}
            style={{ marginLeft: 20, marginTop: 0 }}>
            <Icon name="cog" type="font-awesome" size={30} color="white" />
        </TouchableOpacity>
    );
    return (
        <Tab.Navigator initialRouteName={"GraduStats"} screenOptions={{ TabBarActiveTintColor: '#1976D2', tabBarStyle: {backgroundColor: '#F0F7FD', borderTopLeftRadius: 20, borderTopRightRadius:20}, }} >
            <Tab.Screen
            name="GraduStats"
            component={HomePage}
            options={{headerTitleAlign: 'center',  headerStyle: {
                backgroundColor: '#5271ff',
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                elevation: 0,
                },headerTintColor: 'white',headerLeft: renderL,tabBarShowLabel: false,
                tabBarIcon: ({ color, size }) => (
                <Icon name="home" type="font-awesome" size={size} color={color} />
                ),
            }}
            />
            <Tab.Screen
            name="Esami"
            component={Esami}
            options={{headerTitleAlign: 'center',  headerStyle: {
                backgroundColor: '#5271ff',
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                elevation: 0,
              },headerTintColor: 'white',tabBarShowLabel: false,
                tabBarIcon: ({ color, size }) => (
                <Icon name="bookmark" type="font-awesome" size={size} color={color} />
                ),
            }}
            />
            <Tab.Screen
            name="NewExam"
            component={AddExam}
            options={{headerTitleAlign: 'center',  headerStyle: {
                backgroundColor: '#5271ff',
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                elevation: 0,
              },headerTintColor: 'white',tabBarShowLabel: false,
                tabBarIcon: ({ color, size }) => (
                    <View style={{ position: 'absolute',paddingBottom: 17, }}>
                    <View style={{ backgroundColor: 'white', borderRadius: 100, marginBottom: 55, width:70, height:70 }}>
                    <View style={{ backgroundColor: '#F0F7FD', borderRadius: 100, width:45, height:45, marginLeft: 13, marginTop:15 }}>
                        <Icon name="plus" type="font-awesome" size={size} color={color} style={{paddingLeft:13, paddingTop:10}} />
                        </View>
                    </View>
                </View>
                ),
            }}
            />
            <Tab.Screen
            name="Statistic"
            component={Statistic}
            options={{headerTitleAlign: 'center',  headerStyle: {
                backgroundColor: '#5271ff',
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                elevation: 0,
              },headerTintColor: 'white',tabBarShowLabel: false,
                tabBarIcon: ({ color, size }) => (
                <Icon name="bar-chart" type="font-awesome" size={size} color={color} />
                ),
            }}
            />
            <Tab.Screen
            name="User"
            component={UserInfo}
            options={{headerTitleAlign: 'center',  headerStyle: {
                backgroundColor: '#5271ff',
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                elevation: 0,
              },headerTintColor: 'white',tabBarShowLabel: false,
                tabBarIcon: ({ color, size }) => (
                <Icon name="user" type="font-awesome" size={size} color={color} />
                ),
            }}
            />
        </Tab.Navigator>
    )
}

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
                component={Start}
                options={{
                    headerShown: false, 
                }}
            />
        </Stack.Navigator>
    );
}

export default Navigation;