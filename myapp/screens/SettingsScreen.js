import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { settingsHead, Logo } from "../components/header";
import { HeaderBackButton } from "react-navigation-stack";
import { ListItem } from 'react-native-elements'

export default class SettingsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
            headerTitle: <Logo />,
            headerBackTitle: "Settings",
            headerLayoutPreset: "center"
        };
    };
    render() {
        return (
            <View style={styles.settingsContainer}>
            <Text style = {styles.settingsHeader}> Settings </Text>
            
            <View style={styles.sett}>
            {
              list.map((item, i) => (
                <ListItem 
                  key={i}
                  title={item.title}
                  leftIcon={{ name: item.icon }}
                  bottomDivider
                  chevron
                />
              ))
            }
          </View>
          </View>
        );
    }
}

const list = [
    {
      
      title: 'Notifications',
      icon: 'notifications'
    },
    {
      title: 'Languages',
      icon: 'record-voice-over'
    },
    {
      title: 'Feedback',
      icon: 'feedback'
    },
    {
      title: 'Account Info',
      icon: 'person'
    },
    {
      title: 'Terms of Service',
      icon: 'assignment'
    },
    {
      title: 'Preferences',
      icon: 'smartphone'
    },
    {
      title: 'Change Password',
      icon: 'edit'
    },
    {
      title: 'Log out',
      icon: 'exit-to-app'
    },
    {
      title: 'Help',
      icon: 'md-help'
    },
  ]

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
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