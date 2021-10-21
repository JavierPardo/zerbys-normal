import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper';
import useSignUp from '../../app/useSignUp'
import { containers, controls } from '../../styles';

export function SignUpScreenUI({ email,
    password,
    onSignUpPressed,
    onCancelPressed,
    onCredentialsChanged }) {
    return (
        <View style={containers.formContainer}>
            <View style={styles.form}>
                <TextInput style={controls.input}
                    label="Email"
                    value={email}
                    onChangeText={onCredentialsChanged.bind(null, "email")} />
                <TextInput style={controls.input}
                    label="Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={onCredentialsChanged.bind(null, "password")} />
                    <View style={{...containers.buttons, flexDirection:'row' }}>
                        <Button onPress={onSignUpPressed} >Sign Up</Button>
                        <Button onPress={onCancelPressed}>Cancel</Button>
                    </View>
            </View>
        </View>)
}

export default function (props) {
    const signIn = useSignUp(props);
    return <SignUpScreenUI {...signIn} />
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        width: '80%',
        justifyContent:'center'
    }
})
