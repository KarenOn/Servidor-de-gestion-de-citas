import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, FlatList, Button } from 'react-native';
import ListItem from '../components/ListItem';

export default ({navigation}) => {
    const [loading, setLoading] = useState(true);
    const [location, setLocation] = useState([]);

    useEffect(() => {
        fetch('http://10.0.0.64:3080/ubicacion')
        .then(response => response.json())
        .then(data => {
            setLocation(data)
            setLoading(false)
        })
    }, [])

    return (
        <View style={styles.container}>
            {loading ? <Text>Cargando...</Text> : 
            <FlatList 
                style={styles.list}
                data={location.filter(item =>  item.user_id === 1)}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <ListItem title={item.nombre}/>}
            />}
            <View style={styles.boton}>
                <Button style={{alignSelf : 'center'}} title="Agregar direccion" onPress={() => navigation.navigate('AddLocation')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    list: {
        alignSelf: 'stretch',
    },
    boton: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    }
})