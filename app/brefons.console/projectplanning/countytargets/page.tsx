import MaxWidthWrapper from '@/components/Layout/MaxWidthWrapper'
import PageView3 from '@/components/countytargets/PageView'

import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='mt-4'>
            <MaxWidthWrapper>
                <div className='flex flex-col gap-4 bg-white items-start justify-start p-2 rounded-md'>
                    <h2 className='my-2 tracking-tight leading-tight text-balance text-xl md:text-2xl dark:text-gray-950 mx-4'> County Targets</h2>

                    <div className='flex flex-col gap-4 p-4  w-full'>
                        <PageView3/>

                    </div>
                </div>
            </MaxWidthWrapper>

        </div>
    )
}

export default page
