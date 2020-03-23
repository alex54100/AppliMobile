import * as React from 'react';
import {View, Text} from "react-native";



class ListTrocs extends React.Component {
    constructor(props) {
        super(props)
        this.state = { data: [] }
    }
    componentDidMount() {
        fetch("https://europe-west1-trocservices-7b189.cloudfunctions.net/getTrocs")
            .then(response => response.json()).then(results => this.setState({ data: results }))
            .catch(console.log);
    }
    render() {
        return <View>
            <View>
                <Text style={{ textAlign: "center", fontSize: 32, marginTop: 40}}>
                    TrocService !
                </Text>
            </View>
            {
                this.state.data.map(item => <View> <Text>{item.photo}</Text> </View>)
            }
        </View>;
    }

}

export default ListTrocs;

