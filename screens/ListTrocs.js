import * as React from 'react';
import {View, Text, FlatList} from "react-native";



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
                <View>
                    <Text style={{textAlign: "left", fontSize: 24, marginTop: 12, marginBottom: 4}}>
                        Service demandé
                    </Text>

                    <Text>{item.servicedemande} </Text>

                </View>}
                keyExtractor={item => item.id}
            />
        </View>
    }
}


{/*        <View>*/}
{/*            <Text>{item.photo}</Text>*/}
{/*            <Text>{item.servicedemande}</Text>*/}
{/*            <Text>{item.servicedemande}</Text>*/}
{/*        </View>)*/}
{/*    }*/}
{/*/>*/}
{/*        </View>;*/}
{/*    }*/}

{/*}*/}

export default ListTrocs;

