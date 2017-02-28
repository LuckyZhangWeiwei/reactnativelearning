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
  ScrollView,
  ListView,
  Alert,
  NativeModules
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
    getDefaultProps(){
        return {
            duration:3000
        }
    },
    getInitialState(){
        return{
            currentPage:0
        }
    },
    render(){
        return (
            <View style={FScrollViewDemo1Styles.container}>
              <ScrollView 
                 ref="scrollView"
                 horizontal={true}
                 showsHorizontalScrollIndicator={false}
                 pagingEnabled={true}
                 onMomentumScrollEnd={(e)=>this.onAnimationEnd(e)}
                 onScrollBeginDrag={this.onScrollBeginDrag}
                 onScrollEndDrag={this.onScrollEndDrag}
                 >
                {this.renderAllImage()}
              </ScrollView>
              <View style={FScrollViewDemo1Styles.pageViewStyle}>
                {this.renderPageCircle()}
               </View>
            </View>
            );
},
componentDidMount(){
this.startTimer();
},
onScrollBeginDrag(){
    this.clearInterval(this.timer);
},
onScrollEndDrag(){
    this.startTimer();
},
startTimer(){
    var scrollView=this.refs.scrollView;
    var imgsCount=ImageData.data.length;
    this.timer=this.setInterval(function(){
       var activePage=0;
       if((this.state.currentPage+1)>=imgsCount){
           activePage=0;
       }else{
           activePage=this.state.currentPage+1;
       }
       this.setState({
         currentPage:activePage
       });
       var offsetX=activePage*width;
       scrollView.scrollResponderScrollTo({
           x:offsetX,
           y:0,
           animated:true
       });
   },this.props.duration); 
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
/**********************************************************************/
// 导入json数据
var Wine = require('./Wine1.json'); // 数组

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

var GListViewDemo = React.createClass({
    // 设置初始值
    getInitialState(){
        // 1.1 设置数据源
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        // 1.2 设置返回数据
        return{
            dataSource: ds.cloneWithRows(Wine)  // cloneWithRows 放置数组
        }
    },

    // 设置render函数
    render(){
        return(
           <ListView
               dataSource={this.state.dataSource}  // 数据源
             renderRow={this.renderRow}
         />
      );
},

// 返回具体的cell
renderRow(rowData,sectionID,rowID,highlightRow){
    return(
      <TouchableOpacity activeOpacity={0.5}   onPress={() => Alert.alert(
            'Alert Title',
            rowData.name,
          )}>
        <View style={GListViewDemostyles.cellViewStyle}>
          {/*左边的图片*/}
          <Image source={{uri: rowData.image}} style={GListViewDemostyles.leftImageStyle}/>
          {/*右边的View*/}
          <View style={GListViewDemostyles.rightViewStyle}>
            {/*上边的Text*/}
            <Text style={GListViewDemostyles.topTitleStyle}>{rowData.name}</Text>
            {/*下边的Text*/}
            <Text style={GListViewDemostyles.bottomTitleStyle}>¥{rowData.money}</Text>
            </View>
            </View>
            </TouchableOpacity>
       );
}

});

const GListViewDemostyles = StyleSheet.create({
    cellViewStyle:{
        padding:10,
        backgroundColor:'white',
        // 下划线
        borderBottomWidth:0.5,
        borderBottomColor:'#e8e8e8',

        // 确定主轴的方向
        flexDirection:'row'
    },

    leftImageStyle:{
        width:60,
        height:60,
        marginRight:15
    },

    rightViewStyle:{
        // 主轴的对齐方式
        justifyContent:'center'
    },

    topTitleStyle:{
        color:'red',
        fontSize:15,
        width:width * 0.7,
        marginBottom:8
    },

    bottomTitleStyle:{
        color:'blue',
    }
});
/******************************************************************/
var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;

// 导入json数据
var shareData = require('./shareData.json');

// 一些常量设置
var cols = 3;
var cellWH = 100;
var vMargin = (screenWidth - cellWH * cols) / (cols + 1);
var hMargin = 25;


// ES5
var AListViewDemo = React.createClass({
    // 设置默认值,固定值()
    getDefaultProps(){
        return{

        }
    },

    // 设置一些初始值(可以变化)
    getInitialState(){
        // 创建数据源
        var ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
        return{
            dataSource: ds.cloneWithRows(shareData.data)
        }
    },

    render(){
        return(
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderRow}
              contentContainerStyle={AListViewDemoStyle.listViewStyle}
          />
      );
},

// 单独的cell
renderRow(rowData){
    return(
        <TouchableOpacity activeOpacity={0.5} onPress={()=>{
           NativeModules.MyMapIntentModule.startActivityByClassname('com.awesomeproject3.ControlPCActivity') 
           }}>
          <View style={AListViewDemoStyle.innerViewStyle}>
              <Image source={{uri: rowData.icon}} style={AListViewDemoStyle.iconStyle}/>
              <Text>{rowData.title}</Text>
          </View>
        </TouchableOpacity>
     );
}

});


