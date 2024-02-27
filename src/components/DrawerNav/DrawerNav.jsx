import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreenP from '../../Pages/HomeScreenP/HomeScreenP';
import ViewPg from '../../Pages/ViewPg/ViewPg';
import React from 'react';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home Screen" component={HomeScreenP} />
      <Drawer.Screen name="View" component={ViewPg} />
    </Drawer.Navigator>
  );
}