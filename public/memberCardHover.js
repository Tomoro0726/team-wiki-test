document.getElementById("mask1").style.display = "none";
document.getElementById("mask1").style.opacity = 0.0;
document.getElementById("mask2").style.display = "none";
document.getElementById("mask2").style.opacity = 0.0;

memberCardData = {
  contributor0: {
    name: "Tomoro Saiot",
    explanation:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventoreconsectetur, neque doloribus, cupiditate numquam dignissimos laborumLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos",
  },
  contributor1: {
    name: "Tomoro Saiot",
    explanation:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventoreconsectetur, neque doloribus, cupiditate numquam dignissimos laborumLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos",
  },
  contributor2: {
    name: "Contributor 2",
    explanation:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventoreconsectetur, neque doloribus, cupiditate numquam dignissimos laborumLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos 2.",
  },
  contributor3: {
    name: "Contributor 3",
    explanation:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventoreconsectetur, neque doloribus, cupiditate numquam dignissimos laborumLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos 3.",
  },
  contributor4: {
    name: "Contributor 4",
    explanation:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventoreconsectetur, neque doloribus, cupiditate numquam dignissimos laborumLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos 4.",
  },
  contributor5: {
    name: "Contributor 5",
    explanation:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventoreconsectetur, neque doloribus, cupiditate numquam dignissimos laborumLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos 5.",
  },
  contributor6: {
    name: "Contributor 6",
    explanation:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventoreconsectetur, neque doloribus, cupiditate numquam dignissimos laborumLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos 6.",
  },
  contributor7: {
    name: "Contributor 7",
    explanation:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventoreconsectetur, neque doloribus, cupiditate numquam dignissimos laborumLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos 7.",
  },
  contributor8: {
    name: "Contributor 8",
    explanation:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventoreconsectetur, neque doloribus, cupiditate numquam dignissimos laborumLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos 8.",
  },
  contributor9: {
    name: "Contributor 9",
    explanation:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventoreconsectetur, neque doloribus, cupiditate numquam dignissimos laborumLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos 9.",
  },
  contributor10: {
    name: "Contributor 10",
    explanation:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventoreconsectetur, neque doloribus, cupiditate numquam dignissimos laborumLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos 10.",
  },
  contributor11: {
    name: "Contributor 11",
    explanation:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventoreconsectetur, neque doloribus, cupiditate numquam dignissimos laborumLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos 11.",
  },
  contributor12: {
    name: "Contributor 12",
    explanation:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventoreconsectetur, neque doloribus, cupiditate numquam dignissimos laborumLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos 12.",
  },
  contributor13: {
    name: "Contributor 13",
    explanation:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventoreconsectetur, neque doloribus, cupiditate numquam dignissimos laborumLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos 13.",
  },
  contributor14: {
    name: "Contributor 14",
    explanation:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventoreconsectetur, neque doloribus, cupiditate numquam dignissimos laborumLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos 14.",
  },
  contributor15: {
    name: "Contributor 15",
    explanation:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventoreconsectetur, neque doloribus, cupiditate numquam dignissimos laborumLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos 15.",
  },
  contributor16: {
    name: "Contributor 16",
    explanation:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventoreconsectetur, neque doloribus, cupiditate numquam dignissimos laborumLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos 16.",
  },
};

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
      //テキスト要素の変更
      const imgNameWithoutExt = imgName.split(".")[0];
      document.getElementById("mask2").querySelector("h1").textContent =
        memberCardData[imgNameWithoutExt].name;
      document.getElementById("mask2").querySelector("p").textContent =
        memberCardData[imgNameWithoutExt].explanation;

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
