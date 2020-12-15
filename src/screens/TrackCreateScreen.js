import '../_mockUserLocation';
import React, {useContext, useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import {Context as LocationContext} from '../context/LocationContext'
import Map from '../components/Map'
import useLocation from '../hook/useLocation';
import TrackForm from '../components/TrackForm';
import Spacer from '../components/Spacer';
import { FontAwesome} from '@expo/vector-icons';

const TrackCreateScreen = ({ isFocused }) => {

    const { state: {recording}, addLocation } = useContext(LocationContext);
    const callback = useCallback((location) => {
        addLocation(location, recording);
    }, [recording]);
    const [error] =  useLocation(isFocused || recording, callback);
    
    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Spacer><Text h2>Create a Track</Text></Spacer>
            <Spacer><Map /></Spacer>
            <TrackForm />
            {error? <Text>Please enable location services.</Text> : null}
        </SafeAreaView>);
};

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name='plus' size={20} />
}

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);