import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

interface propsReceive {
    navigation :any;
}

export default function Topbar(props :propsReceive) {
  function handleMenuClick() :void {
    props.navigation.openDrawer();
  }

  return (
    <View style={styles.topbar}>
    <TouchableOpacity  onPress={handleMenuClick}>
        <Icon name='three-bars' size={32} color='#000'/>
    </TouchableOpacity>
    <Text style={styles.topbarText}>
        Things Todo
    </Text>
    </View>
  );
}
      
const styles = StyleSheet.create({
  topbar: {
    alignSelf: 'stretch',
    backgroundColor: '#58e',
    flexDirection: 'row',
    height: 42,
    padding: 5,
  },
  topbarText: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 12,
  },
});
