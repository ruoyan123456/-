/* 
  * 配置rem
*/

function font () {
  document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75  + 'px'
}

font() // 表示页面一开启就转换单位 


window.onresize = font  // 表示页面尺寸发生改变时，再次计算rem