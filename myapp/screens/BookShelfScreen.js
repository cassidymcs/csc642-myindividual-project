import React, { Component } from 'react';
import { MenuButton, Logo, Homehead } from "../components/header";
import { SearchBar, ThemeProvider } from "react-native-elements";
//import api from "../mybackend/api.json";
import {Text, StyleSheet, View, FlatList, TextInput, ActivityIndicator,ScrollView} from 'react-native';



export default class BookShelfScreen extends React.Component {


    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: <MenuButton onPress={() => navigation.openDrawer()} />,
            headerTitle: <Logo />,
            headerBackTitle: "BookShelf",
            headerLayoutPreset: "center"
        };
    };


    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            text: '',
            isSearching: false,
        };
        this.arrayholder = [];
    }

    componentDidMount() {
        return fetch('https://my-json-server.typicode.com/cassidymcs/myRESTAPIplaceholder/Books')
            .then(response => response.json())
            .then(responseJson => {
                this.setState(
                    {
                        data: responseJson,
                        isLoading: false,
                        dataSource: responseJson
                    },
                    function () {
                        this.input = responseJson;
                    }
                );
            })
            .catch(error => {
                console.error(error);
            });
    }

    SearchFilterFunction(text) {
        const newData = this.input.filter(function (item) {
            const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            dataSource: newData,
            text: text,
            isSearching: true,
        });

    }


    toggleSearching = () => {
        if (this.state.isSearching == true) {
            this.setState({ isSearching: false });
        } else {
            this.setState({ isSearching: true });
        }
    }


    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1}}>
                    <ActivityIndicator />
                </View>
            );
        }
        return (
            //ListView to show with textinput used as search bar
            <View style={styles.viewStyle, styles.settingsContainer}>
                <SearchBar
                    style={styles.textInputStyle}
                    onChangeText={text => this.SearchFilterFunction(text)}
                    onCancel={this.toggleSearching}
                    value={this.state.text}
                    placeholder="Search Here"
                    lightTheme
                    round
                    platform="ios"
                />
                <View>
                    {this.state.isSearching ? (
                        <FlatList
                            data={this.state.dataSource}
                           // ItemSeparatorComponent={this.ListViewItemSeparator}
                            renderItem={({ item }) => (
                                <Text style={styles.textStyle}>{item.title}</Text>
                            )}
                            enableEmptySections={true}
                            style={{ marginTop: 10 }}
                            keyExtractor={(item, index) => index}
                        />) : false}
                </View>
                <Text style={styles.settingsHeader}> Your Book Shelf </Text>
                <Text style={{ textAlign: 'center', fontSize: 15 }}> Number of Books read: 10 </Text>
                <View style={styles.bottompadding}>
                    <ScrollView >

                        <FlatList
                            data={this.state.data}
                            renderItem={({ item }) =>
                                <View style={styles.item}>
                                    
                                    <Text>  {item.title}</Text>
                                    <Text > {item.author}</Text>
                                </View>
                            }
                        />

                    </ScrollView>
                </View>
            </View>

        );
    }
}

//THIS CHUCNK PRINTS FROM JSONPLACEHOLDER API
/*     <FlatList
     data={this.state.data}
     renderItem={({item}) => 
     <View style = {styles.item}>
     <Text>{item.title}</Text>
    <Text>{item.author}</Text>
    </View>
     //<Text>{item.name.first} {item.name.last}</Text>
    }
 />*/

/* componentDidMount(){
     this.fetchBooks();
 }

//THIS CHUNK PRINTS HARDCODED API BOOKLIST FROM MYBACKEND
   {
     api.Books.map(Books => {
         return(
             <View key ={ Books.id} style = {styles.item}>
              <Text>{Books.title}</Text>
             <Text>{Books.author}</Text>
             </View>
         )
     })
   }
*/


const styles = StyleSheet.create({
    viewStyle: {
        justifyContent: 'center',
        flex: 1,
        marginTop: 40,
        padding: 16,
    },
    textStyle: {
        padding: 10,
        backgroundColor: 'white',
   
    },
    textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 10,
        borderColor: '#009688',
        backgroundColor: '#FFFFFF',
    },
    settingsHeader: {
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
        //backgroundColor: '#d2f7f1'
        backgroundColor: 'white'
    },
    bottompadding: {
        marginBottom: 100,
        paddingBottom: 45,
    },


});


/* users.js from backend is outputting data i have stored in mysql database, however this app is an ios app and it seems i cannot access local mysql databases since it is http://localhost?  i guess
ios requires https requests, i spent a lot of time searching for a solution, tried so many things but ended up rerouting and hardcoding my own data into the myapi.json folder i have stored in front end.
output on browser from users.js when i open http://localhost:3000/users => {"data":[{"title":"Harry Potter","author":"J. K. Rowling","genre":"Fantasy Fiction"}]}   this is all data i stored using queries
this means backend and front end are not necessarily connected. still looking into how to fix this. I left the following code since it took me a while and i believe it should have otherwise worked.

EDIT: final solution was to create custom api i have public on serperate github repo  using jsonplaceholder.com by typicode.com. the fetch call works, and displays data manually inserted into the json file, however the fault of using the json api is all changes are technically "faked"
therfore the POST requests return 404 error and console displayed undefined. app does not update bookshelf when forms are submitted :(  would love to fix this with more time.  */
    //fetchBooks = async()=>{
       // const response = await fetch('http:3000/users');   <- call to express backend 
       //fetch('http://10.0.0.56:19000:3000/users').then((response) => response.json()).then((responseJson) => {
/*      fetch('https://my-json-server.typicode.com/cassidymcs/myRESTAPIplaceholder/Books').then((response) => response.json()).then((responseJson) => {
          this.setState({
              data: responseJson
          },
          function(){
              this.arrayholder=responseJson;
          }
          )
      })
  }


}*/
