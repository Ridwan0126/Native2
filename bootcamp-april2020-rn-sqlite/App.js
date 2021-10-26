import React, { Component } from 'react'
import { View, Text, Button as ButtonRN, SafeAreaView, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login, Home, Sample, Hooks, CameraScreen, SQLData, Async } from './screen';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator()

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Administrator",
      pass: "",
      errorUsername: "",
      userLogin: ""
    }
  }

  onButtonPressed = () => {
    console.log(this.state);
  }

  onLogin = obj => {
    this.setState({
      userLogin: obj.username
    })
  }

  renderScreen = () => {
    const { userLogin } = this.state
    if (userLogin === "")
      return <Login doLogin={this.onLogin} />

    return <Home userLogin={userLogin} />
  }

  componentDidMount() {
    AsyncStorage.setItem("dataApp", JSON.stringify(this.state))
  }

  render() {
    const { userLogin } = this.state
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: true }} initialRouteName="Login">
          {userLogin === "" ?
            // Screen before auth
            <>
              <Stack.Screen name="Login" children={(props) => <Login {...props} doLogin={this.onLogin} />} />
              {/* <Stack.Screen name="Register" children={(props) => <Sample {...props} onLogin={() => this.onLogin("User")} />} /> */}
              <Stack.Screen name="Register" children={(props) => <Hooks {...props} onLogin={() => this.onLogin("User")} />} />
              <Stack.Screen name="Camera" component={CameraScreen} />
              <Stack.Screen name="SQLite" component={SQLData} />
              <Stack.Screen name="Async" component={Async} />
            </>
            :
            // screen after auth
            <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="About">
                {(props) => <Sample {...props} />}
              </Stack.Screen>
              <Stack.Screen name="Contact" children={(props) => <Sample {...props} />} />
            </>
          }
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: "red",
    fontSize: 30
  },
  button1: {
    backgroundColor: "grey",
    borderRadius: 4,
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 24,
    color: "white"
  }
})

export default App;

/**
 *
 * Latihan:
 *        - Buat tampilan login semenarik mungkin
 *
 *
 * Latihan:
 *      - Buat home page untuk user login
 *      - Buat list user dengan ketentuan seperti berikut:
 *            - seperti contact list pada android (https://assets.justinmind.com/wp-content/uploads/2018/06/list-ui-design-prototyping-contact-list-order-3.png)
 *            - memiliki icon foto/initial
 *      - Buat detail kontak
 *
 *
 * Latihan:
 *      - Implementasikan tugas sebelumnya menggunakan navigator
 *      - Implementasikan fungsi edit dan delete pada list
 *      - Implementasikan drawer navigator/tab navigator
 *      - Gunakan State & Props (Auth)
 *
 *
 * Latihan:
 *      - Buat aplikasi todo list
 *
 *
 * TEST:
 *      - Fitur:
 *              - Halaman Login
 *              - Halaman seperti WA (tanpa foto, tanpa search)
 *              - Menu di "titik 3" hanya fitur logout
 *              - Data dummy per halaman minimal 15 data
 *      - Peraturan:
 *                  - gunakan branch baru (repo boleh yang sudah ada/baru)
 *                  - commit per 30 menit (message commit boleh bebas)
 *                  - waktu 150 menit
 *
 *
 * Latihan:
 *        - Teruskan project dari Test (WA KW)
 *        - Buat screen untuk chat baru:
 *            - Klik ikon chat baru
 *            - Pilih kontak
 *            - Screen chat
 *        - Buat minimal 2 user yang berbeda:
 *            - Buat dummy data yang berbeda untuk setiap user
 *        - Gunakan REDUX
 *
 *
 * Latihan:
 *      - Teruskan project dari Test (WA KW)
 *      - Tambah 1 menu Profile pada icon titik tiga (sibling logout)
 *      - Buat 1 screen profile yang berisi (semuanya bisa di edit):
 *          - foto
 *          - nama
 *          - email
 *          - no hp
 *
 * Latihan:
 *      - Gunakan latihan sebelumnya
 *      - Simpan detail profile ke dalam sqlite
 *      - Simpan list chat, status, contact ke dalam sqlite
 */