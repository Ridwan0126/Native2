import React, { Component } from 'react'
import { View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            pass: "",
            errorUsername: ""
        }
    }

    onButtonPressed = () => {
        const { username } = this.state

        if (username === "")
            return this.setState({
                errorUsername: "Invalid username"
            })

        return this.props.doLogin({ username })
    }

    onButtonRegisterPressed = () => {
        this.props.navigation.navigate("Register")
    }

    onButtonCameraPressed = () => {
        this.props.navigation.navigate("Camera")
    }

    onButtonSQLitePressed = () => {
        this.props.navigation.navigate("SQLite")
    }

    onButtonAsyncPressed = () => {
        this.props.navigation.navigate("Async")
    }

    render() {
        return (
            <View>
                <Input
                    // type="text"
                    placeholder="Username"
                    errorMessage={this.state.errorUsername}
                    inputContainerStyle={{
                        borderBottomWidth: 0,
                    }}
                    onChangeText={value => this.setState({ username: value })}
                    leftIcon={
                        <Icon
                            name='user'
                            size={24}
                            color='black'
                        />
                    }
                />
                <Input
                    secureTextEntry={true}
                    placeholder="Password"
                    // errorMessage="Invalid password"
                    onChangeText={pass => this.setState({ pass })}
                    leftIcon={
                        <Icon
                            name='key'
                            size={24}
                            color='black'
                        />
                    }
                />
                <Button title="Login" type="outline" onPress={this.onButtonPressed} />
                <Button title="Register" type="outline" onPress={this.onButtonRegisterPressed} />
                <Button title="Camera Screen" type="outline" onPress={this.onButtonCameraPressed} />
                <Button title="SQLite" type="outline" onPress={this.onButtonSQLitePressed} />
                <Button title="AsyncStorage" type="outline" onPress={this.onButtonAsyncPressed} />
            </View>
        );
    }
}

export default Login;