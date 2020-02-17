import * as React from 'react';
import {Text, View, TextInput, Button} from "react-native";

export default class AddTroc extends React.Component {

    render() {
        return(
            <View>
                <Text h1 style={{ flex: 1, justifyContent: "center", padding: 32 }}>
                    Ajouter un troc
                </Text>

                <View style={{ marginTop: 20 }}>
                    <Text>
                        Que recherchez vous ?
                    </Text>
                    <TextInput placeholder='Troc recherché'/>
                </View>

                <View style={{ marginTop: 20 }}>
                    <Text>
                        Proposer votre troc
                    </Text>
                    <TextInput placeholder='Description de votre troc'/>
                    <Button title='Ajouter' onPress={() => {}}/>
                </View>



            </View>
        )
    }


}