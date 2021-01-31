import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Topbar from './Topbar';

interface propsReceive {
    navigation :any;
}

export default function About(props :propsReceive) {
  return (
    <View>
        <Topbar navigation={props.navigation} />
        <View style={styles.aboutStyle}>
            <Text style={styles.textStyle}>
                Things Todo is created by Me
            </Text>
            <Text style={styles.textStyle}>
                Created in Jan 2021!
            </Text>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
    aboutStyle: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 64,
    },
    textStyle: {
        fontSize: 16,
    }
});
