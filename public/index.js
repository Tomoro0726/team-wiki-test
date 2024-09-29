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
    const newTop = topImageTop + scrollPosition * 0.01;
    const maxTop = viewportHeight + topImage.offsetHeight;
    topImage.style.top = Math.min(newTop, maxTop) + "px";
    //徐々に透明にする
    topImage.style.opacity = Math.max(
      1 - (scrollPosition - threshold) / (4.5 * threshold),
      0
    );
  } else {
    //top:30vhに戻す
    topImage.style.top = "30vh";
    topImage.style.opacity = 1;
  }
});
