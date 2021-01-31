import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
//import { SafeAreaView } from 'react-native-safe-area-context';

import Home from './src/Home';
import About from './src/About';

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <StatusBar style="auto"/>

      <Drawer.Navigator
        initialRouteName="Home"
        drawerContentOptions={{activeTintColor: '#004'}}
        drawerContent={props => (
        <View style={styles.drawerContainer}>

          <View style={styles.drawerHeadingArea}>
            <Text style={styles.drawerHeadingAreaText}>Main Menu</Text>
          </View>
          
          <DrawerItemList {...props} />

          {
            /*
              <TouchableOpacity style={styles.drawerItem} onPress={() => props.navigation.navigate('Home')}>
                <Text style={styles.drawerItemText}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.drawerItem} onPress={() => props.navigation.navigate('About')}>
                <Text style={styles.drawerItemText}>About</Text>
              </TouchableOpacity>
          */
          }

        </View>
      )}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  drawerHeadingArea: {
    height: 120,
    backgroundColor: '#58e',
    justifyContent: 'flex-end',
    paddingBottom: 42,
    paddingLeft: 12,
  },
  drawerHeadingAreaText: {
    fontSize: 21,
  },
  drawerItem: {
    height: 42,
    marginLeft: '5%',
    paddingTop: 12,
    width: '90%'
  },
  drawerItemText: {
    fontSize: 18,
  }
});

