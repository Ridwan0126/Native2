import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
   Image 
} from 'react-native';

export default class Logo extends Component {
	render(){
		return(
			<View style={styles.container}>
				<Image  style={{width:60, height: 110}}
          			source={require('../../images/logo.png')}/>
          		<Text style={styles.logoText}>TravelSaya</Text>	
  			</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  logoText : {
  	marginVertical: 15,
  	fontSize:22,
  	color:'#ffffff'
  }
});