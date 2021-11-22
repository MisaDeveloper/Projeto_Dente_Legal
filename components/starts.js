import React from 'react';
import {View, Image} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function starts({navigation}) {

    const getName = async () => {
        try {
            const value = await AsyncStorage.getItem('nome');
            if(value != null) {
                return('home')
            } else {
                return('presents')
            }
        } catch (e) {
            return(e);
        }
    };

    const valida = getName();

    function start() {
        setTimeout(function(){
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{name: valida['_W']}]
                })
            )
        }, 3000);
    };

    return(
        <View style={{
            backgroundColor:'#FFFAFA',
            width:'100%',
            height:'100%',
            alignItems:'center',
            justifyContent:'center'
        }}>
            <Image
                source={require('./images/logo.png')}
                style={{
                    width:'50%',
                    height:'30%'
                }}
            />

            {start()}

        </View>
    );
};