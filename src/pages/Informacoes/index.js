import React from "react";
import {View, Text} from 'react-native';

export default function Informacoes ({route}){
    return(
        <View>
            <Text>Nome: {route.params?.nome}</Text>
            <Text>Telefone: {route.params?.telefone}</Text>
            <Text>Cidade: {route.params?.cidade}</Text>
            <Text>Profissão: {route.params?.profissao}</Text>
            <Text>Email: {route.params?.email}</Text>
        </View>
    )
}