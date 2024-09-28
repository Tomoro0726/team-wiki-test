interface ContributorProps {
  contributor: string;
}

export default function MemberCard({ contributor }: ContributorProps) {
  return (
    <div className="cursor-pointer">
      <img
        src={`/contributors/${contributor}.webp`}
        alt={contributor}
        className="w-[20vw] h-[20vw] rounded-[50%]"
      />
    </div>
  );
}
