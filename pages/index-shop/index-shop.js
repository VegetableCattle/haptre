var dq_flag=0;
var hx_flag = 0;
var shop_flag=0;
Page({
  data: {
    //城市   这是一个本地的对象，然后绑定到页面上
    bottomHidden: false,
    pic_array: [
      { id: 13, name: '北京市' },
      { id: 14, name: '上海市' },
      { id: 15, name: '广州市' },
      { id: 16, name: '深圳市' },
    ],
    hx_index: 0,
    dq_array: [
      { id: 17, name: '海淀区' },
      { id: 18, name: '怀柔区' },
      { id: 19, name: '朝阳区' },
      { id: 20, name: '昌平区' },
      { id: 21, name: '丰台区' },
      { id: 22, name: '密云区' },
      { id: 23, name: '西城区' },
      ],
    dq_index: 0,
    // shop_array: [
    //   { id: 24, name: '中国科学院大学西苑超市' },
    //   { id: 25, name: '世纪家家福超市怀柔店' },
    //   { id: 26, name: '多点超市怀柔万达店' },
    // ],
    shop_array: [
      { id: 24, name: '家乐福中关村广场店' },
      { id: 25, name: '华联万柳购物中心' },
      { id: 26, name: '沃尔玛购物广场知春路店' },
    ],
    shop_index: 0,
  },
  bindPickerChange_hx: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    hx_flag = e.detail.value;
    if (dq_flag == 0 & hx_flag == 0 & shop_flag == 0) {
      console.log('bottomHidden', 1);
      this.setData({
        bottomHidden: false
      })
    }
    else {
      this.setData({
        bottomHidden: true
      })
    }
    if (e.detail.value==0&dq_flag==0){
      this.setData({   //给变量赋值
        shop_array: [
          { id: 24, name: '家乐福中关村广场店' },
          { id: 25, name: '华联万柳购物中心' },
          { id: 26, name: '沃尔玛购物广场知春路店' },
        ]
      })
    }
    else{
      this.setData({   //给变量赋值
        shop_array: [
          { id: 24, name: '' },
          { id: 25, name: '' },
          { id: 26, name: '' },
        ]
      })
    }
    if (e.detail.value == 0) {
      this.setData({   //给变量赋值
        hx_index: e.detail.value,  //每次选择了下拉列表的内容同时修改下标然后修改显示的内容，显示的内容和选择的内容一致
        dq_array: [
          { id: 17, name: '怀柔区' },
          { id: 18, name: '海淀区' },
          { id: 19, name: '朝阳区' },
          { id: 20, name: '昌平区' },
          { id: 21, name: '丰台区' },
          { id: 22, name: '密云区' },
          { id: 23, name: '西城区' },
        ]
      })
    }
    else if (e.detail.value == 1){
      this.setData({   //给变量赋值
        hx_index: e.detail.value,  //每次选择了下拉列表的内容同时修改下标然后修改显示的内容，显示的内容和选择的内容一致
        dq_array: [
          { id: 17, name: '浦东新区' },
          { id: 18, name: '普陀区' },
          { id: 19, name: '静安区' },
          { id: 20, name: '黄浦区' },
          { id: 21, name: '杨浦区' },
          { id: 22, name: '闵行区' },
          { id: 23, name: '虹口区' },
        ]
      })
    }
    else if (e.detail.value == 2) {
      this.setData({   //给变量赋值
        hx_index: e.detail.value,  //每次选择了下拉列表的内容同时修改下标然后修改显示的内容，显示的内容和选择的内容一致
        dq_array: [
          { id: 17, name: '越秀区' },
          { id: 18, name: '黄埔区' },
          { id: 19, name: '海珠区' },
          { id: 20, name: '荔湾区' },
          { id: 21, name: '天河区' },
          { id: 22, name: '白云区' },
          { id: 23, name: '增城区' },
        ]
      })
    }
    else if (e.detail.value == 3) {
      this.setData({   //给变量赋值
        hx_index: e.detail.value,  //每次选择了下拉列表的内容同时修改下标然后修改显示的内容，显示的内容和选择的内容一致
        dq_array: [
          { id: 17, name: '龙岗区' },
          { id: 18, name: '宝安区' },
          { id: 19, name: '坪山区' },
          { id: 20, name: '光明新区' },
          { id: 21, name: '罗湖区' },
          { id: 22, name: '南山区' },
          { id: 23, name: '龙华新区' },
        ]
      })
    }
    console.log('自定义值:', this.data.hx_select);
  },

  bindPickerChange_dq: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    dq_flag = e.detail.value;
    if (dq_flag == 0 & hx_flag == 0 & shop_flag == 0) {
      console.log('bottomHidden', 1);
      this.setData({
        bottomHidden: false
      })
    }
    else {
      this.setData({
        bottomHidden: true
      })
    }
    
    if (e.detail.value == 0 & hx_flag==0){
      this.setData({   //给变量赋值
        dq_index: e.detail.value,
        shop_array: [
          { id: 24, name: '家乐福中关村广场店' },
          { id: 25, name: '华联万柳购物中心' },
          { id: 26, name: '沃尔玛购物广场知春路店' },
        ]
      })
    }
    else{
      this.setData({   //给变量赋值
        dq_index: e.detail.value,
        shop_array: [
          { id: 24, name: '' },
          { id: 25, name: '' },
          { id: 26, name: '' },
        ]
      })
    }
    
    console.log('自定义值:', this.data.dq_select);
  },
  bindPickerChange_shop: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    shop_flag = e.detail.value;
    if (dq_flag == 0 & hx_flag == 0 & shop_flag == 0) {
      console.log('bottomHidden', 1);
      this.setData({
        bottomHidden: false
      })
    }
    else {
      this.setData({
        bottomHidden: true
      })
    }
    this.setData({   //给变量赋值
      shop_index: e.detail.value,  //每次选择了下拉列表的内容同时修改下标然后修改显示的内容，显示的内容和选择的内容一致
    })
    console.log('自定义值:', this.data.shop_select);
  },

  commodityButton: function () {
    wx.navigateTo({
      url: '/pages/index-commodity/index-commodity',
    })
  },
  confirmButton: function () {
    wx.navigateTo({
      url: '/pages/shop/shop',
    })
  },
})
