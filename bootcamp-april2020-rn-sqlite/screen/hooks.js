import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux"

function Hooks(props) {
    const { usernameLogin, tokenLogin } = props

    return (
        <View>
            <Text>{usernameLogin}</Text>
            <Text>{tokenLogin}</Text>
        </View>
    )
}

const mapStateToProps = state => ({
    usernameLogin: state.userLogin,
    tokenLogin: state.token
})

export default connect(mapStateToProps)(Hooks);