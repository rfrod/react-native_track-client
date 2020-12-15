import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Text} from  'react-native-elements'
import { SafeAreaView } from 'react-navigation';
import MapView, { Polyline } from 'react-native-maps'
import {Context as TrackContext} from '../context/TrackContext'
import Spacer from '../components/Spacer'

const TrackDetailScreen = ({ navigation }) => {
    const _id = navigation.getParam('_id');
    const {state} = useContext(TrackContext);

    const track = state.find(t => t._id === _id)
    const initialCoords = track.locations[0].coords;
    return (
    <SafeAreaView style={styles.container}>
        <Spacer><Text h2>{track.name}</Text></Spacer>
        <Spacer><MapView 
            initialRegion= {{
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
                ...initialCoords
            }}
            style={styles.map}
        >
            <Polyline coordinates={track.locations.map(loc => loc.coords)} />
        </MapView></Spacer>
    </SafeAreaView>);
};

const styles = StyleSheet.create({
    map: {
        height: 300
    },
    container: {
        backgroundColor: 'white',
        flex: 1
    }
});

export default TrackDetailScreen;