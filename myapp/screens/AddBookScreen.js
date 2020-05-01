import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, AlertIOS, Button } from "react-native";
import { MenuButton, Addhead, Logo} from "../components/header";
import  t  from  'tcomb-form-native'
import {Addbookform } from "../components/form";


export default class AddBookScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <MenuButton onPress={() => navigation.openDrawer()} />,
      headerTitle: <Addhead />,
      headerBackTitle: "Addhead",
      headerLayoutPreset: "center"
    };
  };

  render() {
        return (
            <View style={styles.settingsContainer}>
                <Text style = {styles.settingsHeader}> Add a Book </Text>
             <View style={styles.addForm}>
          <Addbookform/>
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

      settingsContainer: {
        backgroundColor: 'pink',
      },

      settingsHeader:{
        color: 'white', 
        marginTop: 10,
        fontSize: 40,
        fontFamily: 'Bodoni 72',
        textAlign: 'center', 
      },
});