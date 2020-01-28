import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';


  const firebaseConfig = {
    apiKey: "AIzaSyCEkqYRQoFpt-c9m6PqnKVl9vODIwOe3Mo",
    authDomain: "trocservicetest.firebaseapp.com",
    databaseURL: "https://trocservicetest.firebaseio.com",
    projectId: "trocservicetest",
    storageBucket: "trocservicetest.appspot.com",
    messagingSenderId: "865157230608",
    appId: "1:865157230608:web:4fe4cf1b2981359ec15a95",
    measurementId: "G-6GBV4XPGBH"
  };
  // Initialize Firebase
  const Firebase = firebase.apps.length > 0 ? firebase.apps[0] : firebase.initializeApp(firebaseConfig);


export default function App() {
  return (
    <View style={styles.container}>
      <Text>SI C LA C BON</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
