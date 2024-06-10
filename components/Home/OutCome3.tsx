import React from 'react';
import Image from "next/image";

const OutCome3 = () => {
    // Numbers for each indicator
    const numbers = {
        climateServicesUsers: 1200,
        climateProductsDeveloped: 453,
        regionalClimateForecasts: 2345,
        riskFinancingUptake: {
            riskFinancing: 6700,
            insurance: 897
        },
        operationalResiliencePrograms: 567,
        pastoralistsFarmersUsingClimateServices: 7894,
        climateServicesInfrastructure: 1440,
        climateRiskFinanceMainstreamed: {
            riskFinancing: 1600,
            insurance: 1254
        }
    };

    return (
        <div className='pb-16'>
            <div className="md:grid md:grid-cols-1 flex flex-col gap-1">
                {/* Outcome Statement 3.1: Enhanced climate services infrastructure */}
                <div className="bg-white shadow-md p-4 rounded-md col-span-1 flex flex-col gap-1">
                    <h2 className="text-gray-900 text-balance lg:text-xl text-md md:text-2xl max-w-prose">OUTPUT STATEMENT 3.1: Enhanced climate services infrastructure</h2>
                    <p className="text-gray-400 font-bold !tracking-tight !leading-tight my-2">OUTPUT INDICATOR 3.1.1: Climate products and services for agriculture and livestock developed</p>
                    <div className="bg-gradient-to-r from-blue-100 ia-blue-200 to-blue-300 col-span-1 w-full shadow-lg rounded-md flex space-y-2 flex-col items-start justify-start p-4 md:p-6">
                        <div className="rounded-full p-3 bg-gray-100">
                            {/* Placeholder for image */}
                        </div>
                        <p className="text-sm text-gray-900">{numbers.climateProductsDeveloped}</p>
                        <h3 className="font-semibold">Climate products and services</h3>
                        <p className="text-sm text-gray-900">developed for agriculture and livestock</p>
                    </div>
                </div>
                
                {/* Outcome Statement 3.2: Regional climate forecasts and reports */}
                <div className="bg-white shadow-md p-4 rounded-md col-span-1 flex flex-col gap-2">
                    <h2 className="text-gray-900 text-balance lg:text-xl text-md md:text-2xl max-w-prose">OUTCOME STATEMENT 3.2: Regional climate forecasts and reports</h2>
                    <p className="text-gray-400 font-bold !tracking-tight !leading-tight my-2">OUTPUT INDICATOR 3.2: Regional climate forecasts and reports on the state of resilience in the HoA</p>
                    <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 col-span-1 w-full shadow-lg rounded-md flex space-y-2 flex-col items-start justify-start p-4 md:p-6">
                        <div className="rounded-full p-3 bg-gray-100">
                            {/* Placeholder for image */}
                        </div>
                        <p className="text-sm text-gray-900">{numbers.regionalClimateForecasts}</p>
                        <h3 className="font-semibold">Regional climate forecasts and reports</h3>
                        <p className="text-sm text-gray-900">on the state of resilience in the HoA</p>
                    </div>
                </div>
                
                {/* Outcome Statement 3.3: Operational capacity of regional resilience program */}
                <div className="bg-white shadow-md p-4 rounded-md col-span-1 flex flex-col gap-2">
                    <h2 className="text-gray-900 text-balance lg:text-xl text-md md:text-2xl max-w-prose">OUTPUT STATEMENT 3.3: Operational capacity of regional resilience program</h2>
                    <p className="text-gray-400 font-bold !tracking-tight !leading-tight my-2">Operational regional resilience programs</p>
                    <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 col-span-1 w-full shadow-lg rounded-md flex space-y-2 flex-col items-start justify-start p-4 md:p-6">
                        <div className="rounded-full p-3 bg-gray-100">
                            {/* Placeholder for image */}
                        </div>
                        <p className="text-sm text-gray-900">{numbers.operationalResiliencePrograms}</p>
                        <h3 className="font-semibold">Operational regional resilience programs</h3>
                    </div>
                </div>

                {/* Outcome Statement 3.1: Pastoralists and farmers using climate services */}
                <div className="bg-white shadow-md p-4 rounded-md col-span-1 flex flex-col gap-2">
                    <h2 className="text-gray-900 text-balance lg:text-xl text-md md:text-2xl max-w-prose">OUTCOME STATEMENT 3.1: Pastoralists and farmers using climate services</h2>
                    <p className="text-gray-400 font-bold !tracking-tight !leading-tight my-2">OUTCOME INDICATOR 3.1: Pastoralists and farmers in the program target area who use climate services (e.g., seasonal climate forecasting)</p>
                    <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 col-span-1 w-full shadow-lg rounded-md flex space-y-2 flex-col items-start justify-start p-4 md:p-6">
                        <div className="rounded-full p-3 bg-gray-100">
                            {/* Placeholder for image */}
                        </div>
                        <p className="text-sm text-gray-900">{numbers.pastoralistsFarmersUsingClimateServices}</p>
                        <h3 className="font-semibold">Pastoralists and farmers using climate services</h3>
                    </div>
                </div>

                {/* Outcome Statement 3.2: Climate risk finance and insurance mainstreamed */}
                <div className="bg-white shadow-md p-4 rounded-md col-span-1 flex flex-col gap-2">
                    <h2 className="text-gray-900 text-balance lg:text-xl text-md md:text-2xl max-w-prose">OUTPUT STATEMENT 3.2: Climate risk finance and insurance mainstreamed</h2>
                    <p className="text-gray-400 font-bold !tracking-tight !leading-tight my-2">OUTPUT INDICATOR 3.2.1: Uptake of climate risk financing and insurance solutions</p>
                    <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 col-span-1 w-full shadow-lg rounded-md flex space-y-2 flex-col items-start justify-start p-4 md:p-6">
                        <div className="rounded-full p-3 bg-gray-100">
                            {/* Placeholder for image */}
                        </div>
                        <p className="text-sm text-gray-900">Risk Financing: {numbers.riskFinancingUptake.riskFinancing}</p>
                        <p className="text-sm text-gray-900">Insurance: {numbers.riskFinancingUptake.insurance}</p>
                        <h3 className="font-semibold">Uptake of climate risk financing and insurance solutions</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OutCome3;
