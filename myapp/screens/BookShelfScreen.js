import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MenuButton, Logo, Homehead } from "../components/header";
import {SearchBar } from "react-native-elements";

export default class BookShelfScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: <MenuButton onPress={() => navigation.openDrawer()} />,
            headerTitle: <Logo />,
            headerBackTitle: "BookShelf",
            headerLayoutPreset: "center"
        };
    };
    render() {
        return (
            <View style={styles.settingsContainer}>
                         <SearchBar
                             placeholder="Type Here..."
                                lightTheme
                                round
                                platform = "ios"/>
            <Text style = {styles.settingsHeader}> Your Book Shelf </Text>
            <Text style={{textAlign: 'center', fontSize: 15}}> Number of Books read: 14 </Text>
         <View >
         <ScrollView>
                {
                   state.names.map((item, index) => (
                      <View key = {item.id} style = {styles.item}>
                         <Text>{item.name}</Text>
                      </View>
                   ))
                }
             </ScrollView>
         </View>
       </View>
        );
    }
}

   const state = {
       names: [
          {'name': 'Book 1', 'id': 1},
          {'name': 'Book 2', 'id': 2},
          {'name': 'Book 3', 'id': 3},
          {'name': 'Book 4', 'id': 4},
          {'name': 'Book 5', 'id': 5},
          {'name': 'Book 6', 'id': 6},
          {'name': 'Book 7', 'id': 7},
          {'name': 'Book 8', 'id': 8},
          {'name': 'Book 9', 'id': 9},
          {'name': 'Book 10', 'id': 10},
          {'name': 'Book 11', 'id': 11},
          {'name': 'Book 12', 'id': 12}
       ]
    }
 
 


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    settingsHeader:{
        color: 'white', 
        marginTop: 40,
        fontSize: 40,
        fontFamily: 'Bodoni 72',
        textAlign: 'center', 
      },

      settingsContainer: {
        backgroundColor: 'pink',
      },
      item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 60,
        margin: 20,
        borderColor: 'black',
        borderWidth: 5,
        borderRadius: 2,
        backgroundColor: '#d2f7f1'
     },
});