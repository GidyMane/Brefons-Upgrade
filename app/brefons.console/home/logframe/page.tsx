import MaxWidthWrapper from '@/components/Layout/MaxWidthWrapper'
import SwitchTabs from '@/components/SwitchTabs'
import React from 'react'

//components fetch
/*
*The approach for using fetch is to have the abilitiy to control cache and revalidation of data incase of an update
*/

    
async function getComponents(){
    const res = await fetch('https://mis.brefons.co.ke/api/components', {
        method: 'GET',
        cache:"force-cache",
        next:{tags:["components"]}
    })
    const data = await res.json()
    return data.Components
}



const page = async () => {
    const components = await getComponents() || []
  
    
    return (
        <MaxWidthWrapper className=' '>
            <div className='rounded-md relative'>
                <SwitchTabs data={components} />

            </div>
        </MaxWidthWrapper>
    )
}

export default page
