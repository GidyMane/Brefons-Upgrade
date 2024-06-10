import React from 'react'
import { Tabs } from '../Aceternity/tabs'
import ComponentOne from './ComponentOne'
import ComponentTwo from './ComponentTwo'
import ComponentThree from './ComponentThree'
import ComponentFour from './ComponentFour'

const tabs = [
    {
        title: "Strengthening the resilience of Agro-Pastoral production systems",
        value: "irrigation",
        content: <ComponentOne/>
    },
    {
        title: "Agribusiness and Trade Development Supported",
        value: "component 2",
        content: <ComponentTwo/>
    },
    {
        title: "Strengthening Agropastoral Communities’ Capacity to Adapt to Climate Change",
        value: "component 3",
        content: <ComponentThree/>
    },
    {
        title: "Program Coordination and Knowledge Management",
        value: "component 4",
        content: <ComponentFour/>
    }
    
]

const InfoSection = () => {
    return (
        <div className='w-full'>
            <Tabs tabs={tabs}  contentClassName='' containerClassName='dark:text-gray-800'/>
        </div>
    )
}

export default InfoSection