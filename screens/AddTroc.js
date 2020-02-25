import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, FlatList, Image, Alert, KeyboardAvoidingView } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';
import firebase from '../firebaseInit.js'
import '@firebase/firestore';


function addTroc() {
    const [troc, setTroc] = useState("");
    const ref = firebase.firestore().collection('Troc')
    async function addTroc() {
        await ref.add({
            photo: photo,
            servicedemande: servicedemande,
            servicepropose: servicepropose,
        });
        setTroc("");
    }

    return(
        <View>
            <Appbar>
                <Appbar.Content title={'Petits bouts de troc'} />
            </Appbar>
            <ScrollView style={{ flex: 1 }}>
                <Text>Liste des trocs </Text>
            </ScrollView>
            <TextInput label={'Service demandé'} value={servicedemande} onChangeText={setTroc} />
            <TextInput label={'Service proposé'} value={servicepropose} onChangeText={setTroc} />
            <TextInput label={'Photo'} value={photo} onChangeText={setTroc} />
            <Button onPress={() => addTroc()}>ajouter un petit bout de troc !</Button>
        </View>
    )
}