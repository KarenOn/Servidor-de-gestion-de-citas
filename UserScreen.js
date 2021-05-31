import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import ListItem from '../components/ListItem';

export default ({navigation}) => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://10.0.0.64:3080/user')
        .then(response => response.json())
        .then(data => {
            setUsers(data)
            setLoading(false)
        })
    }, [])
    
    // const fetchUsers = async () => {
    //   const response = await fetch('https://10.0.0.64:3080/user')
    //   const data = await response.json()
    //   setUsers(data)
    //   setLoading(false)
    // }

    // useEffect(() => fetchUsers(), [])

    return (
        <View style={styles.container}>
            {loading ? <Text>Cargando...</Text> : 
            <FlatList 
                style={styles.list}
                data={users}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <ListItem onPress={() => navigation.navigate('Location', {user_id: item.id, nombre: item.nombre + ' ' + item.apellido})} title={item.nombre + ' ' + item.apellido}/>}
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