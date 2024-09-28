//document.getElementById("mask").style.display = "none";
//document.getElementById("mask").style.opacity = 0.0;

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

//click
document.addEventListener("DOMContentLoaded", function () {
  const memberCard = document.querySelectorAll(".cursor-pointer");
  memberCard.forEach(function (card) {
    card.addEventListener("click", function () {
      console.log("click");
      document.getElementById("mask").style.display = "block";
      anime({
        targets: "#mask",
        opacity: 0.5,
        duration: 300,
        easing: "linear",
      });
    });
  });
});
