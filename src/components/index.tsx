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
              <img className="w-[1.4vw] h-[1.4vw]" src={"/markdown/index_3.svg"} />
              <img src="/markdown/line.svg" className="h-[10px] w-[2px]" />
          </div>
            <a className="ml-[9px] no-underline text-[0.9vw]" href={"#" + item.slug}>{item.text}</a>
        </div>
        ))
      }
    </div >
  );

}
