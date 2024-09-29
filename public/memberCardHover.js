memberCardData = {
  contributor0: {
    name: "Shiori Kajikawa",
    explanation: `I'm Shiori, an aspiring scientist continuously fascinated by the wonders of biotechnology. My experience of leading this team has transformed by life; I am truly thankful for the support all has given me. I am really, really glad I did iGEM, and I hope you enjoy our wiki! 
`,
  },
  contributor1: {
    name: "Kei Hato",
    explanation:
      "I am very honored to have the support of so many people and to be able to work with a wide variety of colleagues. I want to rush all the way to the grand jamboree!",
  },
  contributor2: {
    name: "Arisa Tani",
    explanation: `I truly enjoy working with these awesome and unique members. In the future, I hope to excel at research and become an entrepreneur; I want to step closer to that dream through iGEM!`,
  },
  contributor3: {
    name: "Saki Tsuchiya",
    explanation: `This is Saki Tsuchiya, who will take the part in wet lab and education activities.
“I will work hard to win the prize in Education!!”`,
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
  contributor17: {
    name: "Contributor 17",
    explanation:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventoreconsectetur, neque doloribus, cupiditate numquam dignissimos laborumLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos 16.",
  },
};

//URLの#以降の文字列を取得
const urlHash = location.hash;
//URLの#以降の文字列を取得
const urlHashWithoutSharp = urlHash.split("#").pop();
//URLの#以降の文字列がmemberCardDataのkeyに存在するか確認
if (urlHashWithoutSharp in memberCardData) {
  //存在する場合はmask1とmask2を表示
  document.getElementById("mask1").style.display = "block";
  document.getElementById("mask2").style.display = "block";
  //mask2の中のdivの中のimgのsrcを変更
  document.getElementById("mask2").querySelector("img").src =
    "/contributors/" + urlHashWithoutSharp + ".webp";
  //テキスト要素の変更
  document.getElementById("mask2").querySelector("h1").textContent =
    memberCardData[urlHashWithoutSharp].name;
  document.getElementById("mask2").querySelector("p").textContent =
    memberCardData[urlHashWithoutSharp].explanation;
  //mask1とmask2のopacityを変更
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
}

document.addEventListener("DOMContentLoaded", function () {
  const memberCard = document.querySelectorAll(".cursor-pointer");
  memberCard.forEach(function (card) {
    card.addEventListener("mouseover", function () {
      anime({
        targets: card,
        opacity: 0.7,
        duration: 1,
      });
    });
    card.addEventListener("mouseout", function () {
      anime({
        targets: card,
        opacity: 1,
        duration: 1,
      });
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
  //URLの#を削除
  history.pushState("", "", location.href.split("#")[0]);
});
