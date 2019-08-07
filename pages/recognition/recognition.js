var app = getApp()
Page({
  data: {
    currentTab: 0,
    commodityName: "",
    commoditySuitAge: '',
    commodityplace: '',
    motto: '',
    result: [],
    images: {},
    img_url: "",
    words: [],
    isLoading: false,
    base64Img: '',
    btnDisabled: true,

    commodityQuantityTotal: null,
    commodityProportionTotal: null,
    commodityShortage:null,
    isPromotion:'否',
    commodityEach:null,
    layerNum:0,
    layerNowNum:1,
    viewDisplay:"none",
    layerInformation: "",


  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

  },
  //滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  backButton: function () {
    wx.navigateBack({
    });
  },

  chooseImage: function () {
    var that = this;
    wx.chooseImage({
      count: 1,
      sourceType: ['album', 'camera'],
      sizeType: ['compressed'],
      success: function (res) {
        console.log(res);
        that.setData({
          img_url: res.tempFilePaths[0],
          tempFilePaths: res.tempFilePaths
        })
        wx.showLoading({
          title: "努力分析中...",
          mask: true
        })
        var fs = wx.getFileSystemManager();
        fs.readFile({
          filePath: res.tempFilePaths[0].toString(),
          encoding: 'base64',
          success(res) {
            that.setData({
              base64Img: res.data,
              btnDisabled: false
            })
            wx.request({
              url: 'https://lengxia1994.cn/addData',
              // url: 'http://106.75.34.228:82/infer-ceddd140-91b0-435a-9a33-42dfce97147a/addData',
              data: {
                base64Img: that.data.base64Img
              },
              method: 'POST',
              header: {
                'content-type': 'application/x-www-form-urlencoded' // 默认值
              },
              success: function (res) {
                console.log(res.data)//打印到控制台
                var isRemake = res.data["是否翻拍"];
                var isPeople = res.data["行人个数"];
                if (isRemake == true){
                  that.setData({
                    viewDisplay: "none"
                  })
                  wx.hideLoading();
                  wx.showModal({
                    showCancel: false,
                    title: '警告',
                    content: '检测出翻拍，请重新拍摄'
                  })
                  
                }
                else if (isPeople!=null&isPeople!=0){
                  that.setData({
                    viewDisplay: "none"
                  })
                  wx.hideLoading();
                  wx.showModal({
                    showCancel: false,
                    title: '温馨提示',
                    content: '有行人经过，请重新拍摄'
                  })
                 
                }
                else{
                  wx.hideLoading();
                  var promotion = res.data['是否促销'];
                  if (promotion!=null&promotion != 0) {
                    that.setData({
                      isPromotion: '是',
                    })
                  }
                  that.setData({
                    commodityQuantityTotal: res.data['总商品数'],
                    commodityProportionTotal: res.data['惠氏产品占比'],
                    commodityShortage: res.data['总缺货率'],
                    commodityEach: res.data['各种类产品个数及比例'],
                    layerInformation: res.data['排面信息'],
                    layerNum: res.data['排面信息'].length,
                    viewDisplay:"",
                  })
                }
               }
              })
            
            
          }
        })
      },
    })
  },
})