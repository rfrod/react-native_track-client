import React, { useContext } from 'react';
import {View, StyleSheet} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import Navlink from '../components/Navlink';
import { Context as AuthContext} from '../context/AuthContext'

const SignupScreen = () => {
    const {state, signup, clearErrorMessage} =  useContext(AuthContext); 

    return (
    <View style={styles.container}>
        <NavigationEvents 
            onWillFocus={clearErrorMessage}
            onWillBlur={clearErrorMessage}
        />
        <AuthForm 
            headerText="Sign up for Tracker" 
            errorMessage={state.errorMessage}
            onSubmit={({email,password}) => {signup({email,password})}} 
            submitButtonText="Sign Up"
        />
        <Navlink
            text="Already have an account? Sign in instead."
            nextScreen="Signin"
        />
    </View>);
};

SignupScreen.navigationOptions = () => {
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

export default SignupScreen;