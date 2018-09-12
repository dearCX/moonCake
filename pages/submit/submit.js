// pages/submit/submit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerSrc: './../../imgs/banner.png',
    minusSrc: './../../imgs/minus.png',
    minusSrcDisable: './../../imgs/minuxDisable.png',
    addSrc: './../../imgs/add.png',
    ruleSrc: './../../imgs/ruleBg.png',
    titleSrc: './../../imgs/rule.png',
    detailSrc: './../../imgs/detail.png',
    ruleSrc: './../../imgs/ruleBg.png',
    infoUrl: './../../imgs/info.png',
    num: 0,
    selNum: false,
    ruleList:[
      {
        url:'./../../imgs/star.png',
        content:'本产品10盒起售，即10盒/件，每盒可单独配送到指定地址，顺丰直达；'
      },
      {
        url:'./../../imgs/star.png',
        content:'CCGO开启线上与线下同时预售活动，除此，6月18日参与线下会议预定，每预定1件即可参与现场抽奖。实物奖品不预留、不指定，抽完为止，百分之百中奖。 '
      },
      {
        url:'./../../imgs/star.png',
        content:'顺丰冷链发货，预定商品不支持退换货和退款，在收货时请先验货再签收。发现问题可以拍照拒收，并线上联系CCGO客服，敬请谅解！'
      },
      {
        url:'./../../imgs/star.png',
        content:'注意：榴莲冰皮月饼的“馅料”是采用马来西亚进口猫山王榴莲鲜果肉，不添加防腐剂， 收货后请放冰箱冷冻存储！'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  toPay: function() {
    if (this.data.num < 1) {
      this.setData({
        selNum:true
      })
    } else {
      let url = getApp().globalData.url
      let that = this
      wx.request({
        url: url + '/subOrder', //仅为示例，并非真实的接口地址
        method: 'POST',
        data: {
          num: this.data.num,
          token: wx.getStorageSync('token')
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function(res) {
          if (res.statusCode === 200 && res.data.status === 0 ) {
            // wx.setStorage({
            //   key: 'num',
            //   data: that.data.num
            // })
            wx.navigateTo({
              url: '../selAddress/selAddress'
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
    }
  },
  addNumber: function() {
    this.data.num++
    this.setData({
      num: this.data.num
    })
  },
  minusNumber: function() {
    if (this.data.num > 1) {
      this.data.num--
      this.setData({
        num: this.data.num
      })
    }
  },
  closeModal: function() {
    this.setData({
      selNum: false
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