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
		"HUMAN PRACTICES": [
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
			className="nav-menu flex justify-between items-center bg-[#ECF0f3] p-4 z-50 font-semibold"
		>
			<a
				className="flex items-center w-1/4 pt-[0.5vw] pl-[2vw] pb-[0.5vw]"
				href="/"
			>
				<img src="/logo.webp" className="h-[3vw]" />
			</a>
			<ul className="menu-list">
				<li className="menu-item">
					<a href="/">HOME</a>
				</li>

				{Object.keys(headers).map((header) => (
					//サブヘッダが複数ある時はdrop-menuクラスを追加
					<div
						className={`menu-item ${headers[header].length > 1 ? "drop-menu" : ""}`}
					>
						{headers[header].length > 1 ? ( // 親ヘッダにサブヘッダが複数ある時
							<>
								<a href={`/${header}`}>{header} &or;</a>
								<div className="drop-menu-list">
									{headers[header].map((subHeader) => (
										<div className="drop-menu-item">
											<a href={`/${subHeader}`}>{subHeader}</a>
										</div>
									))}
								</div>
							</>
						) : (
							// 親ヘッダにサブヘッダが1つの時
							<a href={`/${headers[header][0]}`}>{headers[header][0]}</a>
						)}
					</div>
				))}
			</ul>
		</nav>
	);
}
