import React from 'react'
import { Tabs } from './Aceternity/tabs'
import PageView from './componentsfiles/PageView'
import IndicatorView from './Indicatorfiles/PageView'

const SwitchTabs = ({data}:{data:any}) => {

  const tabs = [
    {
      title: "Components",
      value: "components",
      content: <PageView data={data} />,
    },
    {
      title: "Indicators",
      value: "indicators",
      content: <IndicatorView />
    }
  ]
  return (
    <div className=''>
      <Tabs tabs={tabs}  contentClassName=''/>
    </div>
  )
}

export default SwitchTabs
