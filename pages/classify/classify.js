var data=require('../../common/common.js');
Page({
  data:{
    category:[
      { name: '果味', id: 'guowei' },
      { name: '蔬菜', id: 'shucai' },
      { name: '炒货', id: 'chaohuo' },
      { name: '点心', id: 'dianxin' },
      { name: '粗茶', id: 'cucha' },
      { name: '淡饭', id: 'danfan' }
    ],
    detail:[],
    curIndex: 0,
    isScroll: true,
    toView: ''
  },
  onLoad: function (options) {
    this.setData({
      detail: data.dataList
    });
  },
  switchTab(e) {
    this.setData({
      toView: e.target.dataset.id,
      curIndex: e.target.dataset.index,
      isScroll: true
    })
  }
})