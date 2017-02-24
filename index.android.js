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
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';



{/*export default*/} 
class AwesomeProject3 extends Component {
    render() {
        return (
          <View style={styles.container}>
        <Text style={{backgroundColor:'red',width:80}}>第一个</Text>
        <Text style={{backgroundColor:'green',width:90}}>第二个</Text>
        <Text style={{backgroundColor:'blue',width:100}}>第三个</Text>
        <Text style={{backgroundColor:'yellow',width:120}}>第四个</Text>
      </View>
    );
}
}

const styles = StyleSheet.create({
    container: {
        //flex:1,
        backgroundColor:'purple',
        // marginTop:25,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        flexWrap:'wrap'
        //width:300,
        //height:100,
        ////改变主轴方向 默认是竖向
        //flexDirection:'row'
    }
});
/*-----------第三个实例程序-----------------*/
class CFlexBoxDemo2 extends Component{
    render(){
        return (
               <View style={styles2.container}>
                <Text style={{backgroundColor:'red',flex:1,height:60,alignSelf:'flex-start'}}>第一个</Text>
                <Text style={{backgroundColor:'green',flex:2,height:70}}>第二个</Text>
                <Text style={{backgroundColor:'blue',flex:2,height:80}}>第三个</Text>
                <Text style={{backgroundColor:'yellow',flex:1,height:90}}>第四个</Text>
              </View>
            );
}
}
const styles2 = StyleSheet.create({
    container: {
        //flex:1,
        backgroundColor:'purple',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    }
});
/*********************第四个实例程序****************************/
var Dimensions=require("Dimensions");
class CFlexBoxDemo3 extends Component{
    render(){
        return (
               <View style={style3.outViewStyle}>
                 <Text>当前屏幕的宽度：{Dimensions.get('window').width}</Text>
                 <Text>当前屏幕的高度：{Dimensions.get('window').height}</Text>
                 <Text>当前屏幕的分辨率：{Dimensions.get('window').scale}</Text>
               </View>
               );
                 }
};
const style3=StyleSheet.create({
    outViewStyle:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        backgroundColor:'red'
    }
})
/***************************************************************/
var BadgeData=require('./BadgeData.json');
var Dimensions=require('Dimensions');
var {width}=Dimensions.get('window');
var cols=3;
var boxwidth=100;
var vMargin=(width-cols*boxwidth)/(cols+1);
var hMargin=25;

