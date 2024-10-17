import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeScreen} from './screens/HomeScreen';
import { ScreenEditInput } from './screens/ScreenEditInput';
import { NewNoteButton } from './components/NewNoteButton';
const Stack = createNativeStackNavigator();
export default function App() {  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="ScreenHome" 
          component={HomeScreen}
          options={({navigation})=>({
            title:"Note App",
            headerRight: ()=>(
              <NewNoteButton/>
            )
          })
        }
        />
        <Stack.Screen name="ScreenEditInput" component={ScreenEditInput}/>

      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}


