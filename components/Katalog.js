import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class AssetExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
Tas Wanita
        </Text>
        <Image style={styles.logo} source={require("../assets/tas1.jpg")}/>
         <Text>
RP200.000
        </Text>

        <Image style={styles.logo} source={require("../assets/tas2.jpg")}/>
         <Text>
RP350.000
        </Text>
        <Image style={styles.logo} source={require("../assets/tas3.jpg")}/>
         <Text>
RP550.000
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  logo: {
    backgroundColor: "#056ecf",
    height: 128,
    width: 128,
  }
});
