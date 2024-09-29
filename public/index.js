console.log("Hello from public/index.js!");
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const viewportHeight = window.innerHeight;
  const threshold = 0.15 * viewportHeight; // 30vh

  const topImage = document.querySelector("#top-image-1");
  //アニメーションしながら消える
  if (scrollPosition > threshold) {
    //徐々に回転する
    topImage.style.transform =
      "rotate(" + ((scrollPosition - threshold) / threshold) * -20 + "deg)";
    //徐々に透明にする
    topImage.style.opacity = 1 - (scrollPosition - threshold) / threshold;
  } else {
    //透明度を元に戻す
    topImage.style.opacity = 1;
  }
});
