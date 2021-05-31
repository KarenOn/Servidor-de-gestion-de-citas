import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Linking } from 'react-native';

export default ({navigation}) => {
    const coordenadas = navigation.getParam('coordenadas');
    const nombre = navigation.getParam('nombre');
    const username = navigation.getParam('username');
    console.log('coordenadas: ' + coordenadas);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Usuario: {username}</Text>
            <Text style={styles.text}>Nombre: {nombre}</Text>
            <Button title="Ver en Google Maps" onPress={() => Linking.openURL('google.navigation:q='+{coordenadas}+'')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    }
})