export default function Contributor(contributors: any) {
  console.log(contributors);
  let member = contributors["contributors"]["Contributor"];
  console.log(member);
  return (
    <div className="flex items-center p-[1vw] pl-[2vw] pt-0">
      {
        member.map((item: any, index: number) => (
          <div
            key={index}
            className={"w-[3vw] h-[3vw] rounded-[50%] mr-[0.7vw] border-[#c6dff4] border-solid border-[3.5px] bg-[url('/contributors/" + item + ".webp')] bg-cover bg-center"}
          ></div>
        ))
      }
    </div >
  );
}
