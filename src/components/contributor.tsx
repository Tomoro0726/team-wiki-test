export default function Contributor(contributors: any) {
  let member = contributors["contributors"]["Contributor"];
  //重複排除
  member = member.filter((x: any, i: any, self: any) => self.indexOf(x) === i);
  //contributor+番号でないものを排除
  member = member.filter((x: any) => x.match(/contributor[0-9]+/));

  return (
    <div className="flex items-center p-[1vw] pl-[1.7vw] pt-0">
      {member.map((item: any) => (
        <img
          src={`/public/contributors/${item}.webp`}
          className={
            "w-[3vw] h-[3vw] rounded-[50%] mr-[0.7vw] border-[#c6dff4] border-solid border-[3.5px]"
          }
        />
      ))}
    </div>
  );
}
