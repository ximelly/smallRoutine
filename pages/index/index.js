//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
    motto: 'hahahahha',
    userInfo: {},
    weather:{
      location:{
        name:"广州市"
      },
      now:{
        text:"今天的气温是",
        temperature:39
      }
    },
    aaa:{
      name:"ximelly",
      age:"27",
      id:1,
      hidden:true
    },
    bbb:{
      name:"dusan",
      age:"26",
      id:2,
      hidden:false
    },
    show:true,
    colors:[
      {color:"red",value:"red"},
      {color:"green",value:"green"},
      {color:"blue",value:"blue"},
      {color:"orange",value:"orange"}
    ],
    images:["myorder","zhengjian","mycount"]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../demo/demo'
    });
  },
  onLoad: function () {
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      });
    });
  },
  onHide: function () {
    console.log("index页面Hide方法触发了！");
  },
  hidden:function(){
    var aa={};
    aa.show=!this.data.show;
    this.setData(aa);
  }
});
