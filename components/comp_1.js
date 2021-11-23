import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity, Touchable} from 'react-native';

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
                    source={require('./images/img_comp1.png')}
                    style={{
                        width: 149,
                        height: 140,
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
                    Como escovar 
                    os dentes
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
                    A seguir irá começar o processo
                     de limpeza dos dentes.

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
                    Terá imagens e um crônometro para que a criança possa
                    acompanhar.
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
                    Toda atividade merece um reforço social, 
                    então elogie
                    o seu filho(a) para que ele(a) se sinta 
                    bem e repita mais vezes.

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
                    O local recomendado é no banheiro ou 
                    em um local de escovação apropriado.
                    Recomenda-se ter um espelho para melhor
                    visualização e aprendizado

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
                    marginBottom: 40
                }}>
                    Geralmente, até que a pessoa com TEA adquira a 
                    coordenação motora necessária,
                    ela irá precisar de apoio e 
                    suporte para realizar a limpeza.
                    Aos poucos pode-se ir dando liberdade 
                    após um tempo.

                </Text>

                <TouchableOpacity
                    onPress={()=>navigation.navigate('play')}
                    style={{
                        marginBottom:60,
                        backgroundColor:'#4B8CFF',
                        borderRadius:80,
                        width:'50%',
                        height:65,
                        alignItems:'center',
                        justifyContent:'center',
                        alignSelf: 'center'
                    }}
                >
                    <Text
                        style={{
                            fontSize:20,
                            color:'white',
                            marginTop:-2,
                            fontWeight: 'bold'
                        }}
                    >Próximo >></Text>
                </TouchableOpacity>
        </ScrollView>
    );
};