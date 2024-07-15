export default function Footer() {
    return (
        <div className="w-full bg-[#ecf0f3]">
            <div className="flex justify-center items-center">
                <a className="flex items-center w-1/4 pt-[0.5vw] pl-[2vw] pb-[0.5vw]" href="/">
                    <img src="/logo.png" className="w-[4.5vw] h-[4.5vw]" />
                    <p className="ml-[15px] text-[2vw] text-[#7a7c7d]">iGEM Grand Tokyo</p>
                </a>
            </div>
            <div className="flex justify-center items-center pt-[1vw] pb-[0.5vw] fill-[#7a7c7d]">
                <a href="https://x.com/igemgrandtokyo">
                    <img src="/icon-fontawesome/x-twitter.svg" className="w-[2vw] h-[2vw] mr-[2vw]" />
                </a>
                <a href="https://www.instagram.com/igemgrandtokyo/">
                    <img src="/icon-fontawesome/instagram.svg" className="w-[2vw] h-[2vw] mr-[2vw]" />
                </a>
                <a href="https://note.com/igem_grand_tokyo/">
                    <img src="/icon-fontawesome/file-regular.svg" className="w-[2vw] h-[2vw] mr-[2vw]" />
                </a>
                <a href="https://www.facebook.com/igemgrandtokyo">
                    <img src="/icon-fontawesome/facebook-f.svg" className="w-[2vw] h-[2vw] mr-[2vw]" />
                </a>
            </div>
            <p className="text-[#7a7c7d] text-[1.5vw] font-light flex justify-center items-center"><small>&copy; 2024 - Content on this site is licensed under a <a href="https://creativecommons.org/licenses/by/4.0/" rel="license">Creative Commons Attribution 4.0 International license</a></small></p>
            <p className="text-[#7a7c7d] text-[1.5vw] font-light flex justify-center items-center">
                <small>The repository used to create this website is available at <a href="https://gitlab.igem.org/2024/grand-tokyo">gitlab.igem.org/2024/grand-tokyo</a>.</small>
            </p>
        </div>
    );
} 