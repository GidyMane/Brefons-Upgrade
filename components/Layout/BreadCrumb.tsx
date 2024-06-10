"use client"
import { usePathname } from 'next/navigation'

import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/shadcn/ui/breadcrumb"


const BreadCrumb = () => {
    const pathname = usePathname().split("/")


    return (
        <Breadcrumb>
            <BreadcrumbList>
                {pathname.map((path: string, index: number) => (
                    <React.Fragment key={index}>
                        {path === "brefons.console" ?  (
                            <>
                                <BreadcrumbItem key={path}>
                                    <BreadcrumbLink href={"/brefons.console"} className='text-gray-600 capitalize p-4'>{path}</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className='dark:text-gray-900' />
                            </>
                        ):(
                            <>
                                <BreadcrumbItem key={path}>
                                    <BreadcrumbLink href={path} className='text-gray-600 capitalize p-4'>{path}</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className='dark:text-gray-900' />
                            </>
                        )}
                    </React.Fragment>

                ))}

            </BreadcrumbList>
        </Breadcrumb>

    )
}

export default BreadCrumb