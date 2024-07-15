export default function Menu() {
  return (
    <div className="flex justify-between items-center bg-[#ecf0f3] font-bold z-50">
      <a className="flex items-center w-1/4 pt-[0.5vw] pl-[2vw] pb-[0.5vw]" href="/">
        <img src="/logo.png" className="w-[4.5vw] h-[4.5vw]" />
        <p className="ml-[15px] text-[1.5vw] text-[#4D4D4D ] font-bold">iGEM Grand Tokyo</p>
      </a>
      <div className="flex items-center pt-[0.5vw] pr-[3vw]">
        <a className="no-underline text-[#4D4D4D] text-[1.5vw] mr-[3vw]" href="/team">TEAM</a>
        <a className="no-underline text-[#4D4D4D] text-[1.5vw] mr-[3vw]" href="/project">PROJECT</a>
        <a className="no-underline text-[#4D4D4D] text-[1.5vw] mr-[3vw]" href="/weblab">WET LAB</a>
        <a className="no-underline text-[#4D4D4D] text-[1.5vw] mr-[3vw]" href="/public/team.html">DRY LAB</a>
        <a className="no-underline text-[#4D4D4D] text-[1.5vw] mr-[3vw]" href="/public/contact.html">HUMAN PRACTICE</a>
      </div>
    </div>
  );
}