class AImageDemo extends Component{
    render(){
        return(
            <View style={AImagestyles.container}>
    {this.renderAllBadge()}
   </View>
);
    }
    renderAllBadge(){
        var allBadge=[];
        for(var i=0;i<BadgeData.data.length;i++){
            var badge=BadgeData.data[i];
            allBadge.push(
                <View key={i} style={AImagestyles.outViewStyle}>
                    <Image source={{uri:badge.icon}} style={AImagestyles.imageStyle}/>
                    <Text style={AImagestyles.titleStyle}>
                    {badge.title}
            </Text>
        </View>
        );
                    }
    return allBadge;
    }
    }
    const AImagestyles=StyleSheet.create({
        container:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    outViewStyle:{
        backgroundColor:'#F5FCFF',
        alignItems:'center',
        width:boxwidth,
        height:boxwidth,
        marginLeft:vMargin,
        marginTop:hMargin
    },
    imageStyle:{
        width:80,
        height:80
    },
    titleStyle:{

    }
    });
        /**********************************************************/
        class BTextInputDemo extends Component{
            render(){
                return(
                    <View style={BTextInputDemoStyles.container}>
                       <TextInput 
                        style={BTextInputDemoStyles.inputStyle}
            clearButtonMode={'always'}></TextInput>
        </View>
)
            }        
        }
        const BTextInputDemoStyles=StyleSheet.create({
            container:{
                flex:1,
                backgroundColor:'#F5FCFF',
                // marginTop:10
            },
            inputStyle:{
                width:300,
                height:40,
                //backgroundColor:"gray"
                borderWidth:1,
                borderColor:'#e8e8e8'
            }
        })
        /*******************************************************************/
        var LoginView=require('./LoginView.js')
        class loginViewDemo extends Component{
            render(){
                return(
                    <LoginView/>
                    )
            }
        }
        /***************************************************************/
        var DTouchabelDemo=React.createClass({
            getDefaultProps(){
                return {
                    age:18
                }
            },
            getInitialState(){
                return{
                    title:'不透明触摸'
                }
            },
            render(){
                return(
                    <View ref="topView" style={dTouchabelStyles.container}>
                      <TouchableOpacity
                      onPress={()=>this.activeEvent('点击')}
    onPressIn={()=>this.activeEvent('按下')}
    onPressOut={()=>this.activeEvent('抬起')}
    onLongPress={()=>this.activeEvent('常按')}
              >
              <View style={dTouchabelStyles.innerViewStyle}>
                   <Text>常用事件</Text>
               </View>
                 </TouchableOpacity>
                 <View>
                   <Text>{this.state.title}</Text>
                   <Text>{this.props.age}</Text>
                 </View>
                </View>
            );
              },
    activeEvent(event){
        this.setState({
            title:event
        });
        this.refs.topView
    }
});
{/*class DTouchabelDemo extends Component{
    render(){
        return(
            <View style={dTouchabelStyles.container} onPress={this.renderPress()}>
              <TouchableOpacity>
              <View style={dTouchabelStyles.innerViewStyle}>
                <Text>我是文本,但是可以点击</Text>
              </View>
             </TouchableOpacity>
            </View>
            );
                }
    renderPress(){
        alert(1);
    }
}*/}
const dTouchabelStyles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF'
    },
    innerViewStyle:{

    }
});
/************************************************/
var TimerMixin = require('react-timer-mixin');
var Dimensions=require('Dimensions');
var {width}=Dimensions.get('window');

var ImageData=require('./ImageData.json');
var FScrollViewDemo1=React.createClass({
    mixins:[TimerMixin],
    getInitialState(){
        return{
            currentPage:0
        }
    },
    render(){
        return (
            <View style={FScrollViewDemo1Styles.container}>
              <ScrollView 
                 horizontal={true}
                 showsHorizontalScrollIndicator={false}
                 pagingEnabled={true}
                 onMomentumScrollEnd={(e)=>this.onAnimationEnd(e)}
                 >
                {this.renderAllImage()}
              </ScrollView>
              <View style={FScrollViewDemo1Styles.pageViewStyle}>
                {this.renderPageCircle()}
               </View>
            </View>
            );
},
renderAllImage(){
    var allImage=[];
    var imgsArr=ImageData.data;
    for(var i=0;i<imgsArr.length;i++){
        var imgItem=imgsArr[i];
        allImage.push(
            <Image key={i} source={{uri:imgItem.img}} style={{width:width,height:120}}/>
                );
}
return allImage;
},
renderPageCircle(){
    var indicatorArr=[];
    var style;
    var imgsArr=ImageData.data;
    for(var i=0;i<imgsArr.length;i++){
        style=(i==this.state.currentPage)?{color:'orange'}:{color:'white'};
        indicatorArr.push(
            <Text key={i} style={[{fontSize:25},style]}>&bull;</Text>
    );
}
return indicatorArr;
},
onAnimationEnd(e){
    var offSetx=e.nativeEvent.contentOffset.x;
    var currentPage=Math.floor(offSetx/width);
    //console.log(currentPage);
    this.setState({
        currentPage:currentPage
    });
}
});
const FScrollViewDemo1Styles=StyleSheet.create({
    container:{
       
    },
    pageViewStyle:{
        width:width,
        height:25,
        backgroundColor:'rgba(0,0,0,0.2)',
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        alignItems:'center'
    }
});
AppRegistry.registerComponent('AwesomeProject3', () => FScrollViewDemo1);