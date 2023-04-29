import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Contatos from './src/pages/Contatos';
import Informacoes from './src/pages/Informacoes';

const Drawer = createDrawerNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Contatos" component={Contatos}/>
        <Drawer.Screen name="Informações" component={Informacoes}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
