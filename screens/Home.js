import React from 'react';
import {Button, Text, View} from 'react-native';


export default class Home extends React.Component{
    render() {
        return(
            <View>
                <View>
                    <Text style={{ padding: 30, fontSize: 18 }}>Bienvenue surTroc Service !</Text>
                    <Text style> Cette application a pour but de mettre en relation les utilisateurs afin que chacun propose ou répondent a différents trocs. </Text>
                </View>


                    <View style={{ marginTop: 200 }}>

                        <Button title='Mes trocs' onPress={() => {}}/>
                        <Button title='Rechercher un troc' onPress={() => {}}/>

                    </View>

            </View>
        )
    }
}