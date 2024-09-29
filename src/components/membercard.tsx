interface ContributorProps {
	contributor: string;
}

export default function MemberCard({ contributor }: ContributorProps) {
	const memberCardData = {
		contributor0: {
			name: "Tomoro Saiot",
			explanation: `This is our team leader, Shiori Kajikawa!“I would like to thank everyone involved in Grand Tokyo's activities for their continued support!”`,
		},
		contributor1: {
			name: "Tomoro Saiot",
			explanation:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventoreconsectetur, neque doloribus, cupiditate numquam dignissimos laborumLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos",
		},
		contributor2: {
			name: "Contributor 2",
			explanation:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventoreconsectetur, neque doloribus, cupiditate numquam dignissimos laborumLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos 2.",
		},
		contributor3: {
			name: "Contributor 3",
			explanation:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventoreconsectetur, neque doloribus, cupiditate numquam dignissimos laborumLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos 3.",
		},
		contributor4: {
			name: "Contributor 4",
			explanation:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventoreconsectetur, neque doloribus, cupiditate numquam dignissimos laborumLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos 4.",
		},
		contributor5: {
			name: "Contributor 5",
			explanation:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventoreconsectetur, neque doloribus, cupiditate numquam dignissimos laborumLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos 5.",
		},
		contributor6: {
			name: "Contributor 6",
			explanation:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventoreconsectetur, neque doloribus, cupiditate numquam dignissimos laborumLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos 6.",
		},
		contributor7: {
			name: "Contributor 7",
			explanation:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventoreconsectetur, neque doloribus, cupiditate numquam dignissimos laborumLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos 7.",
		},
		contributor8: {
			name: "Contributor 8",
			explanation:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventoreconsectetur, neque doloribus, cupiditate numquam dignissimos laborumLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos 8.",
		},
		contributor9: {
			name: "Contributor 9",
			explanation:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventoreconsectetur, neque doloribus, cupiditate numquam dignissimos laborumLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos 9.",
		},
		contributor10: {
			name: "Contributor 10",
			explanation:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventoreconsectetur, neque doloribus, cupiditate numquam dignissimos laborumLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos 10.",
		},
		contributor11: {
			name: "Contributor 11",
			explanation:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventoreconsectetur, neque doloribus, cupiditate numquam dignissimos laborumLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos 11.",
		},
		contributor12: {
			name: "Contributor 12",
			explanation:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventoreconsectetur, neque doloribus, cupiditate numquam dignissimos laborumLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos 12.",
		},
		contributor13: {
			name: "Contributor 13",
			explanation:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventoreconsectetur, neque doloribus, cupiditate numquam dignissimos laborumLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos 13.",
		},
		contributor14: {
			name: "Contributor 14",
			explanation:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventoreconsectetur, neque doloribus, cupiditate numquam dignissimos laborumLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos 14.",
		},
		contributor15: {
			name: "Contributor 15",
			explanation:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventoreconsectetur, neque doloribus, cupiditate numquam dignissimos laborumLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos 15.",
		},
		contributor16: {
			name: "Contributor 16",
			explanation:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quosblanditiis tenetur unde suscipit, quam beatae rerum inventoreconsectetur, neque doloribus, cupiditate numquam dignissimos laborumLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos 16.",
		},
	};
	return (
		<div className="cursor-pointer text-center mb-[3.5vh] mr-[2.5vw] ml-[2.5vw]">
			<img
				src={`/contributors/${contributor}.webp`}
				alt={contributor}
				loading="lazy"
				className="w-[15vw] h-[15vw] rounded-[50%]  bg-[#c6c6c6]"
			/>
		</div>
	);
}
