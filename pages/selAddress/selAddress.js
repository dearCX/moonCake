// pages/mySubmit/mySubmit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 0,
    // addressList:[
    //   {id:1, name:'李先生', phone:'15019425548', number:1, address:'广东省深圳市宝安区西乡街道固戍三围固戍地铁a出口万象新天地三期5单元1234'},
    //   {id:2, name:'李先生', phone:'15019425548', number:1, address:'广东省深圳市宝安区西乡街道固戍三围固戍地铁a出口万象新天地三期5单元1234'},
    //   {id:3, name:'李先生', phone:'15019425548', number:1, address:'广东省深圳市宝安区西乡街道固戍三围固戍地铁a出口万象新天地三期5单元1234'},
    //   {id:4, name:'李先生', phone:'15019425548', number:1, address:'广东省深圳市宝安区西乡街道固戍三围固戍地铁a出口万象新天地三期5单元1234'}
    // ],
    addressList: [],
    addSrc: './../../imgs/addAddress.png',
    toSrc: './../../imgs/into.png',
    minusDisableSrc: './../../imgs/addressMinusDisable.png',
    minusSrc: './../../imgs/addressMinus.png',
    addAddSrc: './../../imgs/addressAdd.png',
    addAddDisableSrc: './../../imgs/addressAddDisable.png',
    infoUrl: './../../imgs/info.png',
    ifEnough: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAddressList()
  },
  getAddressList: function(){
    let url = getApp().globalData.url
    let that = this
    wx.request({
      url: url + '/getReceiverInfo', //仅为示例，并非真实的接口地址
      method: 'POST',
      data: {
        token: wx.getStorageSync('token')
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        if (res.statusCode === 200 && res.data.status === 0 ) {
          let remain = 0
          let selNum = 0
          let nums = res.data.data.addrList
          nums.map(n => {
            selNum += n.num
          })
          remain = res.data.data.total - selNum
          that.setData({
            num: remain,
            addressList: res.data.data.addrList
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
  addNum: function(e) {
    let that = this
    let url = getApp().globalData.url
    wx.request({
      url: url + '/changeNum', //仅为示例，并非真实的接口地址
      method: 'POST',
      data: {
        id:e.currentTarget.dataset.id,
        type: 0,
        token: wx.getStorageSync('token')
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        if (res.statusCode === 200 && res.data.status === 0 ) {
          that.getAddressList()
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
  minusNum: function(e) {
    let that = this
    let url = getApp().globalData.url
    wx.request({
      url: url + '/changeNum', //仅为示例，并非真实的接口地址
      method: 'POST',
      data: {
        id:e.currentTarget.dataset.id,
        type: 1,
        token: wx.getStorageSync('token')
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        if (res.statusCode === 200 && res.data.status === 0 ) {
          that.getAddressList()
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
  toSubmit: function() {
    if (this.data.num < 1) {
      let url = getApp().globalData.url
      wx.request({
        url: url + '/subInfo', //仅为示例，并非真实的接口地址
        method: 'POST',
        data: {
          list: JSON.stringify(this.data.addressList),
          token: wx.getStorageSync('token')
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function(res) {
          if (res.statusCode === 200 && res.data.status === 0 ) {
            wx.navigateTo({
              url: '../mySubmit/mySubmit'
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
    } else {
      this.setData({
        ifEnough: true
      })
    }
  },
  toAddAddress: function() {
    if (this.data.num > 0) {
      wx.navigateTo({
        url: '../addAddress/addAddress?isEdit=false'
      })
    } else {
      this.setData({
        ifEnough: true
      })
    }
  },
  editAddress: function(e) {
    wx.setStorage({
      key: "editAddr",
      data: {
        id:e.currentTarget.dataset.id,
        name:e.currentTarget.dataset.name,
        phone:e.currentTarget.dataset.phone,
        address:e.currentTarget.dataset.address
      }
    })
    wx.navigateTo({
      url: '../addAddress/addAddress?isEdit=true'
    })
  },
  closeModal: function() {
    this.setData({
      ifEnough: false
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