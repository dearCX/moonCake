// pages/addAddress/addAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    errorUrl: './../../imgs/error.png',
    deleteUrl: './../../imgs/deleteOne.png',
    removeUrl: './../../imgs/delete.png',
    infoUrl: './../../imgs/info.png',
    name: '',
    phone: '',
    area: '',
    street: '',
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部',
    address: '',
    isEdit: '',
    isRemove: false
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  saveAddress: function () {
    wx.navigateTo({
      url: '../selAddress/selAddress?add=0'
    })
  },
  deleteName: function () {
    this.setData({
      name: ''
    })
  },
  deletePhone: function () {
    this.setData({
      phone: ''
    })
  },
  deleteAddress: function () {
    this.setData({
      address: ''
    })
  },
  removeAddress: function () {
    this.setData({
      isRemove: true
    })
  },
  cancel: function () {
    this.setData({
      isRemove: false
    })
  },
  confirm: function () {
    this.setData({
      isRemove: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.isEdit === 'true') {
      wx.setNavigationBarTitle({
        title: '修改地址'
      })
    }
    options.isEdit = options.isEdit === 'true' ? true : false
    this.setData({
      isEdit: options.isEdit
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