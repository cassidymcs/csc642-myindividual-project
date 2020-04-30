import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MenuButton, Addhead, Logo} from "../components/header";
import  t  from  'tcomb-form-native'


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
             <Form type={User}/>
             <TouchableOpacity
        style={styles.button}
      >
          <Text>Add to Shelf</Text>
      </TouchableOpacity>
             </View>
           </View>
          
          );
	}
}

const Form = t.form.Form;

const User = t.struct({
  Title: t.String,
  Author: t.String,
  Genre: t.String,
  date: t.Date,
  terms: t.Boolean,
  Rating: t.Num,

});

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