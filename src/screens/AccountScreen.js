import React, {useContext} from 'react';
import {Context as AuthContext} from '../context/AuthContext'
import { Button, Text } from 'react-native-elements';
import {SafeAreaView} from 'react-navigation'
import {View, StyleSheet} from 'react-native';
import Spacer from '../components/Spacer';
import { FontAwesome} from '@expo/vector-icons';

const AccountScreen = () => {
    const {signout} = useContext(AuthContext);
    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Spacer><Text h2>Account Screen</Text></Spacer>
            <Spacer><Button 
                title="Sign out"
                onPress={signout}
            /></Spacer>
        </SafeAreaView>);
};

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <FontAwesome name='gear' size={20} />
}

const styles = StyleSheet.create({});

export default AccountScreen;