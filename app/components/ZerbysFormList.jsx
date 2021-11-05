import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PropTypes from "prop-types";
import ZerbysFormField from './ZerbysFormField';

export default function ZerbysFormList({ fieldList, labels, data, onFieldChanged, Component, ...props }) {
    return (<View>
        {fieldList.map(function (field) {
            return <ZerbysFormField key={field} labels={labels} Component={Component} onFieldChanged={onFieldChanged} f
            field={field} data={data} {...props} />
        })}
    </View>
    )
}

const styles = StyleSheet.create({})


ZerbysFormList.propTypes = {
    fieldList: PropTypes.array,
    labels: PropTypes.object,
    data: PropTypes.object,
    onFieldChanged: PropTypes.func,
    Component: PropTypes.object
}