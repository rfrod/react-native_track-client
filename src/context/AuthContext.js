import { AsyncStorage } from 'react-native'
import trackerApi from '../api/tracker'
import {navigate} from '../navigationRef'

import createDataContext from './createDataContext';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signin':
            return { errorMessage: '', token: action.payload };
        case 'clear_error':
            return { ...state, errorMessage: ''};
        case 'signout':
            return { token: null, errorMessage: ''};
        default:
            return state;
    }
}

const signup = (dispatch) => async ({ email, password}) => {
    try{
        const response = await trackerApi.post('/signup', {email, password});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({type: 'signin', payload: response.data})
        navigate('mainFlow');
    }catch(err){
        console.error(err.response.data);
        dispatch({type: 'add_error', payload: 'Something went wrong with sign up.'});
    }
};

const signin = (dispatch) => async ({email, password}) => {
    try{
        const response = await trackerApi.post('/signin', {email, password});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({type: 'signin', payload: response.data})
        navigate('mainFlow');
    }catch(err){
        console.error(err.response.data);
        dispatch({type: 'add_error', payload: 'Something went wrong with sign in.'});
    }   
}

const tryLocalSignin = (dispatch) => async () => {
    const token  = await AsyncStorage.getItem('token');
    if(token){
        dispatch({type: 'signin', payload: token});
        navigate('mainFlow');
    } else {
        navigate('loginFlow');
    }
}

const signout = (dispatch) => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'signout'});
    navigate('loginFlow');
}

const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error'});
}

export const { Context, Provider } = createDataContext (
    authReducer,
    {signup, signin, signout, tryLocalSignin, clearErrorMessage},
    { token: null , errorMessage: '' }
);