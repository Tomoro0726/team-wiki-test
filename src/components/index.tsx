export default function Index(index: any) {
  let indexList = index['index'];
  for (let i = 0; i < indexList.length; i++) {
    indexList[i].text = indexList[i].text.replace(/<[^>]*>?/gm, '');
  }
  indexList = indexList.filter((item: any) => item.depth !== 4);

  //#footnote-labelを削除
  indexList = indexList.filter((item: any) => item.slug !== 'footnote-label');
  //配列の最後だけを取得
  let last = indexList[indexList.length - 1];

  //配列の最後を削除
  indexList.pop();

  return (
    <div>
      {indexList.map((item: any, index: any) => (
        <div key={index} className={`flex items-start ml-[1.7vw] h-min`}>
          <div className="flex justify-center [flex-flow:column] items-center align-middle">
            <img className="w-[1.1vw] h-[1.1vw]" src={'/markdown/index_3.svg'} />
            <img src="/markdown/line.svg" className="h-[24px]" />
          </div>
          <a
            className="ml-[9px] font-[600]	text-[#7a7c7d] no-underline text-[1vw]"
            href={'#' + item.slug}
          >
            {item.text}
          </a>
        </div>
      ))}
      <div key={index} className={`flex items-start ml-[1.7vw] h-min`}>
        <div className="flex justify-center [flex-flow:column] items-center align-middle">
          <img className="w-[1.1vw] h-[1.1vw]" src={'/markdown/index_3.svg'} />
        </div>
        <a
          className="ml-[9px] font-[600]	text-[#7a7c7d] no-underline text-[1vw]"
          href={'#' + last.slug}
        >
          {last.text}
        </a>
      </div>
    </div>
  );
}
