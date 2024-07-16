import { Picture, Image } from 'astro:assets';

export default function Menu() {
  return (
    <div id="menu" className="flex justify-between items-center bg-[#ECF0f3] p-4 font-bold z-50">
      <a className="flex items-center w-1/4 pt-[0.5vw] pl-[2vw] pb-[0.5vw]" href="/">
        <img src="/logo.webp" className="h-[3vw]" />
      </a>
      <div className="flex items-center pt-[0.5vw] pr-[1vw]">
        <a className="no-underline text-[#4D4D4D] text-[1.3vw] mr-[3vw]" href="/team">
          TEAM
        </a>
        <a className="no-underline text-[#4D4D4D] text-[1.3vw] mr-[3vw]" href="/project">
          PROJECT
        </a>
        <a className="no-underline text-[#4D4D4D] text-[1.3vw] mr-[3vw]" href="/wetlab">
          WET
        </a>
        <a className="no-underline text-[#4D4D4D] text-[1.3vw] mr-[3vw]" href="/dry">
          DRY
        </a>
        <a className="no-underline text-[#4D4D4D] text-[1.3vw] mr-[3vw]" href="/human">
          HUMAN PRACTICE
        </a>
      </div>
    </div>
  );
}
