import React, { Component } from "react";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import AddBookScreen from "../screens/AddBookScreen";
import BookShelfScreen from "../screens/BookShelfScreen";
import UpdateProgressScreen from "../screens/UpdateProgressScreen"

//Add navigators with screens in this file
export const HomeNavigator = createStackNavigator({
    Home: { screen: HomeScreen }
});

export const SettingsNavigator = createStackNavigator({
    Settings: { screen: SettingsScreen }
});

export const AddBookNavigator = createStackNavigator({
    Add: { screen: AddBookScreen }
});

export const BookShelfNavigator = createStackNavigator({
   BookShelf: { screen: BookShelfScreen }
});

export const UpdateProgressNavigator = createStackNavigator({
    Update_Progress: { screen: UpdateProgressScreen }
});