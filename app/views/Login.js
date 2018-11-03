import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Alert,
    AsyncStorage } from 'react-native'


export class Login extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    cancelLogin = () => {
        Alert.alert('Login cancelled')
        this.props.navigation.navigate('HomeRT')
    }   

    loginUser = () => {

        if (!this.state.username) {
            Alert.alert('Please enter your username')
        } else if (!this.state.password) {
            Alert.alert('Please enter your password')
        } else {
            AsyncStorage.getItem(this.state.username, (err, result) => {

                // TODO Set check statement on if the password is incorrect 
    
                console.log('TCL: Login -> loginUser -> result', result)

                if(result !== null) {
                            
                    if(result !== this.state.password) {
                        Alert.alert('Password incorrect')
                    } else {
                        AsyncStorage.setItem('loginKey', this.state.username, (err, res) => {
                            Alert.alert(`${this.state.username} logged in`)
                            this.props.navigation.navigate('HomeRT')
                        })
                    }
                } else {
                    Alert.alert(`No account with username: ${this.state.username}`)
                }
            })
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Login</Text>

                <TextInput 
                    style={styles.editText}
                    onChangeText={(text) => this.setState({username: text})}
                    value={this.state.username} />
                <Text style={styles.title}>Username</Text>

                <TextInput
                    style={styles.editText}
                    onChangeText={(pass) => this.setState({password: pass})}
                    value={this.state.password} />
                <Text style={styles.title}>Password</Text>

                <TouchableHighlight underlayColor={'#31e981'} onPress={this.loginUser}>
                    <Text style={styles.buttons}>Login</Text>
                </TouchableHighlight>

                <TouchableHighlight underlayColor={'#31e981'} onPress={this.cancelLogin}>
                     <Text style={styles.buttons}>Cancel</Text>
                </TouchableHighlight>  
            </View>
        )
    }
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