const AListViewDemoStyle = StyleSheet.create({
    listViewStyle:{
        // 改变主轴的方向
        flexDirection:'row',
        // 多行显示
        flexWrap:'wrap',
        alignItems:'flex-start'
    },

    iconStyle:{
        width:80,
        height:80
    },

    innerViewStyle:{
        width:cellWH,
        height:cellWH,
        marginLeft:vMargin,
        marginTop:hMargin,

        // 居中
        alignItems:'center'
    }
});
/****************************************************************/
var Car=require('./Car.json');

var BListViewDemo=React.createClass({
    getInitialState(){
        var getSectionData=(dataBlob,sectionID)=>{
            return dataBlob[sectionID]
        };
        var getRowData=(dataBlob,sectionID,rowID)=>{
            return dataBlob[sectionID+':'+rowID];
        };
        return{
            dataSource:new ListView.DataSource({
                getSectionData:getSectionData,
                getRowData:getRowData,
                rowHasChanged:(r1, r2)=>r1 !==r2,
                sectionHeaderHasChanged:(s1, s2)=>s1 !==s2
            })
        }
    },
    render(){
        return(
             <View style={BListViewDemostyles.outerViewStyle}>
               {/*头部*/}
               <View style={BListViewDemostyles.headerViewStyle}>
                   <Text style={{color:'white', fontSize:25}}>SeeMyGo品牌</Text>
               </View>
                {/*ListView*/}
                <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                renderSectionHeader={this.renderSectionHeader}
                />
                </View>
            );
       },
            renderRow(rowData){
            return(
                <TouchableOpacity activeOpacity={0.5}>
                    <View style={BListViewDemostyles.rowStyle}>
                        <Image source={{uri:rowData.icon}} style={BListViewDemostyles.rowImageStyle}/>
                        <Text style={{marginLeft:5}}>{rowData.name}</Text>
                    </View>
                </TouchableOpacity>
                );
        },
        renderSectionHeader(sectionData, sectionID){
            return(
                <View style={BListViewDemostyles.sectionHeaderViewStyle}>
                    <Text style={{marginLeft:5, color:'red'}}>{sectionData}</Text>
                </View>
                  );
       },
    componentDidMount(){
        this.loadDataFromJson();
    },
    loadDataFromJson(){
        var jsonData=Car.data;
        var dataBlob={},
            selectionIDs=[],
            rowIDs=[]
            cars=[];

        for(var i=0;i<jsonData.length;i++){
            selectionIDs.push(i);
            dataBlob[i]=jsonData[i].title;
            cars=jsonData[i].cars;
            rowIDs[i]=[];

            for(var j=0;j<cars.length;j++){
                rowIDs[i].push(j);

                dataBlob[i+':'+j]=cars[j];
            }
        }
        this.setState({
          dataSource:this.state.dataSource.cloneWithRowsAndSections(dataBlob,selectionIDs,rowIDs)
        });
    }
});
    // 设置样式
    const  BListViewDemostyles = StyleSheet.create({
        outerViewStyle:{
            //占满窗口
            flex:1
        },

        headerViewStyle:{
            height:64,
            backgroundColor:'orange',

            justifyContent:'center',
            alignItems:'center'
        },

        rowStyle:{
            // 设置主轴的方向
            flexDirection:'row',
            // 侧轴方向居中
            alignItems:'center',
            padding:10,

            borderBottomColor:'#e8e8e8',
            borderBottomWidth:0.5
        },

        rowImageStyle:{
            width:70,
            height:70,
        },

        sectionHeaderViewStyle:{
            backgroundColor:'#e8e8e8',
            height:25,

            justifyContent:'center'
        }
    });
AppRegistry.registerComponent('AwesomeProject3', () => BListViewDemo);