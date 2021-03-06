import React, { Component } from 'react'
import { Alert } from 'react-native';
import { Text } from 'react-native';
import { SQLiteContext } from '../config/sqlite';



class SQLDataList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.sqlite.getAllUsers()
            .then(result => {
                console.log("result:", result)
                const rows = result[0].rows

                for (let index = 0; index < rows.length; index++) {
                    const row = rows.item(index);
                    console.log(`row ${index + 1}:`, row);
                }
            })
            .catch(err => Alert.alert("ERROR!!", err.message))
    }

    render() {
        return (
            <Text>Please look the metro's console!!</Text>
        );
    }
}

class SQLData extends Component {
    render() {
        return (
            <SQLiteContext.Consumer>
                {
                    value => <SQLDataList sqlite={value} />
                }
            </SQLiteContext.Consumer>
        );
    }
}

export default SQLData;


/**
 *
 * user: nama, alamat, email, hobby, pekerjaan (football => soccer)
 *      - non relasi => ["admin", "jakarta", "a@a.com", "football", "IT"]
 *      - relasi => ["admin", "jakarta", "a@a.com", "2", "IT"]
 * hobby: 1=swimming, 2=soccer, 3=running
 *
 * select a.*, b.* from user a join hobby b on a.hobby=b.id
 *      - output: ["admin", "jakarta", "a@a.com", "2", "IT", 2, "soccer"],
 *                ["user", "jakarta", "b@a.com", "1", "IT", 1, "swimming"],
 *                ["user2", "jakarta", "b@a.com", "2", "IT", 2, "soccer"]
 */