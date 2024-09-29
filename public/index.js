console.log("Hello from public/index.js!");
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const viewportHeight = window.innerHeight;
  const threshold = 0.1 * viewportHeight; // 30vh

  const topImage = document.querySelector("#top-image-1");
  //top:0に値を追加
  //30vhのpx値を取得
  let topImageTop = window.getComputedStyle(topImage).top;
  topImageTop = parseInt(topImageTop, 10);

  //アニメーションしながら消える
  if (scrollPosition > threshold) {
    topImage.style.top = topImageTop + scrollPosition * +1.5 + "px";
    //徐々に透明にする
    topImage.style.opacity = 1 - (scrollPosition - threshold) / threshold;
  } else {
    //top:30vhに戻す
    topImage.style.top = "30vh";
    topImage.style.opacity = 1;
  }
});
