document.getElementById("mask1").style.display = "none";
document.getElementById("mask1").style.opacity = 0.0;
document.getElementById("mask2").style.display = "none";
document.getElementById("mask2").style.opacity = 0.0;

document.addEventListener("DOMContentLoaded", function () {
  const memberCard = document.querySelectorAll(".cursor-pointer");
  memberCard.forEach(function (card) {
    card.addEventListener("mouseover", function () {
      console.log("mouseover");
    });
    card.addEventListener("mouseout", function () {
      console.log("mouseout");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const memberCard = document.querySelectorAll(".cursor-pointer");
  memberCard.forEach(function (card) {
    card.addEventListener("click", function () {
      //clickしたカードの中のimgのsrcを取得
      const imgSrc = card.querySelector("img").src;
      console.log(imgSrc);
      //urlの最後の/以降の文字列を取得
      const imgName = imgSrc.split("/").pop();
      //mask2の中のdivの中のimgのsrcを変更
      document.getElementById("mask2").querySelector("img").src =
        "/contributors/" + imgName;

      document.getElementById("mask1").style.display = "block";
      document.getElementById("mask2").style.display = "block";
      anime({
        targets: "#mask1",
        opacity: 0.9,
        duration: 300,
        easing: "linear",
      });
      anime({
        targets: "#mask2",
        opacity: 1,
        duration: 300,
        easing: "linear",
      });
    });
  });
});

//mask1 or mask2 click event
document.getElementById("mask2").addEventListener("click", function () {
  anime({
    targets: "#mask1",
    opacity: 0,
    duration: 300,
    easing: "linear",
  });
  anime({
    targets: "#mask2",
    opacity: 0,
    duration: 300,
    easing: "linear",
  });
  document.getElementById("mask1").style.display = "none";
  document.getElementById("mask2").style.display = "none";
});
