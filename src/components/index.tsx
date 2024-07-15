export default function Index(index: any) {
  let indexList = index["index"];
  for (let i = 0; i < indexList.length; i++) {
    indexList[i].text = indexList[i].text.replace(/<[^>]*>?/gm, '');
  }
  indexList = indexList.filter((item: any) => item.depth !== 4);
  return (
    <div>
      {
        indexList.map((item: any, index: any) => (
          <div key={index} className={`flex items-start ml-[2vw] h-min`}>
            <div className="flex justify-center [flex-flow:column] items-center align-middle">
              <img className="w-[1.4vw] h-[1.4vw]" src={"/markdown/index_" + item.depth + ".svg"} />
              <img src="/markdown/line.svg" className="w-[2px]" />
          </div>
            <a className="ml-[9px] no-underline text-[1vw]" href={"#" + item.slug}>{item.text}</a>
        </div>
        ))
      }
    </div >
  );

}
