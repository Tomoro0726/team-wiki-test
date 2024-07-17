export default function Header () {

  const headers: { [header_name: string]: Array<string> } = {
    "team" : [
      "team",
      "attributions"
    ],
    "project" : [
      "contribution",
      "description"
    ],
    "wet" : [
      "plant",
      "safety",
      "experiments",
      "notebook",
      "results",
      "engineering"
    ],
    "Dry" : [
      "hardware",
      "measurement",
      "model",
      "software"
    ],
    "safety" : [
      "safety"
    ],
    "Human Practices" : [
      "human-practices",
      "education",
      "entrepreneurship",
      "inclusivity",
      "sustainable"
    ]
  }
  
  return (
    <nav id="menu" className="nav-menu flex justify-between items-center bg-[#ECF0f3] p-4 font-bold z-50">
      <a className="flex items-center w-1/4 pt-[0.5vw] pl-[2vw] pb-[0.5vw]" href="/">
        <img src="/logo.webp" className="h-[3vw]" />
      </a>
      <ul className="menu-list">
        <li className="menu-item">
          <a href="/">Home</a>
        </li>

        {
          Object.keys(headers).map((header) => (
            <li className="menu-item drop-menu">
              <a href={`/${header}`}>{header} &or;</a>
              <ul className="drop-menu-list">
                {
                  headers[header].map((subHeader) => (
                    <li className="drop-menu-item">
                      <a href={`/${subHeader}`}>{subHeader}</a>
                    </li>
                  ))
                }
              </ul>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}