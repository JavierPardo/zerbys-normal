import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text, Title } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import useHome from '../app/useHome'
import { colors, containers, controls } from '../styles'

export function HomeScreenUI({ onSignInPressed, onSignUpPressed }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column', justifyContent: 'space-evenly' }}>
            <View style={{}}>
                <Text style={{ fontSize: 80, ...colors.primaryTitle }}>Home</Text>
            </View>
            <View style={{ width: '70%' }}>
                <View style={{ alignContent: 'center' }}>
                    <Button onPress={onSignInPressed} style={{ ...colors.primaryButton, ...controls.buttons }}><Text style={colors.primaryButton}>Sign In</Text></Button>
                    <Text style={{ textAlign: "center" }}>OR</Text>
                    <Button onPress={onSignUpPressed} style={{ ...colors.primaryButton, ...controls.buttons }}><Text style={colors.primaryButton}>Sign Up</Text></Button>
                </View>
            </View>
        </View>
    )
}

export default function () {
    const home = useHome();
    return <HomeScreenUI {...home} />
}

const styles = StyleSheet.create({
    buttonCenteredContainer: {
        width: '70%'
    }
})
