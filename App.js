import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Starts from './components/starts';
import Presents from './components/presents';
import InputName from './components/inputName';
import FinishPresents from './components/finishPresents';

const Stack = createStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='start'>
                <Stack.Screen
                    name='start'
                    component={Starts}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name='presents'
                    component={Presents}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name='input'
                    component={InputName}
                    options={{
                        title:''
                    }}
                />

                <Stack.Screen
                    name='finish'
                    component={FinishPresents}
                    options={{
                        title:''
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};