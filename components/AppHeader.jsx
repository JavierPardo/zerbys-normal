import React from 'react'
import { StyleSheet } from 'react-native'
import { Appbar, Menu } from 'react-native-paper'
import useAppHeader from './useAppHeader'

export default function AppHeader() {

    const { onLogOutPressed } = useAppHeader();
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    return (<Appbar.Header >
        <Appbar.Content title="Profile" />
        <Appbar.Action icon="magnify" />
        <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
                <Appbar.Action
                    color="white"
                    icon="dots-vertical"
                    onPress={openMenu}
                />}>
            <Menu.Item onPress={onLogOutPressed} title="Log out" />
        </Menu>
    </Appbar.Header>
    )
}

const styles = StyleSheet.create({})
