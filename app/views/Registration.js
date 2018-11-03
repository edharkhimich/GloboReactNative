import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Alert,
    AsyncStorage } from 'react-native'

export class Registration extends React.Component {
    
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            passwordConfirm: ''
        }
    }

    cancelRegister = () => {
        Alert.alert('Registration cancelled')
        this.props.navigation.navigate('HomeRT')
    }

    registerAccount = () => {
        if(!this.state.username) {
            Alert.alert('Please enter a username')
        } else if( this.state.password !== this.state.passwordConfirm ) {
            Alert.alert('Your passwords are different')
        } else if (!this.state.password) {
            Alert.alert('You need to enter your password')
        } else if (!this.state.passwordConfirm){
            Alert.alert('Please confirm your password')
        } else {
            AsyncStorage.getItem(this.state.username, (err, res) => {
                if(res != null){
                    Alert.alert(`${this.state.username} already exists`)
                } else {
                    AsyncStorage.setItem(this.state.username, this.state.password, (err, res) => {
                        Alert.alert(`${ this.state.username } account created`)
                        this.props.navigation.navigate('HomeRT')
                    })
                }
            })
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Register account</Text>
                
                <TextInput 
                    style={styles.editText}
                    onChangeText={(text) => this.setState({username: text})}
                    value={this.state.username}/>

                <Text style={styles.title}>Enter Username</Text>

                <TextInput 
                    style={styles.editText}
                    onChangeText={(pass) => this.setState({password: pass})}
                    value={this.state.password} 
                    secureTextEntry={true}/>

                <Text style={styles.title}>Enter Password</Text>

                <TextInput 
                    style={styles.editText}
                    onChangeText={(pass) => this.setState({passwordConfirm: pass})}
                    value={this.state.passwordConfirm}
                    secureTextEntry={true}/>

                <Text style={styles.title}>Confirm Password</Text>

                <TouchableHighlight underlayColor='#31e981' onPress={this.registerAccount}>
                    <Text style = {styles.buttons}>
                        Register
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight underlayColor='#31e981' onPress={this.cancelRegister}>
                    <Text style = {styles.buttons}>
                        Cancel
                    </Text>
                </TouchableHighlight>
            </View>
        )}
}


const styles = StyleSheet.create ({
    container: {
        alignItems: 'center',
        paddingBottom: '45%',
        paddingTop: '10%',
        flex: 1
    },
    heading: {
        fontSize: 18,
        marginTop: 12
    },
    editText: {
        width: '80%',
        flex: 1,
        padding: 10
    },
    title: {
        flex: 1, 
        fontSize: 14
    },
    buttons: {
        marginTop: 30,
        fontSize: 16
    }
})