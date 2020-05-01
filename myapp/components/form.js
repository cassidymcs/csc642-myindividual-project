import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, AlertIOS } from 'react-native';
import  t  from  'tcomb-form-native'

let  Form = t.form.Form

export class Addbookform extends Component {

    constructor(props){
        super(props);
        this.state={
            Title: '',
            Author: '',
            Genre: '',
            date: '',
            Rating: '',
      };
      this.submitForm = this.submitForm.bind(this)
  }

  resetForm(){
this.setState({
   Title: '',
   Author: '',
   Genre: '',
   date: '',
   Rating: '',
});
  }

  submitForm() {
    var value = this.refs.myform.getValue();
    if (value) {
        console.log(value);
        this.resetForm();
  }
}

  render(){
    let bookdata = t.struct({
        Title: t.String,
        Author: t.String,
        Genre: t.maybe(t.String),
        date: t.maybe(t.Date),
        Rating: t.maybe(t.Num),
    });

    return (
      <View>
       <Form
         ref='myform'
         type={bookdata}
         // options={{}}
          value={this.state.value}
         // onChange={{}}
       />
       <TouchableOpacity style={styles.button} onPress={this.submitForm}>
  <Text style={styles.buttonText}>Add to Shelf</Text>
</TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      marginTop: 50,
      padding: 20,
      backgroundColor: '#ffffff',
    },
    buttonText: {
      fontSize: 18,
      color: 'white',
      alignSelf: 'center',
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
      },
  });

