import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import ListItem from '../components/ListItem';

export default ({navigation}) => {
    const userid = navigation.getParam('user_id');
    const username = navigation.getParam('nombre');
    const [loading, setLoading] = useState(true);
    const [location, setLocation] = useState([]);
    console.log(userid, location);

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
                data={location.filter(item =>  item.user_id === userid)}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <ListItem onPress={() => navigation.navigate('Detail', {nombre: item.nombre, coordenadas: item.lat + '+' + item.long, username: username})} title={item.nombre}/>}
            />}
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
    }
})