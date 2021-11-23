import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

export default function comp_2({navigation}) {
    return(
        <ScrollView>
            <View style={{
                alignSelf: 'center',
                marginTop: '6%',
                alignItems: 'center', 
                width: '70%',
            }}>
                <Image
                    source={require('./images/cont_2.png')}
                    style={{
                        width: 140,
                        height: 140
                    }}
                />
                <Text style={{
                    fontSize: 26,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'black',
                    marginTop: 5,
                    marginBottom: 25
                }}>
                    Como escolher a escova ideal
                </Text>
            </View>

            <Text style={{
                    backgroundColor: '#5CE1E6',
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'white',
                    padding:15,
                    width: '80%',
                    alignSelf: 'center',
                    textAlign: 'center',
                    borderRadius: 25,
                    marginBottom: 25
                }}>
                O ideal é uma escova com cerdas 
                macias ou extra macias e com a 
                cabeça pequena. 
                </Text>

                <Text style={{
                    backgroundColor: '#5CE1E6',
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'white',
                    padding:15,
                    width: '80%',
                    alignSelf: 'center',
                    textAlign: 'center',
                    borderRadius: 25,
                    marginBottom: 25
                }}>
                Um cabo longo aumenta a distância 
                da mão até a boca e melhora
                muito a aceitação.
                </Text>

                <Text style={{
                    backgroundColor: '#5CE1E6',
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'white',
                    padding:15,
                    width: '80%',
                    alignSelf: 'center',
                    textAlign: 'center',
                    borderRadius: 25,
                    marginBottom: 25
                }}>
                As pessoas com TEA tem alterações
                 sensoriais onde o tamanho da escova
                  pode fazer grande diferença. 
                </Text>

                <Text style={{
                    backgroundColor: '#5CE1E6',
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'white',
                    padding:15,
                    width: '80%',
                    alignSelf: 'center',
                    textAlign: 'center',
                    borderRadius: 25,
                    marginBottom: 25
                }}>
                Para evitar o desconforto da pessoa com TEA, 
                indica-se uma escova de cabo longo para quando 
                não for a própria pessoa com TEA que 
                faça a limpeza bucal.
                </Text>

        </ScrollView>
    );
};
