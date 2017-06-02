/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
} from 'react-native';
import BottomView from './components/bottomview';

export default class BitCoinQuery extends Component {

 constructor(props){
    super(props);
    this.state = { bitcoin:'00',
                    latcoin:'00',
                    showText: true,
                    txt:'hello'
                  };
    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState(previousState => {  
        this.getnetwork();
        return { showText: !previousState.showText };
      });
    }, 5000);
    this.getnetwork();
  }
  

  render() {
         
    let btcointxt = '比特币价格：'+this.state.bitcoin; //this.state.showText?'比特币价格：'+this.state.bitcoin:'';
    let ltcointxt = '莱特币价格：'+this.state.latcoin; //this.state.showText?'莱特币价格：'+this.state.latcoin:'';
    return (
      <View style={styles.container}>
          <View style={styles.innerview}>
              <Text style={styles.welcome}>
                  {btcointxt}
              </Text>
              <Text style={styles.welcome}>
                  莱特币价格：{this.state.latcoin}
              </Text>
          </View>
          <BottomView></BottomView>

      </View>
    );
  }

buttonTap=()=>{

}


  getnetwork=()=>{ 

    fetch( 'https://www.okcoin.cn/api/tickerinfo2.do?isClient=3&clientContext=iPhone_8.1.3&clientVersion=1.9.0' 
    ).then((response)=>response.json())
    .then((jsondata) =>{
        console.log(jsondata);  
        //alert(jsondata.result[0].last);
        this.setState({bitcoin : jsondata.result[0].last}); 
        this.setState({latcoin : jsondata.result[4].last}); 
      
    })
    .catch((error)=>{
      alert(error);
      console.warning(error);
    });

  };
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5FFFF',
  },

  innerview:{
      flex:2,
      flexDirection:'column',
      justifyContent: 'center',
      alignItems: 'center',
    margin:20,
  },

  button: {
    width:200,
    height:200,
    alignItems:'center',
  },

  welcome: {
    fontSize: 20,
      color:'#ff00ff',
  },

  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('BitCoinQuery', () => BitCoinQuery);
