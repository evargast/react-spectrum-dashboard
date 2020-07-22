import {
    ActionButton,
    Flex,
    Item,
    Menu,
    MenuTrigger,
    View,
} from "@adobe/react-spectrum";
import User from "@spectrum-icons/workflow/User";
import React, { FC } from "react";

const CustomHeader: FC = () => {
    return (
        <View padding={"size-250"}>
            <Flex justifyContent={"end"}>
                <MenuTrigger>
                    <ActionButton>
                        <User size="XS" />
                        <View padding={"size-100"}>Profile</View>
                    </ActionButton>
                    <Menu onAction={key => alert(key)}>
                        <Item key="settings">Settings</Item>
                        <Item key="profile">Profile</Item>
                        <Item key="signout">Sign Out</Item>
                    </Menu>
                </MenuTrigger>
            </Flex>
        </View>
    );
};

export { CustomHeader as Header };
