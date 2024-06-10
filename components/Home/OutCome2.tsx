import React from 'react';
import Image from "next/image";

const OutCome2 = () => {
    // Define the statistics
    const farmersAndPastoralistsBenefiting = 1440;
    const peopleBenefittingFromEntrepreneurship = 1600;
    const peopleWithAccessToRenewableEnergy = 1254;

    return (
        <div className='pb-16'>
            <div className="md:grid md:grid-cols-1 flex flex-col gap-4">
                {/* Outcome Statement 2.1: Access provided to digital advisory services */}
                <div className="bg-white shadow-md p-4 rounded-md col-span-1 flex flex-col gap-2">
                    <h2 className="text-gray-900 text-balance lg:text-xl text-md md:text-2xl max-w-prose">OUTPUT STATEMENT 2.1: Access provided to digital advisory services</h2>
                    <p className="text-gray-400 font-bold !tracking-tight !leading-tight my-2">OUTPUT INDICATOR 2.1.1: Farmers and pastoralists benefiting from an extension on using digital advisory services under the program</p>
                    <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 col-span-1 w-full shadow-lg rounded-md flex space-y-2 flex-col items-start justify-start p-4 md:p-6">
                        <div className="rounded-full p-3 bg-gray-100">
                            <Image src={"/health.png"} className="shrink-0" width={20} height={20} alt="digital advisory" />
                        </div>
                        <p className="text-sm text-gray-900">{farmersAndPastoralistsBenefiting}</p>
                        <h3 className="font-semibold">Farmers and Pastoralists</h3>
                        <p className="text-sm text-gray-900">benefiting from an extension on using digital advisory services under the program</p>
                    </div>
                </div>
                
                {/* Outcome Statement 2.2: Inclusive entrepreneurship and trade promoted */}
                <div className="bg-white shadow-md p-4 rounded-md col-span-1 flex flex-col gap-2">
                    <h2 className="text-gray-900 text-balance lg:text-xl text-md md:text-2xl max-w-prose">OUTPUT STATEMENT 2.2: Inclusive entrepreneurship and trade promoted</h2>
                    <p className="text-gray-400 font-bold !tracking-tight !leading-tight my-2">OUTPUT INDICATOR 2.2.1: People benefitting from enhanced entrepreneurship skills development and access to finance</p>
                    <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 col-span-1 w-full shadow-lg rounded-md flex space-y-2 flex-col items-start justify-start p-4 md:p-6">
                        <div className="rounded-full p-3 bg-gray-100">
                            {/* Placeholder for image */}
                        </div>
                        <p className="text-sm text-gray-900">{peopleBenefittingFromEntrepreneurship}</p>
                        <h3 className="font-semibold">People</h3>
                        <p className="text-sm text-gray-900">benefitting from enhanced entrepreneurship skills development and access to finance</p>
                    </div>
                </div>
                
                {/* Outcome Statement 2.3: Access to Renewable Energy Facilitated */}
                <div className="bg-white shadow-md p-4 rounded-md col-span-1 flex flex-col gap-2">
                    <h2 className="text-gray-900 text-balance lg:text-xl text-md md:text-2xl max-w-prose">OUTPUT STATEMENT 2.3: Access to Renewable Energy Facilitated</h2>
                    <p className="text-gray-400 font-bold !tracking-tight !leading-tight my-2">OUTPUT INDICATOR 2.3.1: People with access to renewable energy for households</p>
                    <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 col-span-1 w-full shadow-lg rounded-md flex space-y-2 flex-col items-start justify-start p-4 md:p-6">
                        <div className="rounded-full p-3 bg-gray-100">
                            {/* Placeholder for image */}
                        </div>
                        <p className="text-sm text-gray-900">{peopleWithAccessToRenewableEnergy}</p>
                        <h3 className="font-semibold">People</h3>
                        <p className="text-sm text-gray-900">with access to renewable energy for households</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OutCome2;
