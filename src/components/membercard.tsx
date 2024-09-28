interface ContributorProps {
  contributor: string;
}

export default function MemberCard({ contributor }: ContributorProps) {
  return (
    <div className="cursor-pointer text-center mt-[4vh]">
      <img
        src={`/contributors/${contributor}.webp`}
        alt={contributor}
        loading="lazy"
        className="w-[20vw] h-[20vw] rounded-[50%]  bg-[#e6e6e6]"
      />
      <h3 className="text-2xl font-light">Tomoro Saito</h3>
    </div>
  );
}
