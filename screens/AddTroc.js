import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';
import firebase from '../firebaseInit.js'
import '@firebase/firestore';


function AddTroc() {
    const [photo, setPhoto] = useState("");
    const [servicedemande, setServiceDemande] = useState("");
    const [servicepropose, setServicePropose] = useState("");
    const ref = firebase.firestore().collection('Troc')
    async function addTroc() {
        await ref.add({
            photo: photo,
            servicedemande: servicedemande,
            servicepropose: servicepropose,
        });
        setPhoto("");
        setServiceDemande("");
        setServicePropose("");
    }

    return(
        <View>
            <Appbar>
                <Appbar.Content title={'Petits bouts de troc'} />
            </Appbar>
            <ScrollView style={{ flex: 1 }}>
                <Text>Liste des trocs </Text>
            </ScrollView>
            <TextInput label={'Photo'} value={photo} onChangeText={setPhoto} />
            <TextInput label={'Service demandé'} value={servicedemande} onChangeText={setServiceDemande} />
            <TextInput label={'Service proposé'} value={servicepropose} onChangeText={setServicePropose} />
            <Button onPress={() => addTroc()}>ajouter un petit bout de troc !</Button>
        </View>
    );
}
export default AddTroc