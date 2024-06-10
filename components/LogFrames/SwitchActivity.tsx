
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Activity from './Activity';
import Image from 'next/image';
import ViewActivity from './viewactivity';
import { RootState } from '../../Redux/Store';

const SwitchActivity = ({ data,
    filtere,
    setUnits,
    setAgencies,
    setPeriods,
    setComponent }: {
        data: any;
        filtere: any;
        setUnits: any;
        setAgencies: any;
        setPeriods: any;
        setComponent: any;
    }) => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state: RootState) => state.indicator.isOpen);
    const specificActivity = useSelector((state: RootState) => state.indicator.data);
    
    
    
const exampleActivity = {
    name: specificActivity?.ActivityName,
    unitOfMeasurement: specificActivity?.UnitOfMeasurement,
    description:specificActivity?.Description,
    sourceOfData:specificActivity?.Source,
    agency: specificActivity?.Agency,
    period: specificActivity?.period,
};

    return (
        <div>
            {isOpen ? (
                <ViewActivity
                    activity={exampleActivity}
                />
            ) : (
                <div className="md:mx-20 mx-0 p-4 border rounded-md bg-white">
                    <div className="flex flex-col">
                        <div className="space-y-2">
                            <h1 className="!tracking-tight !leading-tight text-balance font-bold text-gray-950 md:text-2xl text-xl max-w-prose">
                                Indicator Activities
                            </h1>
                            <p className="text-gray-400 text-md text-balance max-w-prose">
                                View and manage for a specific indicator
                            </p>
                        </div>
                        <div>

                            {/* Add this component */}
                        </div>
                        <div className="flex justify-start items-start flex-col sm:flex-row md:gap-6 gap-4 mt-4">
                            <div className="overflow-hidden w-[300px] md:w-[400px] h-[200px] rounded-md">
                                <Image
                                    src={
                                        "https://imgs.search.brave.com/mcc7golYHpvlAgirq9GsS--c_xCi_U1zdU-DA7RV51c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdDUu/ZGVwb3NpdHBob3Rv/cy5jb20vMTgyNjY2/NC82MzMzNi9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzYzMzM2NDQ4/OC1zdG9jay1waG90/by1hY3Rpdml0aWVz/LWNvbmNlcHQtaW1h/Z2UtdGV4dC1idWxi/LmpwZw"
                                    }
                                    alt="activity"
                                    className="w-full h-full object-cover"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <div className="space-y-2">
                                <p className="text-gray-400 text-md text-balance max-w-prose">
                                    Total 2000
                                </p>
                                <p className="text-gray-950 font-bold text-lg text-balance max-w-prose">
                                    Activities Reached
                                </p>
                            </div>
                        </div>

                        {/* our table */}
                        <div className="my-6 w-full">
                            <Activity
                                data={data}
                                filtere={filtere}
                                setUnits={setUnits}
                                setAgencies={setAgencies}
                                setPeriods={setPeriods}
                                setComponent={setComponent}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SwitchActivity
