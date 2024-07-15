export default function Contributor(contributors: any) {
  console.log(contributors);
  let member = contributors["contributors"]["Contributor"];
  console.log(member);
  return (
    <div className="flex items-center p-[1vw] pl-[2vw] pt-0">
      {
        member.map((item: any) => (
          <div
            className={"w-[2.8vw] h-[2.8vw] rounded-[50%] mr-[0.7vw] border-[#c6dff4] border-solid border-[3.5px] bg-[url('/contributor/" + item + ".webp')] bg-cover"}
          ></div>
        ))
      }
    </div >
  );
}
