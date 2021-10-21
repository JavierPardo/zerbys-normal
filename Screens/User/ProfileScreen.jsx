import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Appbar, Menu, Text } from 'react-native-paper'
import useProfile from '../../app/useProfile';
import AppHeader from '../../components/AppHeader';

export function ProfileScreenUI({ user }) {
    return (
        <View>
            <AppHeader/>
            <View style={{ flexDirection: 'row' }}>
                <Text>Name:</Text>
                <Text>{user.name}</Text>
            </View>
        </View>)
}

export default function () {
    const profile = useProfile();
    return <ProfileScreenUI {...profile} />
}

const styles = StyleSheet.create({})
