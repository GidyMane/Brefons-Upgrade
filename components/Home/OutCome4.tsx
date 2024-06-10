import React from 'react';

const OutCome4 = () => {
    // Numbers for each indicator
    const numbers = {
        genderActionPlansImplemented: 230,
        baselineSurveysDone: 56,
    };

    return (
        <div className="md:grid md:grid-cols-1 flex flex-col gap-4">
            {/* Output Statement 4.1: Program work plans and activities */}
            <div className="bg-white shadow-md p-4 rounded-md col-span-1 flex flex-col gap-2">
                <h2 className="text-gray-900 text-balance lg:text-xl text-md md:text-2xl max-w-prose">OUTPUT STATEMENT 4.1: Program work plans and activities</h2>
                {/* Indicator 4.1.1: Gender action plans implemented */}
                <p className="text-gray-400 font-bold !tracking-tight !leading-tight my-2">OUTPUT INDICATOR 4.1.1: Gender action plans implemented</p>
                <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 col-span-1 w-full shadow-lg rounded-md flex space-y-2 flex-col items-start justify-start p-4 md:p-6">
                    <div className="rounded-full p-3 bg-gray-100">
                        <p className="text-gray-600"></p>
                    </div>
                    <p className="text-sm text-gray-900 font-bold">{numbers.genderActionPlansImplemented}</p>
                    <h3 className="font-semibold">Gender action plans implemented</h3>
                </div>
                {/* Indicator 4.1.2: Baseline surveys done */}
                <p className="text-gray-400 font-bold !tracking-tight !leading-tight my-2">OUTPUT INDICATOR 4.1.2: Baseline surveys done</p>
                <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 col-span-1 w-full shadow-lg rounded-md flex space-y-2 flex-col items-start justify-start p-4 md:p-6">
                    <div className="rounded-full p-3 bg-gray-100">
                        <p className="text-gray-600"></p>
                    </div>
                    <p className="text-sm text-gray-900 font-bold">{numbers.baselineSurveysDone}</p>
                    <h3 className="font-semibold">Baseline surveys done</h3>
                </div>
            </div>
        </div>
    );
};

export default OutCome4;
