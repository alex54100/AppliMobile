import 'react-native-gesture-handler';
import * as React from 'react';
import Firebase from "./firebaseInit";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from "./screens/Login";
import ListTrocs from "./screens/ListTrocs";
import Home from "./screens/Home";
import AddTroc from "./screens/AddTroc";
import MyTrocs from "./screens/MyTrocs";


var  db = Firebase.database();




const Tab = createBottomTabNavigator();

export default function App(){
  return(
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="ListTrocs" component={ListTrocs} />
          <Tab.Screen name="AddTroc" component={AddTroc} />
          <Tab.Screen name="Mytroc" component={MyTrocs} />


        </Tab.Navigator>
      </NavigationContainer>
  );
}