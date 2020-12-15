import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import {withNavigation} from 'react-navigation'
import {Text} from 'react-native-elements'
import Spacer from './Spacer'

const NavLink = ({navigation, text, nextScreen}) => {
    return (
    <TouchableOpacity onPress={() => navigation.navigate(nextScreen)}>
        <Spacer>
            <Text style={styles.navLink}>{text}</Text>
        </Spacer>
    </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    navLink: {
        color: 'blue'
    }
});

export default withNavigation(NavLink);