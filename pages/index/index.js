//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    mode: 'aspectFit',
    topImg: './../../imgs/indexBg.png',
    bottomImg: './../../imgs/indexBottom.png',
    motto: 'MINA',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    // console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  toSubmit: function() {
    // wx.navigateTo({
    //   url: '../selAddress/selAddress'
    // })
    wx.navigateTo({
      url: '../submit/submit'
    })
  },
  toMine: function() {
    let url = getApp().globalData.url
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
          if (res.data.data.orderList.length > 0) {
            wx.navigateTo({
              url: '../myTrack/myTrack'
            })
          } else {
            wx.navigateTo({
              url: '../mine/mine'
            })
          }
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
})
