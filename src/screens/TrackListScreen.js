import React, { useContext } from 'react';
import {StyleSheet, Button, FlatList, TouchableOpacity} from 'react-native';
import {ListItem, Text} from 'react-native-elements'
import { SafeAreaView, NavigationEvents } from 'react-navigation';
import {Context as TrackContext} from '../context/TrackContext'

const TrackListScreen = ({ navigation }) => {
    const { state, fetchTracks } = useContext(TrackContext)
    return (
        <SafeAreaView style={styles.container}>
            <NavigationEvents onWillFocus={fetchTracks} />
            <FlatList
                data={state}
                keyExtractor={item => item._id}
                renderItem= {({item})=> {
                    return (
                        <TouchableOpacity onPress={() =>
                            navigation.navigate('TrackDetail', {_id: item._id})
                        } 
                        >
                            <ListItem chevron title={item.name} />
                        </TouchableOpacity>
                    );
                }}
            />
        </SafeAreaView>);
};

TrackListScreen.navigationOptions = {
    title: 'Tracks'
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    }
});

export default TrackListScreen;