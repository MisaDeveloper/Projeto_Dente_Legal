import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function home({navigation}) {

    const [name, setName] = useState(null);

    const getName = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key);
            if(value !== null){
                setName(value);
            }
        } catch (e) {
            return(e);
        }
    };

    getName('nome');

    return(
        <ScrollView style={{backgroundColor:'#FFFAFA', height:'100%'}}>
            <View style={{
                flexDirection: 'row',
                marginTop: '7%',
                marginBottom: '7%'
            }}>
                <View style={{
                    justifyContent: 'center',
                    flex: 1,
                    left: '37%'
                }}>
                    <Text style={{
                        fontSize: 30
                    }}>
                        Olá,
                    </Text>
                    <View>
                        <Text style={{
                            fontSize: 28,
                            color: '#4B8CFF',
                            fontWeight: 'bold'
                        }}>
                            {name}
                        </Text>
                    </View>
                </View>

                <View style={{
                    flex: 1,
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    right: '58%'
                }}>
                    <Image
                        source={require('./images/dente_nome.png')}
                        style={{
                            width: 60,
                            height: 60,
                        }}
                    />
                </View>
            </View>


            <View 
            style={{
                alignItems: 'center',
                backgroundColor: '#74E1F360',
                width: '77%',
                alignSelf: 'center',
                padding: 20,
                borderRadius: 35, 
                marginBottom: 40,
                borderLeftColor: '#00000010',
                borderLeftWidth: 5
            }}>
                <Image
                    source={require('./images/cont_1.png')}
                    style={{
                        marginBottom: 7
                    }}
                />

                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 16
                }}>
                    Como escovar os dentes?
                </Text>
            </View>

            <View 
            style={{
                alignItems: 'center',
                backgroundColor: '#74E1F360',
                width: '77%',
                alignSelf: 'center',
                padding: 20,
                borderRadius: 35,
                marginBottom: 40,
                borderLeftColor: '#00000010',
                borderLeftWidth: 5
            }}>
                <Image
                    source={require('./images/cont_2.png')}
                    style={{
                        marginBottom: 7
                    }}
                />

                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 16
                }}>
                    Como escolher a escova ideal?
                </Text>
            </View>

            <View 
            style={{
                alignItems: 'center',
                backgroundColor: '#74E1F360',
                width: '77%',
                alignSelf: 'center',
                padding: 20,
                borderRadius: 35, 
                marginBottom: 40,
                borderLeftColor: '#00000010',
                borderLeftWidth: 5
            }}>
                <Image
                    source={require('./images/cont_3.png')}
                    style={{
                        marginBottom: 7
                    }}
                />

                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 16
                }}>
                    Como escolher o creme dental?
                </Text>
            </View>
        </ScrollView>
    );
}