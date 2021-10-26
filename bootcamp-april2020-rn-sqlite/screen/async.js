import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react'
import { View, Text } from 'react-native';



class Async extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        }
    }
    async componentDidMount() {
        let result = await AsyncStorage.getItem("dataApp")
        result = result ? JSON.parse(result) : {}
        console.log("Result:", result.username)
        this.setState({
            username: result.username
        })
    }
    render() {
        return (
            <View>
                <Text>AsyncStorage Page</Text>
                <Text>Hi, {this.state.username}</Text>
            </View>
        );
    }
}

export default Async;