import React from 'react'
import { Tabs } from '../Aceternity/tabs';
import PageView from './PageView';
import UpdatePageView from './Update/PageView';



const SwitchTabs = () => {
    
    const tabs =[
            {
                title: "Register Contract",
                value: "register",
                content: <PageView/>
            },
            {
                title: "Update Contract",
                value: "update",
                content: <UpdatePageView/>
            },
        
        ]
  return (
    <div>
      <Tabs tabs={tabs}/>
    </div>
  )
}

export default SwitchTabs
