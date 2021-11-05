import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Colors, Text } from 'react-native-paper'

export default function ZerbysFormField({ field, labels, Component, onFieldChanged, errors, data, ...props }) {
    return (
        <View>
            {errors && errors[field] && <Text style={{color:Colors.red400}}>{errors[field]}</Text>}
            <Component {...props} label={labels[field]}  onChangeText={onFieldChanged.bind(null, field)} value={data[field]} />
        </View>
    )
}

const styles = StyleSheet.create({})
