import React from 'react'
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native'
import { Quiz } from "./Quiz";

export class Finish extends React.Component {
    static navigationOptions = {
        header: null
    }

    exitQuiz = () => {
        Quiz.props.navigation.navigate('HomeRT')

    }

    render() {
        let userScore = this.props.navigation.getParam('score', 'Error - No score returned')

        let questionsMissed = this.props.navigation.getParam('missed', 'Error - no missed questions')

        let totalQuestions = this.props.navigation.getParam('questions', 'Error - no questions returned')


        return (
            <View style={styles.container}>
                <Text>Your quiz scote was {userScore}</Text>
                <Text>You missed on {questionsMissed} out of [totalQuestions} questions</Text>

                <TouchableHighlight onPress={this.exitQuiz} style={styles.button}>
                    <Text>Finish Quiz</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%'
    }
})