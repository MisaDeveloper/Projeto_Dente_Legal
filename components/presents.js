import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';



export default function presents({navigation}) {
    return(
        <ScrollView style={{backgroundColor:'#FFFAFA', height:'100%'}}>
            
            <View style={{alignItems:'center'}}>
                <View style={{
                    alignItems:'center',
                    marginTop:'11%'
                }}>
                    <Text style={{
                        fontWeight:'bold',
                        color:'#4B8CFF',
                        fontSize:30
                    }}>Auxilie na limpeza</Text>

                    <Text style={{
                        fontWeight:'bold',
                        color:'#4B8CFF',
                        fontSize:30
                    }}>bucal correta do</Text>

                    <Text style={{
                        fontWeight:'bold',
                        color:'#4B8CFF',
                        fontSize:30
                    }}>seu filho</Text>
                </View>

                <Image
                    source={require('./images/apresentacao.png')}
                    style={{
                        width:'90%',
                        height:210,
                        marginBottom:30,
                        marginTop:30
                    }}
                />
                </View>

                <View style={{
                    paddingLeft:20,
                    paddingRight:20
                }}>
                    <Text style={{
                        color:'#5C6660',
                        textAlign:'center',
                        fontSize:20
                    }}>
                        Não esqueça mais de cuidar da saúde
                    </Text>
                    <Text style={{
                        color:'#5C6660',
                        textAlign:'center',
                        fontSize:20
                    }}>
                        bucal do seu filho.
                    </Text>
                    <Text style={{
                        color:'#5C6660',
                        textAlign:'center',
                        fontSize:20
                    }}>
                        Seja o melhor dentista que
                    </Text>
                    <Text style={{
                        color:'#5C6660',
                        textAlign:'center',
                        fontSize:20
                    }}>
                        seu filho precisa.
                    </Text>

                    <TouchableOpacity 
                    onPress={ () => navigation.navigate('input') }
                    style={{
                        marginTop: 35,
                        backgroundColor:'#4B8CFF',
                        borderRadius:15,
                        width:70,
                        height:70,
                        alignItems:'center',
                        justifyContent:'center',
                        alignSelf: 'center'
                    }}>

                            <Text style={{
                                fontSize:40,
                                color:'white',
                                marginTop:-5
                            }}>></Text>
                            
                    </TouchableOpacity>

            </View>

        </ScrollView>
    );
};