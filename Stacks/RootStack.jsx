import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screens/HomeScreen';
import SignUpScreen from '../Screens/User/SignUpScreen';
import SignInScreen from '../Screens/User/SignInScreen';
import ProfileScreen from '../Screens/User/ProfileScreen';
import routes from '../routes';
import { useSelector } from 'react-redux';

const RootStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();
const options = {}
export default function () {

    const user = useSelector(state => state.user)
    if (user.userId) {
        return <NavigationContainer>
            <MainStack.Navigator>
                <RootStack.Screen name={routes.private.profile} component={ProfileScreen} options={{ headerShown: false }} />
            </MainStack.Navigator>
        </NavigationContainer>
    }
    else {
        return (
            <NavigationContainer>
                <RootStack.Navigator>
                    <RootStack.Screen name={routes.public.home} component={HomeScreen} options={{ headerShown: false }} />
                    <RootStack.Screen name={routes.public.signUp} component={SignUpScreen} options={{ headerShown: false }} />
                    <RootStack.Screen name={routes.public.signIn} component={SignInScreen} options={{ headerShown: false }} />
                </RootStack.Navigator>
            </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({})
