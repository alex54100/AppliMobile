import * as React from 'react';
import {View, Text, FlatList, StyleSheet, Image} from "react-native";



class ListTrocs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {data: []}
    }

    componentDidMount() {
        fetch("https://europe-west1-trocservices-7b189.cloudfunctions.net/getTrocs")
            .then(response => response.json()).then(results => this.setState({data: results}))
            .catch(console.log);
    }

    render() {
        return <View>
            <Text style={{textAlign: "center", fontSize: 32, marginTop: 40}}>
                Listes des Trocs !
            </Text>

            <FlatList
                data={this.state.data}
                renderItem={({item}) =>

                <View style={styles.container}>
                    <Text style={{textAlign: "left", fontSize: 20, marginTop: 12, marginBottom: 4}}>Service demandé</Text>
                    <Text>{item.servicedemande} </Text>

                    <Text style={{textAlign: "left", fontSize: 20, marginTop: 12, marginBottom: 4}}>Service propose</Text>
                    <Text>{item.servicepropose} </Text>
                    <Text style={{textAlign: "left", fontSize: 20, marginTop: 12, marginBottom: 4}}>Photo du stroc</Text>
                    <Image style={styles.imgTroc}
                       source={{ uri: item.photo}}
                    />

                </View>}
                keyExtractor={item => item.id}
            />
        </View>
    }
}

export default ListTrocs;

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
    },
    imgTroc: {
        width: 100,
        height: 75,
        marginTop: 10
    },
});
