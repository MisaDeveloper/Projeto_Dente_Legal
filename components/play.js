import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity, Touchable} from 'react-native';

export default function play({navigation}) {
    return(
        <View>
            <View style={{
                backgroundColor: '#C4C4C460',
                width: 300,
                height: 300,
                borderRadius:150,
                alignSelf: 'flex-end',
                marginTop: '35%',
                marginRight: -80
            }}></View>

            <View style={{
                backgroundColor: '#C4C4C460',
                width: 65,
                height: 65,
                borderRadius:40,
                alignSelf: 'flex-start',
                marginTop: '-50%',
                marginLeft: 25
            }}></View>

            <View style={{
                backgroundColor: '#C4C4C460',
                width: 200,
                height: 200,
                borderRadius:100,
                alignSelf: 'flex-start',
                marginTop: '5%',
                marginLeft: -25
            }}></View>

            <View style={{
                backgroundColor: '#C4C4C460',
                width: 90,
                height: 90,
                borderRadius:45,
                alignSelf: 'flex-end',
                marginTop: '-15%',
                marginRight: 90
            }}></View>

            <View>
                <Text>
                    Muito bem!
                </Text>
                <Text>
                    Tudo pronto para começar?
                </Text>
            </View>
        </View>
    );
};