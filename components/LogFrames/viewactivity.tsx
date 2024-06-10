import React from 'react';
import { Button } from '@/components/ui/button';

import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { resetIndicator } from '../../Redux/Slices/IndicatorSlice';

interface ViewActivityProps {
  activity: {
    name: string;
    unitOfMeasurement: string;
    description: string;
    sourceOfData: string;
    agency: string;
    period: string;
  };
}

const ViewActivity: React.FC<ViewActivityProps> = ({ activity }) => {
  const dispatch = useDispatch()
  return (
    <motion.div className='space-y-6 w-full' animate={{y:15, opacity:1}} initial={{y:15, opacity:0}} transition={{duration:0.8, ease:"easeInOut"}}>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-semibold'>{activity.name}</h1>
        <Button onClick={()=>{
          dispatch(
            resetIndicator()
          )
        }} variant="secondary" className="text-gray-900  bg-gray-300 hover:bg-green-300  hover:text-white hover:subpixel-antialiased antialiased text-sm">
          back
        </Button>
      </div>
      <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
        <div className='px-4 py-5 sm:px-6'>
          <h3 className='text-lg leading-6 font-medium text-gray-900'>Activity Details</h3>
          <p className='mt-1 max-w-2xl text-sm text-gray-500'>{activity.description}</p>
        </div>
        <div className='border-t border-gray-200'>
          <dl>
            <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>Unit of Measurement</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>{activity.unitOfMeasurement}</dd>
            </div>
            <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>Source of Data</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>{activity.sourceOfData}</dd>
            </div>
            <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>Agency</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>{activity.agency}</dd>
            </div>
            <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>Period</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>{activity.period}</dd>
            </div>
          </dl>
        </div>
      </div>
    </motion.div>
  );
};

export default ViewActivity;
