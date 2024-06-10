import MaxWidthWrapper from '@/components/Layout/MaxWidthWrapper'
import PageView from '@/components/subprojects/PageView'
import SwitchTabs from '@/components/subprojects/SwitchTabs'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='mt-4'>
            <MaxWidthWrapper>
                <div className='flex flex-col gap-4 bg-white items-start justify-start p-2 rounded-md'>

                    <div className='flex flex-col gap-4 p-4  w-full'>
                        coming soon

                    </div>
                </div>
            </MaxWidthWrapper>

        </div>
    )
}

export default page
