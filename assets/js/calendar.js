var lis = document.querySelectorAll(".date li");
var h = document.querySelector(".calendar h2");
var h1 = document.querySelector(".calendar h1");
var btnl = document.querySelector(".l"); //获取按钮
var btnr = document.querySelector(".r");

function getD() {
  function doub(a) {
    //时分秒加前缀0
    if (a < 10) {
      a = "0" + a;
    }
    return a;
  }
  var dat = new Date();
  var year = dat.getFullYear(); //四位数年份
  var mon = dat.getMonth() + 1; //getMonth [0,11]
  var day = dat.getDay(); //getDay [0,6]
  var d = dat.getDate();
  var hour = dat.getHours();
  var min = dat.getMinutes();
  var sec = dat.getSeconds();
  hour = doub(hour);
  min = doub(min);
  sec = doub(sec);
  var DATE = {
    Year: year,
    Mon: mon,
    Day: day,
    D: d,
    Hour: hour,
    Min: min,
    Sec: sec,
  };
  return DATE;
}

function date() {
  var DATE = getD();
  var year = DATE.Year;
  var mon = DATE.Mon;
  var day = DATE.Day;
  var d = DATE.D;
  var hour = DATE.Hour;
  var min = DATE.Min;
  var sec = DATE.Sec;
  h.innerText = year + " - " + mon + " - " + d + " --- ";
  h1.innerText =
    year + " - " + mon + " - " + d + " --- " + hour + ":" + min + ":" + sec;
  setInterval(function () {
    var DATE = getD();
    h1.innerText =
      DATE.Year +
      " - " +
      DATE.Mon +
      " - " +
      DATE.D +
      " --- " +
      DATE.Hour +
      ":" +
      DATE.Min +
      ":" +
      DATE.Sec;
  }, 1000);
  theDate(year, mon);
  var firstDay = new Date(year, mon - 1, 1).getDay(); //得出第一天星期几
  var today = d + firstDay - 1;
  lis[today].style.color = "red";
  lis[today].className = "today"; //添加当天的样式

  btnl.onclick = function () {
    lis[today].className = ""; //清除当天的样式
    year = year + Math.floor((mon - 2) / 12);
    mon = ((mon + 10) % 12) + 1;
    theDate(year, mon);
    if (mon == DATE.Mon) {
      lis[today].className = "today";
      lis[today].style.color = "red";
    }
  };
  btnr.onclick = function () {
    lis[today].className = ""; //清除当天的样式
    year = year + Math.floor(mon / 12);
    mon = (mon % 12) + 1;
    theDate(year, mon);
    if (mon == DATE.Mon) {
      lis[today].className = "today";
      lis[today].style.color = "red";
    }
  };
  function theDate(year, mon) {
    for (var j = 0; j < lis.length; j++) {
      //先清空所有li里的内容
      lis[j].innerText = "";
      lis[j].style.color = "white";
    }
    var s1 = new Date(year, mon, 0);
    var f = s1.getDate(); //获取该月的天数
    h.innerText = year + " - " + mon;
    var s2 = new Date(year, mon - 1, 1);

    var fir = s2.getDay();
    for (var j = fir; j < fir + f; j++) {
      lis[j].innerText = j - fir + 1;
    }

    var lastMon = new Date(year, mon - 1, 0).getDate(); //获取前一个月天数
    for (var i = fir - 1; i >= 0; i--) {
      lis[i].innerText = lastMon--;
      lis[i].style.color = "#aaa";
    }

    for (var k = fir + f; k < lis.length; k++) {
      //后一个月
      lis[k].innerText = k - fir - f + 1;
      lis[k].style.color = "#aaa";
    }
  }
}

date();
