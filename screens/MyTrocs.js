import * as React from 'react';
import {Text, View, StyleSheet} from "react-native";


export default class AddTroc extends React.Component {

    render() {
        return <View>
            <Text style={{textAlign: "center", fontSize: 32, marginTop: 40}}>
                Mes trocs
            </Text>
                    <View style={styles.container}>
                        <Text style={{textAlign: "left", fontSize: 20, marginTop: 12, marginBottom: 4}}>Service demandé</Text>
                        <Text> Monter un meuble </Text>

                        <Text style={{textAlign: "left", fontSize: 20, marginTop: 12, marginBottom: 4}}>Service propose</Text>
                        <Text> Cours de violon </Text>

                    </View>
        </View>




    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})