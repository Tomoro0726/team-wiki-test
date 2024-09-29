export default function Header() {
  const headers: { [header_name: string]: Array<string> } = {
    TEAM: ["Team", "Attributions"],
    PROJECT: ["Contribution", "Description"],
    WET: [
      "Plant",
      "Safety",
      "Experiments",
      "Notebook",
      "Results",
      "Engineering",
    ],
    DRY: ["Hardware", "Measurement", "Model", "Software"],
    SAFETY: ["SAFETY"],
    "HUMAN-PRACTICES": [
      "Human-practices",
      "Education",
      "Entrepreneurship",
      "Inclusivity",
      "Sustainable",
    ],
  };

  return (
    <nav
      id="menu"
      className="nav-menu flex justify-between items-center bg-[#ECF0f3] p-4 pr-[0] font-semibold"
    >
      <a
        className="flex items-center w-1/4 pt-[0.5vw] pl-[2vw] pb-[0.5vw]"
        href="/"
      >
        <img src="/logo.webp" className="h-[3vw]" />
      </a>
      <ul className="menu-list">
        <div className="menu-item">
          <a href="/" className="font-extrabold">
            HOME
          </a>
        </div>

        {Object.keys(headers).map((header) => (
          //サブヘッダが複数ある時はdrop-menuクラスを追加
          <div
            className={`menu-item ${headers[header].length > 1 ? "drop-menu" : ""}`}
          >
            {headers[header].length > 1 ? ( // 親ヘッダにサブヘッダが複数ある時
              <>
                <a href={`/${header.toLowerCase()}`} className="font-extrabold">
                  {header.toUpperCase()}
                  <img
                    className="h-[1vh] ml-[5px] mt-[2px]"
                    src="/nav.svg"
                    alt=""
                  />
                </a>
                {/* URLはLowerで、headerはUpperで */}
                <div className="drop-menu-list">
                  {headers[header].map((subHeader) => (
                    <div className="drop-menu-item">
                      <a
                        href={`/${subHeader.toLowerCase()}`}
                        className="font-semibold  text-customGray"
                      >
                        {subHeader.charAt(0).toUpperCase() +
                          subHeader.slice(1).toLowerCase()}
                      </a>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              // 親ヘッダにサブヘッダが1つの時
              <a
                className="font-extrabold"
                href={`/${headers[header][0].toLowerCase()}`}
              >
                {headers[header][0].toUpperCase()}
              </a>
            )}
          </div>
        ))}
      </ul>
    </nav>
  );
}
