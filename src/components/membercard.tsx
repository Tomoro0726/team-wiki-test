import React, { useState } from "react";

interface ContributorProps {
  contributor: string;
}

export default function MemberCard({ contributor }: ContributorProps) {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <img
        src={`/contributors/${contributor}.webp`}
        alt={contributor}
        className="w-[20vw] h-[20vw] rounded-[50%]"
      />
      {showDetails && (
        <div className="mt-2 p-2 border rounded w-[100vw] h-[100vh] top-0 left-0 absolute bg-black">
          <p>Details about {contributor}</p>
        </div>
      )}
    </div>
  );
}
