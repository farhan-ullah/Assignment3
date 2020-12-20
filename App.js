import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './Startscreen';
import HistoryScreen from './Historyscreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={FirstScreen} options={{ title:'Home', }} options={{headerShown:false}}/>
        <Stack.Screen name="History Screen" component={HistoryScreen}  />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

