import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native'
import { QuizData } from '../data/QuizQuestions.js'
import { Question } from '../sections/Question.js'


export class Quiz extends Reqct.Component {
    static.navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
        this.state = {
            quesLoaded: false,
            totalScore: 100,
            completeQuiz: false
        }
    }

    componentDidMount(){
        let numQuestions = Array.from(QuizData.questions).length
        this.setState({
            questList: Array.from(QuizData.questions),
            quesLoaded: true,
            numberOfQuestions: numQuestions, 
            incorrect: 0,
            questionAnswered: 0
        })
    }

    updateScore = (penalty) => {
        let tempScore = this.state.totalScore
        let missed = this.state.incorrect
        let questionsTotal = this.state.numberOfQuestions
        let questionsDone = this.state.questionAnswered

        let newScore = tempScore - penalty
        let totalAnswered = questionsDone + 1
        let totalMissed = penalty ? missed + 1 : missed

        this.setState({
            totalScore: newScore,
            incorrect: totalMissed,
            questionAnswered: totalAnswered
        })

        if (totalAnswered === questionsTotal) {
            this.setState({
                completeQuiz: true
            })
        }
    }

    finishQuiz = () => {
        this.props.navigation.navigate(
            'FinishRT', {
                score: this.state.totalScore,
                missed: this.state.incorrect,
                questions: this.state.numberOfQuestions
            }
        )
    }
}

