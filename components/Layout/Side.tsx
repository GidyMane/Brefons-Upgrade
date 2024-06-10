"use client"
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { GanttChart, HomeIcon, LogOutIcon, ReceiptText, UserCircleIcon } from 'lucide-react';

type MenuItems = {
    gif: string;
    fallback: string;
    name: string;
    link: string;
}

type Menu = {
    name: string;
    menuItems?: MenuItems[];
    icon?: React.ComponentType;
    link?: string;
}

const menu = [
    {
        name: "Home",
        menuItems: [
            {
                gif: "/dashboard.gif",
                fallback: "dashboard",
                name: "Components",
                link: "home/component"
            },
            {
                gif: "/technical.gif",
                fallback: "Logframes",
                name: "Project LogFrame",
                link: "home/logframe"
            },
            {
                gif: "/activity.gif",
                fallback: "ProjectBaseline",
                name: "Project Baseline",
                link: "home/baseline"
            },
            {
                gif: "/reports.gif",
                fallback: "reports",
                name: "Reports",
                link: "home/reports"
            },
            {
                gif: "/technical.gif",
                fallback: "technical",
                name: "Technical Parameters",
                link: "home/technical"
            },
            {
                gif: "/activity.gif",
                fallback: "activity",
                name: "Activities",
                link: "/home/activities"
            },
            {
                gif: "/parameters.gif",
                fallback: "operational",
                name: "Operational Parameters",
                link: "home/operationalparameters"
            },
        ],
        icon: HomeIcon
    },
    {
        name: "Project Planning",
        menuItems: [
            {
                gif: "/project.png",
                fallback: "budgets",
                name: "Annual Budget",
                link: "projectplanning/annualbudget"
            },
            {
                gif: "/target.gif",
                fallback: "targets",
                name: "Annual Targets",
                link: "projectplanning/targets"
            },
        ],
        icon: GanttChart

    },
    {
        name: "Progress Reporting",
        menuItems: [
            {
                gif: "/parameters.gif",
                fallback: "contracts",
                name: "Achievements Progress Reporting",
                link: "projectreporting/achievements"
            },
            {
                gif: "/parameters.gif",
                fallback: "contracts",
                name: "County Achievements Update",
                link: "projectreporting/countyAchievements"
            },
            {
                gif: "/parameters.gif",
                fallback: "contracts",
                name: "Activity Expenditure Reporting",
                link: "projectreporting/activityexpenditure"
            },
            // {
            //     gif: "/parameters.gif",
            //     fallback: "contracts",
            //     name: "Quartley Report Narrative",
            //     link: "projectreporting/reportnarrative"
            // },
            {
                gif: "/parameters.gif",
                fallback: "contracts",
                name: "Contracts",
                link: "projectreporting/subprojects"
            },
        ],
        icon: ReceiptText

    },
    {
        name: "User Management",
        menuItems: [
            {
                gif: "/settings.gif",
                fallback: "settings",
                name: "Settings",
                link: "projectreporting/settings"
            },
        ],
        icon: UserCircleIcon
    },
    {
        name:"Logout",
        icon:LogOutIcon,
        link:"/"
    }
];


const Side = () => {

    const path = usePathname()
    return (
        <div className="lg:flex hidden h-screen w-[300px] flex-col z-50 md:fixed  overflow-y-scroll justify-between border-e bg-white">
            <div className="px-4 py-6">
                <span className="grid h-10 w-32 grid-cols-2 place-content-center rounded-lg text-xs text-gray-600">
                   
                    <span className="self-center text-2xl hidden md:flex font-semibold whitespace-nowrap text-gray-900 dark:text-black">Brefons</span>
                </span>

                <ul className='space-y-4 mt-6'>
                    {menu.map((men: Menu, index: number) => (
                        <li key={index}>
                            {men?.link ? (
                                <Link
                                    href={men.link}
                                    className="block rounded-lg px-4 space-x-2 py-2 text-sm font-medium text-green-500 hover:bg-gray-100 hover:text-gray-700"
                                >
                                    {men.icon && <men.icon />}
                                    {men.name}
                                </Link>
                            ) : (
                                <>
                                    <span className={` ${path.includes(men.name) ? "text-lg font-bold text-green-500" : "text-md font-medium"} flex items-center gap-2 justify-start`}>
                                        {men.icon && <men.icon />}
                                        {men.name}
                                    </span>
                                    <ul className="mt-2 space-y-1 px-4">
                                        {men?.menuItems?.map((item, index) => (
                                            <li key={index}>
                                                <Link href={`/brefons.console/${item.link}`} className={`block rounded-lg px-4 py-2   hover:bg-gray-100 hover:text-gray-700 ${path.includes(item.link) ? "text-gray-950 text-lg font-bold" : "text-md font-medium text-gray-500 "}`}>
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
                <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        className="size-10 rounded-full object-cover"
                    />

                    <div>
                        <p className="text-xs">
                            <strong className="block font-medium text-black">Bosco Ndeka</strong>
                            <span className='text-black'> bosco@gmail.com </span>
                        </p>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Side;
