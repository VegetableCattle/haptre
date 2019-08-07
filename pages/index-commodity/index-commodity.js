// pages/index-commodity/index-commodity.js
// var commodityName='';
// var commoditySuitAge = '';
Page({
  data: {
    commodityName:"",
    commoditySuitAge:'',
    commodityplace:'',
    motto: '',
    result: [],
    images: {},
    img_url: "",
    words: [],
    isLoading: false,
    base64Img: '',
    btnDisabled: true
  },
  shopButton: function () {
    wx.navigateBack({
      // url: '/pages/index/index',
    })
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
            tempFilePaths: res.tempFilePaths,
             btnDisabled: false
 
          })
        // var fs = wx.getFileSystemManager();
        // fs.readFile({
        //   filePath: res.tempFilePaths[0].toString(),
        //   encoding: 'base64',
        //   success(res) {
        //     that.setData({
        //       base64Img: res.data,
        //       btnDisabled: false
        //     })
        //   }
        // })
      },
    })
  },
  // chooseImage: function (e) {
  //   console.log("tapped")
  //   let that = this
  //   that.setData({
  //     isLoading: true,
  //   })
  //   wx.chooseImage({
  //     success: function (res) {
  //       console.log(res)
  //       let tmpFile = res.tempFilePaths[0]
  //       that.setData({ img_url: tmpFile })
  //       wx.cloud.uploadFile({
  //         cloudPath: Date.now() + '.png',
  //         filePath: tmpFile,
  //         success: res => {
  //           console.log(res)
  //           let fileID = res.fileID
  //           wx.cloud.getTempFileURL({
  //             fileList: [fileID],
  //             success: res => {
  //               console.log(res)
  //               let img = res.fileList[0].tempFileURL

  //               wx.cloud.callFunction({
  //                 name: "doit",
  //                 data: {
  //                   img: img
  //                 },
  //                 success: res => {
  //                   console.log(res)
  //                   console.log("doit ok ")
  //                   let data = JSON.parse(res.result)
  //                   that.setData({ words: [] })
  //                   that.setData({ words: data.words_result })
  //                   that.setData({
  //                     isLoading: false,
  //                   })
  //                   wx.showToast({
  //                     title: '识别成功',
  //                   })
  //                 }
  //               })

  //             }
  //           })
  //         }
  //       })
  //     },
  //   })
  // },
  resultButton: function () {
    
    var that = this;
    var fs = wx.getFileSystemManager();
    fs.readFile({
      filePath: that.data.img_url.toString(),
      encoding: 'base64',
      success(res) {
        // that.setData({
        //   base64Img: res.data,
        //   btnDisabled: false
        // })
        wx.request({
          // url: 'http://106.75.34.228:82/infer-ceddd140-91b0-435a-9a33-42dfce97147a/findCommodity',
          // url: 'http://192.168.43.13:5000/findCommodity',
          // url: 'http://127.0.0.1:8761/findCommodity',
          // url: 'http://172.27.33.1:5000/findCommodity',
          url: 'https://lengxia1994.cn/findCommodity',
          data: {
            base64Img: res.data
          },
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded' // 默认值
          },
          success: function (res) {
            console.log(res.data)//打印到控制台
            var name = res.data["名称"];
            var suitAge = res.data["适龄"];
            var place = res.data["产地"];
            if (name == null || suitAge == null) {
              var toastText = '数据获取失败';
              wx.showToast({
                title: toastText,
                icon: '',
                duration: 2000
              });
            }
            else {
              that.setData({
                commodityName: name,
                commoditySuitAge: suitAge,
                commodityplace: place
              })
              console.log(that.data.commodityName)
            }
            wx.redirectTo({
              url: '/pages/commodity/commodity?commodityName=' + that.data.commodityName + '&commoditySuitAge=' + that.data.commoditySuitAge + '&commodityplace=' + that.data.commodityplace,
            })
          }
        })
      }
    })
    //console.log(that.data.base64Img);
   
  },
})