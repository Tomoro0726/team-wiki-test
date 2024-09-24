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
        <div className="mt-2 p-2 border rounded">
          <p>Details about {contributor}</p>
          {/* Add more details here */}
        </div>
      )}
    </div>
  );
}
