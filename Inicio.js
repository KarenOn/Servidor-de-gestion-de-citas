import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default ({navigation}) => {
    return (
        <View>
            <Text style={styles.text}>Bienvenido</Text>
            <View style={styles.boton}>
                <Button onPress={() => navigation.navigate('Users')} title="Acceder como dueño"/>
                </View>
                <View style={styles.boton}>
                <Button onPress={() => navigation.navigate('LocationUser')} title="Acceder como empleado"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
      fontSize: 20,
      textAlign: 'center',
      padding: 20
    },
    boton: {
        marginBottom: 20,
        paddingLeft: 20,
        paddingRight: 20
    }
})