import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import{createAppContainer} from "react-navigation"
import BottomTabNavigator from "./bottom-tab-navigator";
import { SettingsNavigator, UpdateProgressNavigator } from "./screen-stack-navigators";


const DrawerNavigator = createDrawerNavigator({
    Home: BottomTabNavigator,
    Settings: SettingsNavigator,
    Update_Progress: UpdateProgressNavigator,

});

const Drawer = createAppContainer(DrawerNavigator);

export default  Drawer;
