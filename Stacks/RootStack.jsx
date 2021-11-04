import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { useSelector } from 'react-redux';
import { setUser } from '../redux/actions/userActions';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

export default function () {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(function () {
        dispatch(setUser({userId: 'asdasdafdasdf'}))
    }, [])


    if (user.userId) {
        return <AppStack />
    }
    else {
        return (
            <AuthStack />
        )
    }
}

const styles = StyleSheet.create({})
