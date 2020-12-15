import React, { useContext } from 'react';
import {View, StyleSheet} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import Navlink from '../components/Navlink';
import { Context as AuthContext} from '../context/AuthContext'

const SigninScreen = () => {
    const {state, signin, clearErrorMessage} =  useContext(AuthContext); 

    return (
    <View style={styles.container}>
        <NavigationEvents 
            onWillFocus={clearErrorMessage}
            onWillBlur={clearErrorMessage}
        />
        <AuthForm 
            headerText="Sign in for Tracker" 
            errorMessage={state.errorMessage}
            onSubmit={signin} 
            submitButtonText="Sign In"
        />
        <Navlink
            text="Don't have an account? Sign up instead."
            nextScreen="Signup"
        />
    </View>);
};

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
});

export default SigninScreen;