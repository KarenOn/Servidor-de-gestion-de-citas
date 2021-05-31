import React, { useState } from 'react';
import { Dimensions, Button, StyleSheet, Text, View } from 'react-native';
import { Map, Modal, Panel, Input, List } from './';

export default () => {
    const [puntos, setPuntos] = useState([]);
    const [nombre, setNombre] = useState('');
    const [puntoTemp, setPuntoTemp] = useState({});
    const [visibility, setVisibility] = useState(false);
    const [vFilter, setVFilter] = useState('new_punto');

    const handleLongPress = ({ nativeEvent }) => {
        setVFilter('new_punto')
        setPuntoTemp(nativeEvent.coordinate, nombre);
        setVisibility(true)
    }

    const handleChangeText = text => {
        setNombre(text)
    }

    const handleSubmit = () => {
        const newPunto = {coordinate: puntoTemp, name: nombre};
        setPuntos(puntos.concat(newPunto));
        setVisibility(false);
        setNombre('');
    }

    const handleLista = () => {
        setVFilter('all_puntos');
        setVisibility(true);
    }
    
    return (
        <View style={styles.container}>
        <Map onLongPress={handleLongPress} puntos={puntos}/>
        <Panel onPressLeft={handleLista} textLeft='Lista'/>
        <Modal visibility={visibility}>
            {vFilter === 'new_punto' 
                ? 
                <View style={styles.form}>
                    <Input title="Nombre" placeholder="Nombre de la ubicacion" onChangeText={handleChangeText}/>
                    <View style={styles.boton}>
                    <Button title="Aceptar" onPress={handleSubmit}/>
                    </View>
                </View>
                : <List 
                    puntos={puntos} 
                    closeModal={() => setVisibility(false)} 
                    AddUbication={() => {
                        fetch('http://10.0.0.64:3080/ubicacion', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                name: puntos.name,
                                lat: puntoTemp.latitude,
                                long: puntoTemp.longitude,
                                user_id: 1,
                            })
                        }).then(() => {
                            alert('Direccion guardada con exito')
                            setVisibility(false)
                        })
                    }}
                />
            }
        </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    form: {
      padding: 15,
      height: 140,
    },
    boton: {
      marginTop: 25
    }
});
