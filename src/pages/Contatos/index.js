import React from "react";
import {View, Text} from 'react-native';

export default function Contatos ({navigation}){
    return(
        <View>
            <View>
                <Text>Nome: Felipe Morales</Text>
                <Text>Telefone: (84)986317515</Text>
                <Text
                onPress={() => navigation.navigate('Informações',
                {
                    nome: 'Felipe Morales',
                    telefone: '(84)986317515',
                    cidade: 'Natal/RN',
                    profissao: 'Desenvolvedor',
                    email: 'fmoralessimoes@gmail.com'
                })}
                >Informações</Text>
            </View>
            <View style={{marginTop:20}}>
                <Text>Nome: Simões</Text>
                <Text>Telefone: (11)940028922</Text>
                <Text
                onPress={() => navigation.navigate('Informações',
                {
                    nome: 'Simões',
                    telefone: '(11)940028922',
                    cidade: 'São Paulo/SP',
                    profissao: 'Educador Social',
                    email: 'simoes@recode.org.br'
                })}
                >Informações</Text>
            </View>
            
        </View>
    )
}