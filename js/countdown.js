const year = new Date().getFullYear(); // 获取当前年份
const targetDate = new Date(year, 4, 17).getTime(); // 设置目标日期为今年的 5 月 17 日（月份从 0 开始）
const targetDateNextYear = new Date(year + 1, 4, 17).getTime(); // 设置目标日期为明年的 5 月 17 日

// countdown
let timer = setInterval(function () {
  // 获取当前时间
  const today = new Date().getTime();

  // 计算时间差
  let diff;
  if (today > targetDate) {
    diff = targetDateNextYear - today; // 如果过了今年的目标日期，计算到明年的时间
  } else {
    diff = targetDate - today; // 计算到今年目标日期的时间
  }

  // 计算天、小时、分钟、秒
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // 显示倒计时
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
      <div class=\"numbers\">" + days + "</div>days</div> \
    <div class=\"hours\"> \
      <div class=\"numbers\">" + hours + "</div>hours</div> \
    <div class=\"minutes\"> \
      <div class=\"numbers\">" + minutes + "</div>minutes</div> \
    <div class=\"seconds\"> \
      <div class=\"numbers\">" + seconds + "</div>seconds</div>";

  // 倒计时结束后清除定时器
  if (diff <= 0) {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "Countdown complete!";
  }
}, 1000);
