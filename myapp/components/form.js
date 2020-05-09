
import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, AlertIOS } from 'react-native';
import t from 'tcomb-form-native'
import myapi from "../components/myapi.json";
//import api from "/mybackend/api.json";

let Form = t.form.Form

export class Addbookform extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Title: '',
      Author: '',
      Genre: '',
      date: '',
      Rating: '',
    };
    this.submitForm = this.submitForm.bind(this)
  }

  resetForm() {
    this.setState({
      Title: '',
      Author: '',
      Genre: '',
      date: '',
      Rating: '',
    });
  }


  //handles POST request to github myjaonplaceholder RESTAPI for add book form 
  submitForm = async () => {
    var value = this.refs.myform.getValue();
    if (value) {
      console.log(value);
      console.log(value.title);
      fetch('https://my-json-server.typicode.com/cassidymcs/myRESTAPIplaceholder/Books', {
        method: 'POST',
        body: JSON.stringify({
          title: value.title,
          id: 2,
          author: 'joe',
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(json => console.log(json))
      this.resetForm();
    }
  }

  render() {
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
          value={this.state.value}
        />
        <TouchableOpacity style={styles.button} onPress={this.submitForm}>
          <Text style={styles.buttonText}>Add to Shelf</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export class Progressform extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Page: '',
      NewPage: '',
      PagesLeft: '',
    };
    this.submitForm = this.submitForm.bind(this)
  }

  resetForm() {
    this.setState({
      Page: '',
      NewPage: '',
      PagesLeft: '',
    });
  }

  submitForm() {
    var value = this.refs.myform.getValue();
    if (value) {
      console.log(value);
      this.resetForm();
    }
  }
  render() {
    let User = t.struct({
      Page: t.Num,
      NewPage: t.Num,
      PagesLeft: t.maybe(t.Num),

    });

    return (
      <View style={styles.addForm}>
        <Form type={User}
          ref='myform'
          value={this.state.value} />
        <TouchableOpacity style={styles.button} onPress={this.submitForm}>
          <Text>Update</Text>
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

