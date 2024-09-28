interface ContributorProps {
  contributor: string;
}

export default function MemberCard({ contributor }: ContributorProps) {
  return (
    <div className="cursor-pointer text-center">
      <img
        src={`/contributors/${contributor}.webp`}
        alt={contributor}
        className="w-[20vw] h-[20vw] rounded-[50%]"
      />
      <h3 className="text-2xl font-light">Tomoro Saito</h3>
    </div>
  );
}
