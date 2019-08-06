// pages/commodity/commodity.js
Page({
  data: {
    commodityName: null,
    commoditySuitAge: null,
    commodityplace: null,
  },
  onLoad: function(options){
    console.log("options.commodityName");
    this.setData({
      commodityName: options.commodityName,
      commoditySuitAge: options.commoditySuitAge,
      commodityplace: options.commodityplace,
    })
  },
  shopButton: function () {
    wx.navigateBack({
    })
  },
  confirmButton: function () {
    wx.navigateTo({
      url: '/pages/shop/shop',
    })
  },
})