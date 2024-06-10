import React from 'react';
import CardData from './compfour.json';
import HierarchicalCard from './CardDetail/HierachialCard';

const ComponentFour = () => {
    // Transform CardData to match the structure of HierarchicalCardProps
    const data = transformCardData(CardData);

    return (
        <div className='grid md:grid-cols-1 gap-4 w-full bg-white rounded shadow'>
            <HierarchicalCard data={data} />
        </div>
    );
};

// Function to transform CardData into the structure expected by HierarchicalCardProps
const transformCardData = (cardData: any): any => {
    // Implement your transformation logic here
    // Example transformation:
    return {
        id: cardData.id,
        title: cardData.title,
        members: cardData.members.map(transformMember),
    };
};

const transformMember = (memberData: any): any => {
    // Implement your transformation logic here for each member
    // Example transformation:
    return {
        id: memberData.id,
        title: memberData.title,
        unit: memberData.unit,
        baseline: memberData.baseline,
        midtarget: memberData.midtarget,
        endtarget: memberData.endtarget,
        frequency: memberData.frequency,
        mov: memberData.mov,
        agency: memberData.agency,
        members: memberData.members?.map(transformMember),
    };
};

export default ComponentFour;
