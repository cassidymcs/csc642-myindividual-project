import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "react-navigation-tabs";
import {
    AddBookNavigator,
    HomeNavigator,
    BookShelfNavigator
} from "./screen-stack-navigators";

const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    let IconComponent = Ionicons;
    let iconName;
    if (routeName === "Home") {
        iconName = "ios-home";
    } else if   (routeName === "Add") {
        iconName = "ios-add";
    } else if (routeName === "BookShelf") {
        iconName = "ios-list-box";
    }

    return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const BottomTabNavigator = createBottomTabNavigator(
    {
        Add: AddBookNavigator,
        Home: HomeNavigator,
        BookShelf: BookShelfNavigator
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) =>
                getTabBarIcon(navigation, focused, tintColor)
        }),
        tabBarOptions: {
            activeTintColor: "pink",
            inactiveTintColor: "gray"
        }
    }
);

export default BottomTabNavigator;