import * as React from 'react';
import {Text, View, FlatList, StyleSheet } from "react-native";


export default class AddTroc extends React.Component {

    render() {
        return (


            <View style={styles.container}>
                <Text h1 style={{ padding: 20 }}>
                    Mes trocs
                </Text>
                <FlatList
                    data={[
                        {key: 'Je propose du bon pain'},
                        {key: 'Je fais des pates au sucre'},

                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})