import React from 'react';
import {Button, Text, View} from 'react-native';


export default class Home extends React.Component{
    render() {
        return(
            <View>
                <Text style={{ flex: 1, justifyContent: "center", padding: 32 }}>
                    <View style={{ marginTop: 20 }}>

                        <Button title='Mes trocs' onPress={() => {}}/>
                        <Button title='Rechercher un troc' onPress={() => {}}/>

                    </View>
                </Text>
            </View>
        )
    }
}