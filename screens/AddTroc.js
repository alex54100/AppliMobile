import React, { useState } from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
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
            <Appbar style={styles.container}>
                <Appbar.Content title={"Page d'ajout de troc"} />
            </Appbar>
            <View style={{ flex: 1 }}>
                <Text>Liste des trocs </Text>
            </View>
            <View>
                <TextInput label={'Ajouter une URL pour votre photo'} value={photo} onChangeText={setPhoto} />
                <TextInput label={'Décrire le service vous demandez'} value={servicedemande} onChangeText={setServiceDemande} />
                <TextInput label={'Décrire le service que vous proposez'} value={servicepropose} onChangeText={setServicePropose} />
                <Button style={styles.button} onPress={() => addTroc()}>Ajouter un troc !</Button>
            </View>
        </View>
    );
}
export default AddTroc

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#4295F8",
    },
    button: {
        color: "#4295F8",
    },
});
