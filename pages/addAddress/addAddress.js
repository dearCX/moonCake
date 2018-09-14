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
    isName: false,
    nameRight: false,
    isPhone: false,
    phoneRight: false,
    isArea: false,
    isStreet: false,
    phone: '',
    area: '',
    street: '',
    region: ['广东省', '深圳市', '南山区'],
    customItem: '全部',
    address: '',
    isEdit: '',
    isRemove: false,
    editId: ''
  },
  getInput:function(e){
    this.setData({
      address: e.detail.value
    })
  },
  bindName:function(e){
    this.setData({
      name: e.detail.value
    })
  },
  checkName:function(e){
    if (e.detail.value === '') {
      this.setData({
        isName: true
      })
    } else {
      this.setData({
        isName: false
      })
      let nameReg = /^[\u4E00-\u9FA5A-Za-z0-9]{2,20}$/
      if (nameReg.test(e.detail.value)) {
        this.setData({
          nameRight: false
        })
      } else {
        this.setData({
          nameRight: true
        })
      }
    }
  },
  bindPhone:function(e){
    this.setData({
      phone: e.detail.value
    })
  },
  checkPhone:function(e){
    if (e.detail.value === '') {
      this.setData({
        isPhone: true
      })
    } else {
      this.setData({
        isPhone: false
      })
      let phoneReg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
      if (phoneReg.test(e.detail.value)) {
        this.setData({
          phoneRight: false
        })
      } else {
        this.setData({
          phoneRight: true
        })
      }
    }
  },
  bindRegionChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  checkArea:function(e){
    if (e.detail.value === '') {
      this.setData({
        isArea: true
      })
    } else {
      this.setData({
        isArea: false
      })
    }
  },
  checkStreet:function(e){
    if (e.detail.value === '') {
      this.setData({
        isStreet: true
      })
    } else {
      this.setData({
        isStreet: false
      })
    }
  },
  saveAddress: function () {
    let url = getApp().globalData.url
    if (this.data.editId !== '') {
      if (this.data.region.length > 0 && this.data.address !== '') {
        wx.request({
          url: url + '/receiverInfo', //仅为示例，并非真实的接口地址
          method: 'POST',
          data: {
            id: this.data.editId,
            type: 1,
            address: this.data.region.join('') + this.data.address,
            phone: this.data.phone,
            name: this.data.name,
            token: wx.getStorageSync('token')
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function(res) {
            if (res.statusCode === 200 && res.data.status === 0 ) {
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
    } else {
      if (this.data.region.length > 0 && this.data.address !== '') {
        wx.request({
          url: url + '/receiverInfo', //仅为示例，并非真实的接口地址
          method: 'POST',
          data: {
            address: this.data.region.join('') + this.data.address,
            phone: this.data.phone,
            name: this.data.name,
            type: 0,
            token: wx.getStorageSync('token')
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function(res) {
            if (res.statusCode === 200 && res.data.status === 0 ) {
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
    }
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
  confirm: function (e) {
    let url = getApp().globalData.url
    wx.request({
      url: url + '/delReceiverInfo', //仅为示例，并非真实的接口地址
      method: 'POST',
      data: {
        id: e.currentTarget.dataset.id,
        token: wx.getStorageSync('token')
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        if (res.statusCode === 200 && res.data.status === 0 ) {
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
  },
  closeModal: function() {
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
      options.isEdit = options.isEdit === 'true' ? true : false
      let editUser = wx.getStorageSync('editAddr')
      let region = []
      let address = ''
      let provice = ''
      let city = ''
      let area = ''
      let arr = editUser.address.split('区')
      address = arr[1]
      let arr1 = arr[0].split('市')
      area = arr1[1] + '区'
      let arr2 = arr1[0].split('省')
      city = arr2[1] + '市'
      provice = arr2[0] + '省'
      region.push(provice)
      region.push(city)
      region.push(area)
      this.setData({
        isEdit: options.isEdit,
        name: editUser.name,
        phone: editUser.phone,
        region: region,
        address: address,
        editId: editUser.id
      })
      region = []
    } else {
      this.setData({
        name: '',
        phone: '',
        region: ['广东省', '深圳市', '南山区'],
        address: '',
        editId: ''
      })
    }
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