export default function Footer() {
  return (
    <div>
      <a href="#menu">
        <img
          className="w-[4vw] absolute right-[7%] mt-[1vh]"
          src="/back.svg"
          alt=""
        />
      </a>
      <div className="flex justify-center items-center h-[20vh] mt-[8vh] bg-[#ECF0F3]">
        <div className="flex">
          <img
            src="/footer-logo.png"
            className="h-[10vh] mr-[2vw] flex justify-center items-center"
          />
          <div className="flex justify-center items-center">
            <div>
              <p className="text-3xl font-normal text-customGray">
                iGEM Grand Tokyo
              </p>
              <div className="flex justify-start items-centr pt-[0vw] fill-[#7a7c7d]">
                <a href="https://x.com/igemgrandtokyo">
                  <img
                    src="/icon-fontawesome/x-twitter.svg"
                    className="w-[1.6vw] h-[1.6vw] mr-[0.8vw]"
                    loading="lazy"
                  />
                </a>
                <a href="https://www.instagram.com/igemgrandtokyo/">
                  <img
                    src="/icon-fontawesome/instagram.svg"
                    className="w-[1.6vw] h-[1.6vw] mr-[0.8vw]"
                    loading="lazy"
                  />
                </a>
                <a href="https://note.com/igem_grand_tokyo/">
                  <img
                    src="/icon-fontawesome/file-regular.svg"
                    className="w-[1.6vw] h-[1.6vw] mr-[0.8vw]"
                    loading="lazy"
                  />
                </a>
                <a href="https://www.facebook.com/igemgrandtokyo">
                  <img
                    src="/icon-fontawesome/facebook-f.svg"
                    className="w-[1.6vw] h-[1.6vw] mr-[0.8vw]"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-customGray text-[1vw] font-light flex justify-center items-center">
        <small>
          &copy; 2024 - Content on this site is licensed under a{" "}
          <a href="https://creativecommons.org/licenses/by/4.0/" rel="license">
            Creative Commons Attribution 4.0 International license
          </a>
        </small>
      </p>
      <p className="text-customGray text-[1vw] font-light flex justify-center items-center mb-[3vh]">
        <small>
          The repository used to create this website is available at{" "}
          <a href="https://gitlab.igem.org/2024/grand-tokyo">
            gitlab.igem.org/2024/grand-tokyo
          </a>
          .
        </small>
      </p>
    </div>
  );
}
