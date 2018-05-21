// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: {
      id: 1,
      image: '/images/goods1.png',
      title: '新鲜梨花带雨',
      price: 0.01,
      stock: '有货',
      detail: '这里是梨花带雨详情。',
      parameter: '125g/个',
      service: '不支持退货'
    },
    num: 0,
    totalNum: 0,
    hasCarts: false,
    curIndex: 0,
    show: false,
    scaleCart: false
  },
  addCount() {
    let num = this.data.num;
    num++;
    this.setData({
      num: num
    })
    const self = this;
   // const num = this.data.num;
    //let total = this.data.totalNum;

    self.setData({
      show: true
    })
    setTimeout(function () {
      self.setData({
        show: false,
        scaleCart: true
      })
      setTimeout(function () {
        self.setData({
          scaleCart: false,
          hasCarts: true,
          //totalNum: num + total
          num: num
        })
      }, 200)
    }, 300)
  },
  minusCount() {
    let num = this.data.num;
    if(num === 0){
      self.setData({
        hasCarts: false
      });
      return;
    }
    num--;
    this.setData({
      num: num
    })
  },
  addToCart:function(e) {
    console.log("加入购物车");
    wx.switchTab({
      url: '../cart/cart',
    })
  },
  bindTap:function(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      curIndex: index
    })
  }
})