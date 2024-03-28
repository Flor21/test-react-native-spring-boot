import React, { Component } from 'react'
import { View, Button, StyleSheet, Text } from 'react-native'

export default class App extends Component {
  state = {
    textValue: 'INICIAR',
    myText: ''
  }

  data = null;
//ip publica :puerto
  ipPublica = ''
  url = 'http://' + this.ipPublica + '/v1/api/test'

  onPress = async() => {
    if(this.state.textValue == 'INICIAR') {
      await this.callService(this.url + '/inicio');
      this.setState({
        textValue: 'PARAR',
        myText: this.state.myText 
      })
      return
    }
    await this.callService(this.url + '/fin');
    this.setState({
      textValue: 'INICIAR',
      myText: this.state.myText
    })
  }

  callService = async (url: string) => {
    try {
      const resp = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }});

        const data = await resp.json();
        this.state.myText = data.estado;
    } catch (error) {
      this.state.myText = error;

    }

  };

  
  styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    }
  })

  render() {
    return (
      <View style={this.styles.container}>
        <Button title={this.state.textValue}onPress={this.onPress} />
        <Text>
               {this.state.myText}
        </Text>
      </View>
    )
  }
}
