import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';


export default class Home extends React.Component{
    render() {
        return(
            <View>
                <View>
                    <Text style={{ padding: 30, fontSize: 18 }}>Bienvenue sur Troc Service !</Text>
                    <Text> Cette application a pour but de mettre en relation les utilisateurs afin que chacun propose ou répondent a différents trocs. </Text>

                    <Text style={styles.container}> Afin de rechercher un troc qui te correspond, tu peux appuyer sur le bouton si dessous afin de voir tout les trocs disponible sur l'application ! </Text>
                    <Button title='Rechercher un troc' onPress={() => {}}/>

                    <Text style={styles.container}> Si tu as besoin d'aide pour une demande particulière, tu peux ajouter ton troc avec le bouton si dessous ! </Text>
                    <Button title='Ajouter un troc' onPress={() => {}}/>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        padding: 5,
    }
});
