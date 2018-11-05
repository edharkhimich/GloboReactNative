import React from 'react'
import { StyleSheet, Text, ScrollView, Image } from 'react-native'

const aboutGlobo = "Della e fallo le quella al lui, dico da' novella credere di sí piaceri, avvedimento l'uomo che cosí e quella verso nel discerniamo. Dico di durare benignita cosa. E e che per di forse da di, impetrata riguardando seguendo sua."

const whatGlobo = "Faisaient les l'amour et bercé je. D'oiseaux des  poissons trouais dans vrai lenteurs la rousseurs. Pourrit joncs anciens frele et archipels n'auraient d'oiseaux a regrette. Montrer glaciers qu'on soleil électriques désire enfant le, trouais la j'étais les de jeté."


export class About extends React.Component {
    static navigationOptions = {
        header: null
    }


    render() {
        return (
            <ScrollView style={styles.container}>
                <Image style={styles.pics} source={require('../sections/img/office.jpg')}/>

                <Text style={styles.aboutTitle}>Who We Are</Text>
                <Text style={styles.aboutText}>{aboutGlobo}</Text>

                <Image style={styles.pics} source={require('../sections/img/it_logo.png')}/>
                <Text style={styles.aboutTitle}>What We Do</Text>
                <Text style={styles.aboutText}>{whatGlobo}</Text> 

                <Text onPress={() => this.props.navigation.goBack()} style={styles.backButton}>GO BACK</Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        paddingTop: 20,
        paddingBottom: 30,
        backgroundColor: '#ffffff'
    },
    pics: {
        height: 300
    },
    aboutTitle: {
        paddingTop: 10, 
        textAlign: 'center'
    },
    aboutText: {
        paddingBottom: 20
    },
    backButton: {
        paddingBottom: 50,
        textAlign: 'center'
    }
})


