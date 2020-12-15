import React, {useState} from 'react'
import { StyleSheet } from 'react-native'
import {Text, Button, Input} from 'react-native-elements'
import Spacer from '../components/Spacer';

const AuthForm = ({headerText, errorMessage, onSubmit, submitButtonText}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
        <Spacer><Text h3>{headerText}</Text></Spacer>
        <Spacer>
            <Input 
                label="Email" 
                value={ email } 
                onChangeText={(newEmail) => setEmail(newEmail)}
                autoCapitalize='none'
                autoCorrect={false}
            />
        </Spacer>
        <Spacer>
            <Input 
                label="Password" 
                value={password} 
                onChangeText={setPassword}
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry
            />
        </Spacer>
        {errorMessage ? 
            <Spacer>
                <Text style={styles.error}>{errorMessage}</Text>
            </Spacer>
            : null}
        <Spacer>
            <Button 
            title={submitButtonText}
            onPress={() => onSubmit({email,password})}
            />
        </Spacer>
        </>
    );

}

const styles = StyleSheet.create({
    error: {
        color: 'red',
        fontSize: 16
    }
});

export default AuthForm;