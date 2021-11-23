import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Starts from './components/starts';
import Presents from './components/presents';
import InputName from './components/inputName';
import FinishPresents from './components/finishPresents';
import Home from './components/home';
import Comp1 from './components/comp_1';
import Comp2 from './components/comp_2';
import Comp3 from './components/comp_3';
import Play from './components/play'

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
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name='finish'
                    component={FinishPresents}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name='home'
                    component={Home}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name='comp1'
                    component={Comp1}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name='comp2'
                    component={Comp2}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name='comp3'
                    component={Comp3}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name='play'
                    component={Play}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};