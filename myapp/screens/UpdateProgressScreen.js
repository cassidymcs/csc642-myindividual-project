import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Update } from "../components/header";
import { HeaderBackButton } from "react-navigation-stack";
import  t  from  'tcomb-form-native'
import {Progressform} from "../components/form";

export default class UpdateProgressScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
            headerTitle: <Update />,
            headerBackTitle: "Settings",
            headerLayoutPreset: "center"
        };
    };
    render() {
        return (
            <View style={styles.settingsContainer}>
            <Text style = {styles.settingsHeader}> Progress </Text>
            <View style={styles.addForm}>
              <Progressform/>
             </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
      },

    addForm: {
        backgroundColor: 'white',
        justifyContent: 'center',
        marginTop: 30,
        padding: 20,
      },
    
    settingsHeader:{
        color: 'white', 
        marginTop: 10,
        fontSize: 40,
        fontFamily: 'Bodoni 72',
        textAlign: 'center', 
      },

       settingsContainer: {
     backgroundColor: 'pink',
   },




});