import React from "react";
import {View, Text} from 'react-native';

export default function Contatos ({navigation}){
    return(
        <View>
            <Text>Contatos</Text>
            <Text
            onPress={() => navigation.navigate('Informações')}
            >Informações</Text>
        </View>
    )
}