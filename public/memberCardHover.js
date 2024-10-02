memberCardData = {
  contributor0: {
    name: "Shiori Kajikawa",
    role: "Wet",
    image: "Shiori_Kajikawa",
    explanation:
      "I'm Shiori, an aspiring scientist continuously fascinated by the wonders of biotechnology. My experience of leading this team has transformed my life; I am truly thankful for the support all has given me. I am really, really glad I did iGEM, and I hope you enjoy our wiki!",
  },
  contributor11: {
    name: "Tatsuhiko Akiyama",
    role: "Wiki",
    image: "Tatsuhiko_Akiyama",
    explanation:
      "We are able to function as a team like this because of the people around us who support us, and we will do our best to proudly bring home the Grand Prize.",
  },
  contributor9: {
    name: "Ayaka Kotajima",
    role: "Dry",
    image: "Ayaka_Kotajima",
    explanation:
      "I am grateful to have this opportunity while still a high school student, and I will do my best in my research. Thank you!",
  },
  contributor16: {
    name: "Mizuho Sakai",
    role: "Human Practices",
    image: "Mizuho_Sakai",
    explanation:
      "I will do my best to utilize the experience I have gained so far to further my own growth, so I appreciate your continued support.",
  },
  contributor2: {
    name: "Arisa Tani",
    role: "Wet/Education",
    image: "Arisa_Tani",
    explanation:
      "I truly enjoy working with these awesome and unique members. In the future, I hope to excel at research and become an entrepreneur; I want to step closer to that dream through iGEM!",
  },
  contributor12: {
    name: "Wingdor Doria Lee",
    role: "Human Practices/Education/Wet",
    image: "Wingdor_Doria_Lee",
    explanation:
      "As a member of Grand Tokyo, I will take on the Grand Jamboree with a sense of responsibility and with the support of everyone.",
  },
  contributor4: {
    name: "Shoya Inoue",
    role: "Wet",
    image: "Shoya_Inoue",
    explanation:
      "I will continue to do my best, so I look forward to your continued support.",
  },
  contributor7: {
    name: "Miruhi Tsumiyama",
    role: "Human Practices",
    image: "Miruhi_Tsumiyama",
    explanation:
      "We will do our best to win the Grand Prize while carrying the feelings of those who support GrandTokyo on our backs.",
  },
  contributor1: {
    name: "Kei Hato",
    role: "Wet",
    image: "Kei_Hato",
    explanation:
      "I am very honored to have the support of so many people and to be able to work with a wide variety of colleagues. I want to rush all the way to the grand jamboree!",
  },
  contributor6: {
    name: "Rico Kasai",
    role: "Human Practices",
    image: "Rico_Kasai",
    explanation:
      "I learned a lot from encountering so many members! I will enjoy it to the end :)",
  },
  contributor3: {
    name: "Saki Tsuchiya",
    role: "Human Practices/Education/Wet",
    image: "Saki_Tsuchiya",
    explanation: "I will work hard to win the prize in Education!!",
  },
  contributor15: {
    name: "Rikuto Fukushima",
    role: "Education/Wet",
    image: "Rikuto_Fukushima",
    explanation:
      "I am truly happy to have had the opportunity to satisfy my intellectual curiosity to this extent. I will do my best to win the Grand Prize!",
  },
  contributor13: {
    name: "Tomoro Saito",
    role: "Wiki",
    image: "Tomoro_Saito",
    explanation:
      "I have a lot of fun working in an environment where I can work surrounded by members with advanced skills and knowledge that I wouldn't expect from high school students. I will do my best to aim for the Grand Prize.",
  },
  contributor14: {
    name: "Ryuzo Kijima",
    role: "Education/Wet",
    image: "Ryuzo_Kijima",
    explanation:
      "I'm happy to have met such interesting friends. We will do our best to win the Grand Prize.",
  },
  contributor5: {
    name: "Misaki Ozawa",
    role: "Wet",
    image: "Misaki_Ozawa",
    explanation:
      "I will use my experience to the fullest and do my best. I look forward to working with working with these members!",
  },
  contributor10: {
    name: "Yukiya Horiba",
    role: "Human Practices/Education",
    image: "Yukiya_Horiba",
    explanation:
      "I will do my best to win the Grand Prize! Thank you for your support of Grand-Tokyo!!",
  },
  contributor8: {
    name: "Kan Soda",
    role: "Wiki",
    image: "Kan_Soda",
    explanation:
      "I'm really happy to be able to work in an environment surrounded by people with high aspirations. We will support you as much as possible in terms of design!",
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
      document.getElementById("mask2").querySelector("h2").textContent =
        memberCardData[imgNameWithoutExt].role;

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
