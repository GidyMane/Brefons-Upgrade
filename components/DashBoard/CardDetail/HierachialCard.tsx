import React from 'react';
import MemberCard from './MemberCard'; // Import sub-component

interface Member {
  id: string;
  title: string;
  unit: string;
  baseline: string;
  midtarget: string;
  endtarget: string;
  frequency: string[];
  mov: string[];
  agency: string;
  members?: Member[]; // Optional recursive members
}

interface HierarchicalCardProps {
  data: Member;
}

const HierarchicalCard: React.FC<HierarchicalCardProps> = ({ data }) => {
  const { id, title, members } = data;

  return (
    <div className="card shadow-md rounded-lg"> {/* Basic card styling */}
      <div className="card-header p-4 flex justify-between items-center">
        <h2 className="text-lg md:text-md font-medium text-black my-2">{title}</h2>
        <span className="text-gray-600">ID: {id}</span>
      </div>
      <div className="card-body px-2 py-2"> {/* Content area */}
        {members && members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default HierarchicalCard;
