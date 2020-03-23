import React from "react";
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    TextInput,
    AsyncStorage,
    Alert,
    KeyboardAvoidingView
} from "react-native";
import * as firebase from "firebase";


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignup: false,
            email: "",
            password: ""
        };
    }

    tryLogin() {
        if (this.state.email.length === 0 || this.state.password.length === 0) {
            Alert.alert("Remplissez les deux champs s'il vous plaît");
        }
        if (this.state.isSignup) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(args => {
                    console.log(args);
                    AsyncStorage.setItem("userId", args.user.uid);
                    this.props.navigation.navigate("Home");
                })
                .catch(error => Alert.alert("Error", error.message));
        } else {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(args => {
                    console.log(args);
                    AsyncStorage.setItem("userId", args.user.uid);
                    this.props.navigation.navigate("Home");
                })
                .catch(error => Alert.alert("Error", error.message));
        }
    }


    render() {
        return (

            <KeyboardAvoidingView
                style={{ flex: 1, justifyContent: "center", padding: 32 }}
                behavior="height"
                enabled
            >
                <View>
                    <Text style={{ textAlign: "center", fontSize: 32, marginBottom: 40}}>
                    TrocService !
                    </Text>
                </View>

                <Text style={{ textAlign: "center", fontSize: 20 }}>
                    {this.state.isSignup ? "Créer un compte" : "Se connecter"}
                </Text>
                <TextInput
                    value={this.state.email}
                    onChangeText={text => this.setState({ email: text })}
                    placeholder="Email"
                    autoCapitalize="none"
                    style={{ paddingVertical: 16, marginVertical: 16, fontSize: 20 }}
                />
                <TextInput
                    value={this.state.password}
                    onChangeText={text => this.setState({ password: text })}
                    placeholder="Mot de passe"
                    secureTextEntry
                    style={{ paddingVertical: 16, marginVertical: 16, fontSize: 20 }}
                />
                <Button onPress={this.tryLogin.bind(this)} title={this.state.isSignup ? "Valider la création" : "Valider la connexion"}
                
                />
                <TouchableOpacity
                    onPress={() => this.setState({ isSignup: !this.state.isSignup })}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            fontSize: 20,
                            marginTop: 32,
                            color: "blue"
                        }}
                    >
                        {this.state.isSignup ? "Se connecter" : "Créer un compte"}
                    </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}