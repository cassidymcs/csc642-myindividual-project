import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { MenuButton,Logo,  Homehead } from "../components/header";
import { Image } from 'react-native'
import ProgressCircle from 'react-native-progress-circle'


export default class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: <MenuButton onPress={() => navigation.openDrawer()} />,
            headerTitle: <Homehead />,
            headerBackTitle: "Home",
            headerLayoutPreset: "center"
        };
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
             <ScrollView>
               <Image 
                  source={require('./assets/CASS.png')}  
                  style={{ width: 200, height: 200, borderRadius: 400/ 2, borderWidth: 3, borderColor: 'white', marginLeft: 50, marginTop: 60 }} 
                  />
                  <Text style = {styles.text}>Cassidy  </Text>
                  <View style={styles.progresscircle}>
                    <Text style={styles.progressHeader}>Book Progress</Text>
                    <Text style={styles.booktitle}>Current Book Title</Text>
                    <ProgressCircle 
                  percent={30}
                  radius={100}
                  borderWidth={12}
                  color="#44D220"
                  shadowColor="#999"
                  bgColor="#F5F0F3"
              >
                  <Text style={{ fontSize: 25, fontFamily: 'Optima-Bold' }}>{'30%'}</Text>
              </ProgressCircle>
                  </View>
             </ScrollView>
          </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    text:{
      color:'white',
      fontSize: 60,
      fontFamily: 'Bodoni 72',
      textAlign: 'center',
    },
    
    
    homeHeader:{
      marginTop: 30,
      backgroundColor: 'white',
    },


    progressHeader: {
       textAlign: 'center', 
        width: 300,
        paddingTop: 30,
        fontSize: 45,
        fontFamily: 'Papyrus',
    },
  
    settingsHeader:{
      color: 'white', 
      marginTop: 40,
      fontSize: 40,
      fontFamily: 'Bodoni 72',
      textAlign: 'center', 
    },
  
  
    profileHeader:{
      color: 'black', 
      marginTop: 20,
      fontSize: 40,
      fontFamily: 'Bodoni 72',
      textAlign: 'center', 
    },
  
    progresscircle:{
        alignItems: 'center',
    },
  
    booktitle:{
      textAlign: 'center',
      fontFamily: 'Bodoni 72',
      fontSize: 30,
      padding: 20,
    },
  
  });