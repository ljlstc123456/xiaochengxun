//index.js
//获取应用实例


Page({
  data: {
    list: [{ url: "../../static/img/test.png", name: "小程序基本款小程序基本款小程序基本款小程序基本款", price: "1", time: "10" }, { url: "../../static/img/test.png", name: "name2", price: "2", time: "20" }, { url: "../../static/img/test.png", name: "name3", price: "2", time: "20" }, { url: "../../static/img/test.png", name: "name2", price: "2", time: "20" }]
  },
  onLoad: function () {
    
  },
  goGoodsList:function(event){
    wx.navigateTo({
      url: '../goodsList/goodsList?type=' + event.currentTarget.dataset.type + '&title=' + event.currentTarget.dataset.title
    })
  }
})
