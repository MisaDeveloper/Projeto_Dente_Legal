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
                    source={require('./images/img_comp3.png')}
                    style={{
                        width: 149,
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
                    Como escolher 
                    o creme dental
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
                    Indica-se um creme dental sem sabor atraente 
                    (uva, morango, etc.), pois desta forma a criança
                    acaba cuspindo o dentifrício
                    com maior facilidade ao invés de ingeri-lo. 
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
                    A quantidade que se coloca na escova de dente,
                    tem que ser pequena.
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
                    Mas lembrando que a recomendação do profissional
                    odontologico, prevalece.

                </Text>

        </ScrollView>
    );
};