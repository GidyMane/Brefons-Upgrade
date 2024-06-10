import MaxWidthWrapper from '@/components/Layout/MaxWidthWrapper'

import PageView2 from '@/components/annualtarget/PageView'

import React from 'react'

const page = () => {
    return (
        <div className='mt-4'>
            <MaxWidthWrapper>
                <div className='flex flex-col gap-4 bg-white items-start justify-start p-2 rounded-md'>
                    <h2 className='my-2 tracking-tight leading-tight text-balance text-xl md:text-2xl dark:text-gray-950'> Annual Targets</h2>

                    <div className='flex flex-col gap-4 p-4  w-full'>
                        <PageView2/>

                    </div>
                </div>
            </MaxWidthWrapper>

        </div>
    )
}

export default page
