interface ContributorProps {
  contributor: string;
}

export default function MemberCard({ contributor }: ContributorProps) {
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
