var List = require('../../common/common.js');
Page({
  data: {
    Headerimg:[],
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options);
    var listId = options.id;
  
    //this.data.currentPostId = postId;
    // var postData = postsData.postList[postId];
    this.setData({
      Headerimg:List.List[listId]
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})