import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import routes from '../routes';
import HomeScreen from '../Screens/HomeScreen';
import SignInScreen from '../Screens/User/SignInScreen';
import SignUpScreen from '../Screens/User/SignUpScreen';

const RootStack = createNativeStackNavigator();
export default function AuthStack() {
    return (
                <RootStack.Navigator>                    
                    <RootStack.Screen name={routes.public.home} component={HomeScreen} options={{ headerShown: false }} />
                    <RootStack.Screen name={routes.public.signUp} component={SignUpScreen} options={{ headerShown: false }} />
                    <RootStack.Screen name={routes.public.signIn} component={SignInScreen} options={{ headerShown: false }} />
                </RootStack.Navigator>
    )
}

const styles = StyleSheet.create({})
