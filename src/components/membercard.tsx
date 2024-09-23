export default function MemberCard(contributor: any) {
  console.log(contributor);
  return (
    <div>
      <img
        src={`/public/contributors/${contributor.contributor}.webp`}
        alt={contributor.contributor}
        className="w-[20vw] h-[20vw] rounded-[50%]"
      />
    </div>
  );
}
