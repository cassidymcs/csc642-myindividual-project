import React from 'react'
import {Text, TouchableOpacity, Dimensions, StyleSheet} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import {View} from "react-native";
import { DrawerRouter } from 'react-navigation-drawer';
const deviceWidth = Dimensions.get("window").width;

export class Logo extends React.Component {
    render() {
        return (
        
            <View >
                <Text style={{fontFamily: 'Bodoni 72', fontSize: 30}}>Shelf</Text>
            </View>
        );
    }
}

export class Update extends React.Component {
    render() {
        return (
        
            <View >
                <Text style={{fontFamily: 'Bodoni 72', fontSize: 30}}>Update Progress</Text>
            </View>
        );
    }
}

export class Homehead extends React.Component {
    render() {
        return (
        
            <View style={{ flex: 0.8 }}>
                <Text style={{fontFamily: 'Bodoni 72', fontSize: 30}}>Home</Text>
            </View>
        );
    }
}

export class Addhead extends React.Component {
    render() {
        return (
        
            <View style={{ flex: 0.8 }}>
                <Text style={{fontFamily: 'Bodoni 72', fontSize: 30}}>Add</Text>
            </View>
        );
    }
}

export class settingsHead extends React.Component {
    render() {
        return (
        
            <View >
                <Text style={{fontFamily: 'Bodoni 72', fontSize: 30}}>Settings</Text>
            </View>
        );
    }
}

export class MenuButton extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress = {this.props.onPress} >
                <Icon name = "md-menu" size={30} style = {{color: 'black',paddingLeft: 10}}/>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'pink',
    }
});