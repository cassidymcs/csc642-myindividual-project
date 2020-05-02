import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MenuButton, Logo, Homehead } from "../components/header";
import {SearchBar, ThemeProvider } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import myapi from "../components/myapi.json";

export default class BookShelfScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: <MenuButton onPress={() => navigation.openDrawer()} />,
            headerTitle: <Logo />,
            headerBackTitle: "BookShelf",
            headerLayoutPreset: "center"
        };
    };
    constructor(props){
        super(props);
    this.state = {
        data: [],
    }
}

/* users.js from backend is outputting data i have stored in mysql database, however this app is an ios app and it seems i cannot access local mysql data bases since it is http://localhost?  i guess 
ios requires https, i spent a lot of time searching for a solution, but ended up rerouting and hardcoding my own data into the myapi.json folder i have stored in front end. 
output on browser from users.js when i open http://localhost:3000/users => {"data":[{"title":"Harry Potter","author":"J. K. Rowling","genre":"Fantasy Fiction"}]}   this is all data i stored using queries 
this means backend and front end are not necessarily connected. still looking into how to fix this. I left the following code since it took me a while and i believe it should have otherwise worked.  */
    fetchBooks = async()=>{
        const response = await fetch('https://localhost:3000/users');
        const user = await response.json();
        this.setState({data: user});
    }

    componentDidMount(){
        this.fetchBooks();
    }

  
    render() {
   
        
        return (
            <View style={styles.settingsContainer}>
                         <SearchBar
                             placeholder="Type Here..."
                                lightTheme
                                round
                                platform = "ios"/>
            <Text style = {styles.settingsHeader}> Your Book Shelf </Text>
            <Text style={{textAlign: 'center', fontSize: 15}}> Number of Books read: 10 </Text>
         <View >
         <ScrollView style={styles.bottompadding}>
        {
            myapi.Books.map(Books => {
                return(
                    <View key ={ Books.id} style = {styles.item}>
                     <Text>{Books.title}</Text>
                    <Text>{Books.author}</Text>
                    </View>
                )
            })
        } 

             </ScrollView>
         </View>
       </View>
        );
    }
}

   /*const state = {
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
    }*/

    /*{
        state.names.map((item, index) => (
           <View key = {item.id} style = {styles.item}>
              <Text>{item.name}</Text>
           </View>
        ))
     }*/
 
 


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
     bottompadding:{
         paddingBottom: 100,
     }
});