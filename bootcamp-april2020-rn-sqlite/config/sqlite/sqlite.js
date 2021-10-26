import SQLite from "react-native-sqlite-storage";

class SQLite3 {
    constructor() {
        SQLite.DEBUG(true)
        SQLite.enablePromise(true)

        this.conn = null

        SQLite.openDatabase("project01.dat", "1.0", "Test Database", 200000)
            .then(tx => {
                this.conn = tx
                console.log("tx:", tx)
                tx.executeSql("create table if not exists user(username text primary key, password text)")
                    .catch(err => console.log("ERRRRR:", err))
                    .finally(() => {
                        console.log("finally")
                        // tx.executeSql("select * from user")
                        //     .then(result => {
                        //         console.log("result:", result)
                        //         const rows = result[0].rows

                        //         for (let index = 0; index < rows.length; index++) {
                        //             const row = rows.item(index);
                        //             console.log(`row ${index + 1}:`, row);
                        //         }
                        //     })
                        // tx.executeSql("insert into user values(?, ?)", ["admin", "admin"])
                        // .then(() => console.info("Successfuly insert default user!"))
                        // .catch(err => console.warn("Failed create default user!!", err))
                        // .finally(() => console.log("Berhasil!!"))
                    })
            })
            .catch(err => console.error("SQLite Error:", err))
    }

    getAllUsers = () => this.conn.executeSql("select * from users")

    runQuery = (query, params = []) => this.conn.executeSql(query, params)
}

export default SQLite3