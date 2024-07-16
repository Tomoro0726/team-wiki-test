var timer = null;
var FPS = 1000 / 60;
//#titleの高さを取得
var title = document.getElementById('title');
var titleHeight = title.clientHeight;

//#menuの高さを取得
var menu = document.getElementById('menu');
var menuHeight = menu.clientHeight;

//#contributorの高さを取得
var contributor = document.getElementById('contributor');
var contributorHeight = contributor.clientHeight;
console.log(titleHeight + menuHeight + contributorHeight);

var ticking = false;

function func() {
  if (!ticking) {
    requestAnimationFrame(function () {
      ticking = false;
      var scroll = window.pageYOffset;
      if (scroll >= titleHeight + menuHeight + contributorHeight) {
        console.log('test');
        //#indexの上のマージンを変更
        document.getElementById('index').style.marginTop =
          scroll - titleHeight - menuHeight - contributorHeight + 'px';
      }
      console.log(scroll);
    });
    ticking = true;
  }
}


document.addEventListener('scroll', func, { passive: true });
