import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function presents({navigation}) {

    const inputValue = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value)
        } catch (e) {
            return(e)
        }
    }
    const [name, setName] = useState('');

    return(
            <ScrollView style={{backgroundColor:'#FFFAFA', height:'100%'}}>
                
                <View style={{alignItems:'center'}}>

                    <Image
                        source={require('./images/pasta1.png')}
                        style={{
                            width:150,
                            height:180,
                            marginTop:'10%',
                            marginRight:-18
                        }}
                    />

                    <View style={{
                        alignItems:'center',
                        marginTop:'3%'
                    }}>
                        <Text style={{
                            fontWeight:'bold',
                            color:'#52665A',
                            fontSize:27
                        }}>Como podemos chamar</Text>

                        <Text style={{
                            fontWeight:'bold',
                            color:'#52665A',
                            fontSize:27
                        }}>você?</Text>
                    </View>

                    <TextInput
                        style={{
                            marginTop:30,
                            width:'76%',
                            borderBottomColor:'#CDC9C9',
                            borderBottomWidth:2,
                            textAlign:'center',
                            fontSize:23,
                            color:'gray'
                        }}

                        value={name}
                        onChangeText={text=>setName(text)}
                        autoCapitalize="words"
                        multiline={false}
                    />

                    <TouchableOpacity 
                    disabled={name != '' ? false:true}
                    onPress={ () => {
                            inputValue('nome', name)
                            navigation.navigate('finish')
                        }
                    }

                    style={{
                        marginTop: 45,
                        marginBottom:30,
                        backgroundColor: name != '' ? '#4B8CFF':'#AAC9FF',
                        borderRadius:21,
                        width:'67%',
                        height:65,
                        alignItems:'center',
                        justifyContent:'center'
                    }}>

                        <Text style={{
                            fontSize:23,
                            color:'white',
                            marginTop:-2
                        }}>Confirmar</Text>
                        
                    </TouchableOpacity>

                </View>

            </ScrollView>
    );
};