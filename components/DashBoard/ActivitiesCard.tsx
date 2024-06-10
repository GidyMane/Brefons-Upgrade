import React from 'react';

const activities = [
    {
        title: "County Activities",
        activities: [
            {
                title: "Outdoor Adventure",
                activityname: "Turkana",
                activitycaption: "637 Activities",
                up: true,
                amount: 3
            },
            {
                title: "Cultural Experience",
                activityname: "Marsabit",
                activitycaption: "89 Activities",
                up: true,
                amount: 3
            },
            {
                title: "Wellness Retreat",
                activityname: "West Pokot",
                activitycaption: "88 Activities",
                up: false,
                amount: 2
            },
            {
                title: "Culinary Delight",
                activityname: "Baringo",
                activitycaption: "582 Activities",
                up: true,
                amount: 3

            },
            {
                title: "Thrilling Excursion",
                activityname: "Meru",
                activitycaption: "423 Activities",
                up: true,
                amount: 3
            }
        ]
    },
    {
        title: "Daily Activities",
        activities: [
            {
                title: "Outdoor Adventure",
                activityname: "Construction of boreholes",
                activitycaption: "52 Activities",
                up: true,
                amount: 3
            },
            {
                title: "Cultural Experience",
                activityname: "Trainings",
                activitycaption: "45 Activities",
                up: true,
                amount: 3
            },
            {
                title: "Wellness Retreat",
                activityname: "Extension Services",
                activitycaption: "64 Activities",
                up: true,
                amount: 3
            },
            {
                title: "Culinary Delight",
                activityname: "Nutrition Services",
                activitycaption: "24 Activities",
                up: true,
                amount: 3
            },
            {
                title: "Thrilling Excursion",
                activityname: "Farm Activities",
                activitycaption: "20 Activities",
                up: false,
                amount: 1
            }
        ]
    }
];

const ActivitiesCard = () => {
    return (
        <div className='md:grid md:grid-cols-2 gap-4'>
            {activities.map((activity, index) => (
                <div className='shadow-md my-2 rounded-md bg-[#182237] p-4  col-span-1 w-full' key={index}>
                    <h3 className='text-gray-500 font-medium text-lg'>{activity.title}</h3>

                    {activity?.activities?.map((activity, index) => (
                        <div className='ml-2' key={index}>

                            <div className='flex justify-between gap-2 mt-4'>
                                <div className='flex flex-col gap-2 items-start justify-start'>
                                    <p className='text-md font-bold text-white'>{activity.activityname}</p>
                                    <p className='text-md font-bold text-gray-500'>{activity.activitycaption}</p>
                                </div>

                                <div className=' flex flex-row justify-between items-center gap-2 text-white font-medium text-sm'>
                                    <p>{activity.amount}</p>
                                    {activity.up ? (

                                        <svg width="15" height="15" className='text-green-600' viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                                    ) : (

                                        <svg width="15" className="text-red-600" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                                    )
                                    }

                                </div>
                            </div>
                        </div>
                    ))
                    }

                </div >
            ))}
        </div >
    );
};

export default ActivitiesCard;
