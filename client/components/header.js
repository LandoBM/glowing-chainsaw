import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native'
import Timeline from './timeline';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Landon's</Text>   
                <Text style={styles.text2}>World</Text>
                <Button
                    style={styles.button}
                    onPress={Timeline}
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        )
    }
}

const styles =  StyleSheet.create({
    container: {
        backgroundColor: 'black',
        opacity: 100
    },

    text: {
        position: 'absolute',
        top: 420,
        left: 90,
        fontSize: 50,

    },

    text2: {
        position: 'absolute',
        top: 455,
        left: 200,
        fontSize: 50
    },
    title: {
        color: '#68a0cf',
        textAlign: 'center',
        top: 50,
        bottom: 50
    },
    button: {
        marginTop: 30,
        paddingHorizontal: 10,
        width: 70,
        height: 70,
    }
})