import * as React from 'react';
import Firebase from "./firebaseInit";
import { NavigationNativeContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

var  db = Firebase.database();

import Login from "./screens/Login";

const Tab = createBottomTabNavigator();

export default function App(){
  return(
      <NavigationNativeContainer>
        <Tab.Navigator>
          <Tab.Screen name="Login" component={Login} />

        </Tab.Navigator>
      </NavigationNativeContainer>
  );
}