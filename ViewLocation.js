import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';

export default ({puntos}) => {
  console.log(puntos);
  const j = puntos;
  console.log(j.split(','));
  return (
    <MapView 
      style={styles.map}
    >
      {j.map(x => 
        <Marker
          key='1'
          coordinate={x.Array}
          title='hola'
        />
      )}
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get('window').height - 150,
    width: Dimensions.get('window').width,
  },
});