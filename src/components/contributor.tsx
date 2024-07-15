export default function Contributor(contributors: any) {
  console.log(contributors);
  let member = contributors["contributors"]["Contributor"];
  //重複排除
  member = member.filter(function (x: any, i: any, self: any) {
    return self.indexOf(x) === i;
  });
  //contributor+番号でないものを排除
  member = member.filter(function (x: any) {
    return x.match(/contributor[0-9]+/);
  });
  console.log(member[2]);
  return (
    <div className="flex items-center p-[1vw] pl-[2vw] pt-0">
      {
        member.map((item: any) => (
          <div
            className={"w-[3vw] h-[3vw] rounded-[50%] mr-[0.7vw] border-[#c6dff4] border-solid border-[3.5px] bg-[url('/contributors/" + item + ".webp')] bg-cover bg-center"}
          ></div>
        ))
      }
    </div >
  );
}
