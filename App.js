import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Contatos from './src/pages/Contatos';
import Informacoes from './src/pages/Informacoes';
import AppContatos from "./src/pages/AppContatos";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs (){
  return(
    <Tab.Navigator>
      <Tab.Screen name="AppContatos" component={AppContatos}/>
      <Tab.Screen name="Contatos" component={Contatos}/>
    </Tab.Navigator>
  )
}

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AppContatos" component={Tabs}/>
        <Stack.Screen name="Informações" component={Informacoes}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
