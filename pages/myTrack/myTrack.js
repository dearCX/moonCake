// pages/myTrack/myTrack.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    trackList:[
      {id:1, name:'李先生', phone:'15019425548', number:1, address:'广东省深圳市宝安区西乡街道固戍三围固戍地铁a出口万象新天地三期5单元1234', trackNum:'67389023455566777'},
      {id:2, name:'李先生', phone:'15019425548', number:1, address:'广东省深圳市宝安区西乡街道固戍三围固戍地铁a出口万象新天地三期5单元1234', trackNum:'67389023455566777'},
      {id:3, name:'李先生', phone:'15019425548', number:1, address:'广东省深圳市宝安区西乡街道固戍三围固戍地铁a出口万象新天地三期5单元1234', trackNum:'67389023455566777'},
      {id:4, name:'李先生', phone:'15019425548', number:1, address:'广东省深圳市宝安区西乡街道固戍三围固戍地铁a出口万象新天地三期5单元1234', trackNum:'67389023455566777'}
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // let page = wx.getCurrentPages()
    // console.log(page)
    // wx.navigateBack({
    //   url: '../index/index'
    //   // delta: page
    // })
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
    // wx.redirectTo({
    //   url: '../index/index'
    // })
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
    // let page = getCurrentPages()
    // wx.navigateBack({
    //   // url: '../index/index'
    //   delta: 4
    // })
    wx.reLaunch({
      url: '../index/index'
    })
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