// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:{
      name:'',
      phone:'',
      detail:''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;

    wx.getStorage({
      key: 'address',
      success: function (res) {
        console.log(res);
        self.setData({
          address: res.data
        })
      }
    })
  },
  bindName(e) {
    this.setData({
      'address.name': e.detail.value
    })
  },
  bindPhone(e) {
    this.setData({
      'address.phone': e.detail.value
    })
  },
  bindDetail(e) {
    this.setData({
      'address.detail': e.detail.value
    })
  },
  formSubmit:function(e){
    var self= this;
    if (self.data.address.name && self.data.address.phone && self.data.address.detail){
      wx.setStorage({
        key: 'address',
        data: self.data.address,
        success() {
          wx.navigateBack();
        }
      })
    }else{
      wx.showModal({
        title:'提示',
        content:'请填写完整资料',
        showCancel: false
      })
    }
  }
  
})