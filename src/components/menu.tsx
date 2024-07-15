export default function Menu() {
  return (
    <div className="flex justify-between items-center fixed w-full bg-[#ecf0f3] font-bold">
      <a className="flex items-center w-1/4 pt-[0.5vw] pl-[2vw] pb-[0.5vw]" href="/">
        <img src="/logo.png" className="w-[4.5vw] h-[4.5vw]" />
        <p className="ml-[15px] text-[1.5vw] text-[#7a7c7d] font-bold">iGEM Grand Tokyo</p>
      </a>
      <div className="flex items-center pt-[0.5vw] pr-[3vw]">
        <a className="no-underline text-[#7a7c7d] text-[1.5vw] mr-[3vw]" href="/public/index.html">TEAM</a>
        <a className="no-underline text-[#7a7c7d] text-[1.5vw] mr-[3vw]" href="/project">PROJECT</a>
        <a className="no-underline text-[#7a7c7d] text-[1.5vw] mr-[3vw]" href="/public/project.html">WET LAB</a>
        <a className="no-underline text-[#7a7c7d] text-[1.5vw] mr-[3vw]" href="/public/team.html">DRY LAB</a>
        <a className="no-underline text-[#7a7c7d] text-[1.5vw] mr-[3vw]" href="/public/contact.html">HUMAN PRACTICE</a>
      </div>
    </div>
  );
}
