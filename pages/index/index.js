//index.js
//获取应用实例
const app = getApp()

Page({
  confirmButton: function () {
    wx.navigateTo({
      url: '/pages/shop/shop',
    })
  },
})
setTimeout(function () {
  wx.reLaunch({
    url: '../index-shop/index-shop'
  })
}, 3000)
