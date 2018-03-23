Page({
  data: {
   
  },
  callphone(){
    wx.makePhoneCall({
      phoneNumber: '15982111370'
    })
  },
  onLoad: function () {
    
  },
  goPartner(){
    wx.navigateTo({
      url: '../partners/partners'
    })
  }
})