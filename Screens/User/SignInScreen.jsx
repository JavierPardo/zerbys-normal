import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import useSignIn from '../../app/useSignIn'
import { containers, controls } from '../../styles'

export function SignInScreenUI({ onCancelPressed, onSignInPressed, onCredentialsChanged, identifier, password }) {
    return (
        <View style={containers.formContainer}>
            <View style={styles.form}>
                <TextInput style={controls.input}
                    label="Email or username"
                    value={identifier}
                    onChangeText={onCredentialsChanged.bind(null, "identifier")} />
                <TextInput style={controls.input}
                    label="Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={onCredentialsChanged.bind(null, "password")} />
                <View style={{ ...containers.buttons, flexDirection: 'row' }}>
                    <Button onPress={onCancelPressed}>Cancel</Button>
                    <Button onPress={onSignInPressed}>Sign In</Button>
                </View>
            </View>
        </View>)
}

export default function () {
    const signIn = useSignIn();
    return <SignInScreenUI {...signIn} />
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    
    form: {
        flex: 1,
        width: '80%',
        justifyContent:'center'
    }
})
