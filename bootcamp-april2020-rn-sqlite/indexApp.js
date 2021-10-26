import React, { Component } from 'react'
import { Provider } from "react-redux"
import { createStore } from "redux"
import App from "./App"
import { SQLiteContext, SQLite3 } from './config/sqlite'



const defaultState = {
    userLogin: "Administrator",
    token: "ASDF12345"
}
const reducer = (state = defaultState, action) => {
    console.log("state reducer:", state);
    console.log("action reducer:", action);

    switch (action.type) {
        case "CHANGE":
            return {
                ...state,
                userLogin: action.payload.username
            }
        default:
            return state
    }
}
const store = createStore(reducer)

class IndexApp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Provider store={store}>
                <SQLiteContext.Provider value={new SQLite3()}>
                    <App />
                </SQLiteContext.Provider>
            </Provider>
        );
    }
}

export default IndexApp;