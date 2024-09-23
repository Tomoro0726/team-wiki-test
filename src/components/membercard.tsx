import { useState } from "react";

interface ContributorProps {
  contributor: string;
}

export default function MemberCard({ contributor }: ContributorProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <img
        src={`/contributors/${contributor}.webp`}
        alt={contributor}
        className="w-[20vw] h-[20vw] rounded-[50%]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      {isHovered && (
        <div className="absolute top-[20vw] left-[20vw] w-[20vw] h-[20vw] bg-[#c6dff4] p-[1vw] rounded-[10%]">
          {contributor}
        </div>
      )}
    </div>
  );
}
