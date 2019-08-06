var touchDot = 0;//触摸时的原点 
var time = 0;// 时间记录，用于滑动时且时间小于1s则执行左右滑动 
var interval = "";// 记录/清理时间记录 
Page({
  data: {
    
  },
  // 触摸开始事件 
  touchStart: function (e) {
    touchDot = e.touches[0].pageX; // 获取触摸时的原点 
    // 使用js计时器记录时间  
    interval = setInterval(function () {
      time++;
    }, 100);
  },
  // 触摸移动事件 
  touchMove: function (e) {
    var touchMove = e.touches[0].pageX;
    console.log("touchMove:" + touchMove + " touchDot:" + touchDot + " diff:" + (touchMove - touchDot));
    // 向左滑动  
    if (touchMove - touchDot <= -40 && time < 10) {
       clearInterval(interval);
      touchDot = 0;
      time = 0;
      touchMove=0;
      wx.navigateTo({
        url: '/pages/recognition/recognition'
      });
     
    }
  },
  // 触摸结束事件 
  touchEnd: function (e) {
    clearInterval(interval);
    touchDot = 0;
    time = 0;
  }, 
  addDataButton:  function(){
    wx.navigateTo({
      url: '/pages/recognition/recognition'
    });
  },
}) 