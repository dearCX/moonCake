// pages/myTrack/myTrack.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // trackList:[
    //   {id:1, name:'李先生', phone:'15019425548', number:1, address:'广东省深圳市宝安区西乡街道固戍三围固戍地铁a出口万象新天地三期5单元1234', trackNum:'67389023455566777'},
    //   {id:2, name:'李先生', phone:'15019425548', number:1, address:'广东省深圳市宝安区西乡街道固戍三围固戍地铁a出口万象新天地三期5单元1234', trackNum:'67389023455566777'},
    //   {id:3, name:'李先生', phone:'15019425548', number:1, address:'广东省深圳市宝安区西乡街道固戍三围固戍地铁a出口万象新天地三期5单元1234', trackNum:'67389023455566777'},
    //   {id:4, name:'李先生', phone:'15019425548', number:1, address:'广东省深圳市宝安区西乡街道固戍三围固戍地铁a出口万象新天地三期5单元1234', trackNum:'67389023455566777'}
    // ],
    trackList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let url = getApp().globalData.url
    let that = this
    wx.request({
      url: url + '/myOrder', //仅为示例，并非真实的接口地址
      method: 'POST',
      data: {
        token: wx.getStorageSync('token')
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        if (res.statusCode === 200 && res.data.status === 0 ) {
          that.setData({
            trackList: res.data.data.orderList
          })
        } else {
          wx.showToast({
            title: '服务异常，请重试',
            duration: 1000,
            mask:true
          })
        }
      }
    })
  },
  copyShippingNo:function(e){
    wx.setClipboardData({
      data: e.currentTarget.dataset.shipping,
      success: function(res) {
        wx.getClipboardData({
          success: function(res) {
            // console.log(res.data) // data
          }
        })
      }
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