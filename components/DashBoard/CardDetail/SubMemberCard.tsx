import React from 'react';

interface SubMember {
  id: string;
  title: string;
  unit: string;
  baseline: string;
  midtarget: string;
  endtarget: string;
  frequency: string[];
  mov: string[];
  agency: string;
}

interface SubMemberCardProps {
  subMember: SubMember;
}

const SubMemberCard: React.FC<SubMemberCardProps> = ({ subMember }) => {
    const { id, title, unit, baseline, midtarget, endtarget, frequency, mov, agency } = subMember;

    return (
        <div className="mb-4 pl-4 pb-4 mt-4 border-b border-slate-500"> {/* Indent sub-member content */}
            <h3 className="text-base font-medium text-blue-900/80 my-4">{title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className='text-black font-bold text-md'>Unit: <span className='text-gray-600'>{unit}</span></div>
                <div className='text-black font-bold text-md'>Baseline: <span className='text-gray-600'>{baseline}</span></div>
                <div className='text-black font-bold text-md  flex flex-row'>Mid Target: <p className='text-gray-600 flex items-center justify-start gap-2 ml-2 '>
                    {midtarget && (
                        <svg width="18" height="18" viewBox="0 0 15 15" className='text-green-500' fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>

                    )}
                    {midtarget?.slice(midtarget.length - 3)}</p></div>
                <div className='text-black font-bold text-md'>End Target: <span className='text-gray-600'>{endtarget}</span></div>
                <div className='text-black font-bold text-md'>Frequency: <span className='text-gray-600'>{frequency.join(",")}</span></div>
                <div className='text-black font-bold text-md'>MoV: <span className='text-gray-600'>{mov.join(",")}</span></div>
                <div className='text-black font-bold text-md'>Agency: <span className='text-gray-600'>{agency}</span></div>
            </div>
        </div>
    );
};

export default SubMemberCard;
