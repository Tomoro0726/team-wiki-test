window.addEventListener("scroll", () => {
  let scroll_y = window.scrollY;
  if (
    scroll_y <
    document.getElementById("title").clientHeight -
    window.screen.availHeight / 100 * 8 -
    window.screen.availWidth / 100 * 3.3
  ) {
    document.getElementById("left_content").style.transform = `translateY(${-scroll_y}px)`;
  }
});
