import React, { Component } from "react";
import { View, Text, StyleSheet, 
  TouchableOpacity, AsyncStorage, AppRegistry} from "react-native";


export default class Login extends Component{
    render(){
        return(
          <View style = {styles.container}>
            <View style={styles.content}>
            <Text style = {styles.logo}> SIGN IN </Text>
            <View style = {styles.inputContainer}>
              <TextInput style ={styles.input} onChangeText={(username) => this.setState({username})} value={this.state.username} placeholder='username'>
              </TextInput>
              <TextInput secureTextEntry={true} onChangeText={(password) => this.setState({password})} value={this.state.password}style={styles.input} placeholder ='password'>
              </TextInput>
              </View>
              <TouchableOpacity onPress={this.login} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>LOGIN </Text>
              </TouchableOpacity>
            </View>
          </View>  
        );
    }
    constructor(props){
      super(props);
      this.state = {username: '', password: ''};
    }
    login=() => {
      fetch('http://localhost:3000', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        })

      })
      .then((response)=> response.json())
      .then((res) => {
        if(res.success === true) {
          var username = res.message;
          AsyncStorage.setItem('username', username);
          this.props.navigator.push({
            id: 'HomeScreen'
          });
        } else {
          alert(res.message);
        }
      })
      .done();
    }
}

const styles = StyleSheet.create({
     container:{
       flex: 1,
     },
     content: {
       alignItems: 'center', 
     },
     logo:{

     },
});
