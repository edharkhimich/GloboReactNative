import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from '../sections/Header.js' 


export class Home extends React.Component {
    render() {
        return (
            <View>
                <Header message = 'Press to login' />
                <Text>This is will be home page</Text>
                <Text>This is my second line</Text>
                <Text>This is third line</Text>
            </View>
        )
    }   
}   