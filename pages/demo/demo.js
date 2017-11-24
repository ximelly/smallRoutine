//demo.js
//获取应用实例
var app = getApp();
Page({
  data:{
    time:"12:40",
    date:"2012-11-11",
    index:1,
    array:[1,2,3,4,5,6,7],
    actionHidden:true,
    actionsheets:["a","b","c"],
    modalHidden:true,
    loadHidden:true,
    toastHidden:true
  },
  //事件处理函数
  formSubmit: function(e) {
    console.log("您输入的是：",e.detail.value);
  },
  //事件处理函数
  formReset: function() {
    console.log("formReset");
  },
  //事件处理函数
  viewTap: function() {
    console.log("jskgdh");
    wx.redirectTo({
      url: '../logs/logs'
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
  onShow: function () {
    console.log("demo页面show方法触发了！");
  },
  onReady: function () {
    console.log("demo页面ready方法触发了！");
  },
  onUnload: function () {
    console.log("demo页面Unload方法触发了！");
  },
  checkboxChange: function (e) {
    console.log(e.detail.value);
  },
  inputchange: function (e) {
    return e.detail.value.replace(/11/g,2);
  },
  blurfocus: function (e) {
    console.log(e.detail.value);
  },
  timechange: function (e) {
    this.setData({
      time:e.detail.value
    });
  },
  actionTap: function () {
    this.setData({
      actionHidden:!this.data.actionHidden
    });
  },
  modalTap: function () {
    this.setData({
      modalHidden:!this.data.modalHidden
    });
  },
  loadTap: function () {
    this.setData({
      loadHidden:!this.data.loadHidden
    });
    var that=this;
    setTimeout(function(){
      that.setData({
        loadHidden:true
      });
    },3000);
  },
  datechange: function (e) {
    this.setData({
      date:e.detail.value
    });
  },
  selectchange: function (e) {
    var that=this;
    this.setData({
      index:e.detail.value
    });
  },
  changeTab:function () {
    this.setData({
      actionHidden:true
    });
  },
  choosesheet:function (e) {
    console.log("当前选择的菜单名是："+e.currentTarget.dataset.name);
    this.setData({
      actionHidden:true
    });
  },
  confirmmodal:function () {
    console.log("确认");
    this.setData({
      modalHidden:true
    });
  },
  cancelmodal:function () {
    console.log("取消");
    this.setData({
      modalHidden:true
    });
  },
  toastTap: function (e) {
    this.setData({
      toastHidden:!this.data.toastHidden
    });
  },
  toasttapchange: function (e) {
    console.log("toast状态改变了");
    this.setData({
      toastHidden:true
    });
  }
});
