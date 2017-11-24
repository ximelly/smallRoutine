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
  },
  requestTap:function(){
    console.log("requestTap");
    wx.request({
      url:"http://appb.mama100.cn/sns/specialist/normal/rtrvAvailableExpert.do",
      data:{
        accessToken:"88d098cc79f0749823561bbeeeaf9646",
        authData:1,
        devid:"WXo3b9ss7VJ_nVlbcRz9ghp-rg7IxI",
        openId:"o3b9ss7VJ_nVlbcRz9ghp-rg7IxI",
        tsno:"1511508325392367165"
      },
      header:{"Content-Type":"application/json"},
      success:function(res){
        consol.log(res.data);
      }
    });
  },
  chooseImage:function(){
    console.log("chooseImage");
    var that=this;
    wx.chooseImage({
      success:function(res){
          that.setData({
            imageUrl:res.tempFilePaths[0]
          });
      }
    });
  },
  previewImages:function(){
    var that=this;
    wx.previewImage({
      current:that.data.imageUrl,
      urls:[that.data.imageUrl]
    });
  },
  getImageInfoTap:function(){
    wx.getImageInfo({
      src:this.data.imageUrl,
      success:function(res){
        console.log(res.width);
        console.log(res.height);
      }
    });
  },
  startRecord:function(){
    var that=this;
    wx.startRecord({
      success:function(res){
        var aa=res.tempFilePath;
        console.log("录音成功"+aa);
        wx.playVoice({
          filePath:aa,
          complete:function(){
            console.log("endVoice");
          }
        });
      },
      fail:function(res){
        console.log("录音失败");
      }
    });
  },
  stopRecord:function(){
    wx.stopRecord();
  }
});
