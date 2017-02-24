import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';

class loginView extends Component{
    render(){
        return(
            <View style={styles.container}>
              <Image source={require('./img/icon.png')} style={styles.iconStyle}/>
                  <TextInput placeholder={'请输入用户名'}  style={styles.textInputStyle}/>
                  <TextInput placeholder={'请输入密码'} password={true} style={styles.textInputStyle} />
              <View style={styles.loginBtnStyle}>
                <Text style={{color:'white'}}>登录</Text>
              </View>
              <View style={styles.settingStyle}>
                <Text style={{color:'blue'}}>无法登录</Text>
                <Text style={{color:'blue'}}>新用户</Text>
              </View>
               <View style={styles.otherLoginStyle}>
                <Text>其他登录方式：</Text>
                    <Image source={require('./img/icon3.png')} style={styles.otherImageStyle}/>
                    <Image source={require('./img/icon7.png')}  style={styles.otherImageStyle}/>
                    <Image source={require('./img/icon8.png')}  style={styles.otherImageStyle}/>
                  </View>
                </View>
            );
                }        
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#dddddd',
        alignItems:'center'
    },
    iconStyle:{
        marginTop:20,
        marginBottom:20,
        width:80,
        height:80,
        borderRadius:40,
        borderWidth:1,
        borderColor:'white'
    },
    textInputStyle:{
        height:48,
        width:350,
        backgroundColor:'white',
        marginBottom:1,
        textAlign:'center'
    },
    loginBtnStyle:{
        height:35,
        width:350,
        backgroundColor:'blue',
        marginTop:20,
        marginBottom:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8
    },
    settingStyle:{
        flexDirection:'row',
        width:350,
        justifyContent:'space-between'
    },
    otherLoginStyle:{
        flexDirection:'row',
        alignItems:'center',
        position:'absolute',
        bottom:10,
        left:20
    },
    otherImageStyle:{
        width:50,
        height:50,
        borderRadius:25,
        marginLeft:8
    }
});
module.exports=loginView;