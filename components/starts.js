import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { CommonActions } from '@react-navigation/native';

export default function starts({navigation}) {

    function start() {
        setTimeout(function(){
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{name: 'presents'}]
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