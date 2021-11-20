import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import { CommonActions } from '@react-navigation/native';

export default function presents({navigation}) {

    function goToHome() {
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{name: 'home'}]
            })
        )
    }

    return(
            <ScrollView style={{backgroundColor:'#FFFAFA', height:'100%'}}>
                
                <View style={{alignItems:'center'}}>

                    <Image
                        source={require('./images/pasta2.png')}
                        style={{
                            width:150,
                            height:180,
                            marginTop:'15%',
                        }}
                    />

                    <View style={{
                        alignItems:'center',
                        marginTop:'3%'
                    }}>
                        <Text style={{
                            fontWeight:'bold',
                            color:'#52665A',
                            fontSize:35
                        }}>Legal!</Text>
                    </View>

                    <View style={{
                        paddingLeft:20,
                        paddingRight:20,
                        marginTop:30
                    }}>
                        <Text style={{
                            color:'#5C6660',
                            textAlign:'center',
                            fontSize:18
                        }}>
                            Agora vamos ajuda-lo a cuidar dos
                        </Text>
                        <Text style={{
                            color:'#5C6660',
                            textAlign:'center',
                            fontSize:18
                        }}>
                            dentinhos do(a) seu filhinho(a) com muito carinho.
                        </Text>
                    </View>

                    <TouchableOpacity 
                    onPress={() => goToHome()}
                    style={{
                        marginTop: 45,
                        marginBottom:30,
                        alignItems:'center',
                        width:'100%'
                    }}>
                        <View style={{
                            backgroundColor:'#4B8CFF',
                            borderRadius:21,
                            width:'67%',
                            height:65,
                            alignItems:'center',
                            justifyContent:'center'
                        }}>
                            <Text style={{
                                fontSize:20,
                                color:'white',
                                marginTop:-2
                            }}>Vamos começar</Text>
                        </View>
                    </TouchableOpacity>

                </View>

            </ScrollView>
    );
};