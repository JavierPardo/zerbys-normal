import React, { useState } from "react";
import { Appbar, Menu } from "react-native-paper";
import useAppHeader from "../js/components/useAppHeader";

function AppHeader() {
  const { onLogOutPressed } = useAppHeader();
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Appbar.Header>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Appbar.Action
            color="white"
            icon="dots-vertical"
            onPress={openMenu}
          />
        }
      >
        <Menu.Item onPress={onLogOutPressed} title="Log out" />
      </Menu>
    </Appbar.Header>
  );
}

export default AppHeader;
