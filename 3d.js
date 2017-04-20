
parent1.addEventListener('mousemove', function(e){
  //xDiff,yDiff获取鼠标在监听区相对视窗的坐标
  let width = parent1.getBoundingClientRect().width
  let height = parent1.getBoundingClientRect().height
  let xCenter = parent1.offsetLeft + width / 2
  let yCenter = parent1.offsetTop + height / 2
  let xDiff = e.clientX - xCenter
  let yDiff = e.clientY - yCenter
/*
  console.log(xDiff)
  console.log(xDiff)
   console.log('width是'+width)
  console.log('height是'+height)
  console.log('parent1.offsetLeft是'+parent1.offsetLeft)
  console.log('parent1.offsetTop是'+parent1.offsetTop)
  console.log('e.clientX是'+e.clientX)
  console.log('e.clientY是'+e.clientY)
  console.log('xCenter是'+xCenter)
  console.log('yCenter是'+yCenter)
  console.log('------')
*/
  // 将 xDiff 和 yDiff 变为百分数
  let xPercent = xDiff / (width/2)
  let yPercent = yDiff / (height/2)
  // 得到 x y 方向的转动角度
  let xDeg = xPercent * 6
  let yDeg = yPercent * 5
    // 通过分析轴和区间，得出
  // 当用户在 x 轴移动鼠标时，CSS转动为 rotateY(xDeg)
  // 当用户在 y 轴移动鼠标时，CSS转动为 rotateX(-yDeg)
  banner1.style.transform = `translateZ(-50px) rotateX(${-yDeg}deg) rotateY(${xDeg}deg)`
})

  var x = 0
  var y = 0
  function step(){
    
    $('.eye-3d').css({
       transform: 'rotateX('+x+'deg) rotateY('+y+'deg)'
    })
    x = Math.random()*90 - 45
    y = Math.random()*90 - 45
    
    setTimeout(step, 1000)
  }
  step()