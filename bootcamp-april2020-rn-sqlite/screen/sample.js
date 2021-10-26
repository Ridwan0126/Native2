import React, { Component } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { SafeAreaProvider } from "react-native-safe-area-context"



class Sample extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    getRoutes = () => {
        const { route, navigation } = this.props
        const routes = navigation.getState().routeNames
        return Object.values(routes).filter(screen => screen !== route.name)
    }

    componentDidMount() {
        console.log("Params:", this.props.route.params);
    }

    render() {
        // console.log("screens:", this.getRoutes())
        const { navigation, onLogin } = this.props
        return (
            <SafeAreaProvider>
                <SafeAreaView>
                    <View>
                        {
                            this.getRoutes().map(route => (
                                <TouchableOpacity
                                    onPress={() => navigation.navigate(route, { payload: "ok" })}
                                    key={route}
                                    style={{
                                        backgroundColor: "lightgrey",
                                        padding: 10,
                                        margin: 10,
                                    }}
                                >
                                    <Text>{route}</Text>
                                </TouchableOpacity>
                            ))
                        }
                        {onLogin &&
                            <TouchableOpacity
                                onPress={onLogin}
                                style={{
                                    backgroundColor: "lightblue",
                                    padding: 10,
                                    margin: 10,
                                }}
                            >
                                <Text>Log In</Text>
                            </TouchableOpacity>
                        }
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
        );
    }
}

export default Sample;