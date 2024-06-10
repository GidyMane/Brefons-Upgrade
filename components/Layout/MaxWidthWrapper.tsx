import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

const MaxWidthWrapper = ({children, className}:{children:ReactNode; className?:string;}) => {
  return (
    <div className={cn('relative px-4 sm:px-2 lg:px-30', className)}>
        {children}
    </div>
  )
}

export default MaxWidthWrapper
