import 'react-native-gesture-handler';
import * as React from 'react';
import Firebase from "./firebaseInit";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
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
          <Tab.Screen
              name="Login"
              component={Login}
              options={{
                  tabBarLabel: 'Connexion',
                  tabBarIcon: ({color, size}) => (
                      <MaterialCommunityIcons name="account" color={color} size={size}/>
                  ),
              }}
          />
          <Tab.Screen name="Home"
                      component={Home}
                      options={{
                          tabBarLabel: 'Accueil',
                          tabBarIcon: ({color, size}) => (
                              <MaterialCommunityIcons name="home" color={color} size={size}/>
                          ),
                      }}
          />
          <Tab.Screen name="ListTrocs"
                      component={ListTrocs}
                      options={{
                          tabBarLabel: 'Liste troc',
                          tabBarIcon: ({color, size}) => (
                              <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size}/>
                          ),
                      }}
          />
          <Tab.Screen name="AddTroc"
                      component={AddTroc}
                      options={{
                          tabBarLabel: 'Ajout de troc',
                          tabBarIcon: ({color, size}) => (
                              <MaterialCommunityIcons name="shape-square-plus" color={color} size={size}/>
                          ),
                      }}
          />
          <Tab.Screen name="Mytroc"
                      component={MyTrocs}
                      options={{
                          tabBarLabel: 'Mes trocs',
                          tabBarIcon: ({color, size}) => (
                              <MaterialCommunityIcons name="check-box-multiple-outline" color={color} size={size}/>
                          ),
                      }}
          />
        </Tab.Navigator>
      </NavigationContainer>
  );
}