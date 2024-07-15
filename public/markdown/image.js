

const markdownContent = document.querySelector('#markdown-content');
const imgTags = markdownContent.querySelectorAll('img');

imgTags.forEach((img) => {
  const aTag = document.createElement('a');
  aTag.href = img.src;
  img.parentNode.insertBefore(aTag, img);
  aTag.appendChild(img);
});

