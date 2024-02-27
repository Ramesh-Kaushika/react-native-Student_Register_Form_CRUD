// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginP from './Pages/LoginP/LoginP';
import RegisterP from './Pages/RegisterP/RegisterP';
import HomeScreenP from './Pages/HomeScreenP/HomeScreenP';
import ViewPg from './Pages/ViewPg/ViewPg';
import DrawerNav from './components/DrawerNav/DrawerNav';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        {/* screenOptions={{headerShown: false}} */}
        <Stack.Screen name="Drawer" component={DrawerNav}  />
        <Stack.Screen name="Register Form" component={RegisterP} options={{headerShown: false}}  />
        <Stack.Screen name="Login" component={LoginP} options={{headerShown: false}}  />
        <Stack.Screen name="Home Screen" component={HomeScreenP} />
        <Stack.Screen name="View" component={ViewPg} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;