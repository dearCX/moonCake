// pages/mySubmit/mySubmit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:4,
    addressList:[
      {id:1, name:'李先生', phone:'15019425548', number:1, address:'广东省深圳市宝安区西乡街道固戍三围固戍地铁a出口万象新天地三期5单元1234'},
      {id:2, name:'李先生', phone:'15019425548', number:1, address:'广东省深圳市宝安区西乡街道固戍三围固戍地铁a出口万象新天地三期5单元1234'},
      {id:3, name:'李先生', phone:'15019425548', number:1, address:'广东省深圳市宝安区西乡街道固戍三围固戍地铁a出口万象新天地三期5单元1234'},
      {id:4, name:'李先生', phone:'15019425548', number:1, address:'广东省深圳市宝安区西乡街道固戍三围固戍地铁a出口万象新天地三期5单元1234'}
    ],
    addSrc:'./../../imgs/addAddress.png',
    toSrc:'./../../imgs/into.png',
    minusDisableSrc:'./../../imgs/addressMinusDisable.png',
    minusSrc:'./../../imgs/addressMinus.png',
    addAddSrc:'./../../imgs/addressAdd.png',
    addAddDisableSrc:'./../../imgs/addressAddDisable.png',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  toSubmit: function() {
    wx.navigateTo({
      url: '../mySubmit/mySubmit'
    })
  },
  toAddAddress: function() {
    wx.navigateTo({
      url: '../addAddress/addAddress'
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})