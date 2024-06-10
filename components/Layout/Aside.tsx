"use client"
import Link from "next/link"
import {
    Bell,
    CircleUser,
    Home,
    LineChart,
    MapPin,
    Menu,
    Package,
    Package2,
    Search,
    ShoppingCart,
    Users,
} from "lucide-react"

import { Button } from "@/shadcn/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/shadcn/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/shadcn/ui/dropdown-menu"
import { Input } from "@/shadcn/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/shadcn/ui/sheet"
import { Badge } from "@/shadcn/ui/badge"
import { GanttChart, HomeIcon, LogOutIcon, ReceiptText, UserCircleIcon } from 'lucide-react';



import React, { ReactNode } from 'react'
import { usePathname } from "next/navigation"
import Footer from "@/app/footer"
import { signOut, useSession } from "next-auth/react"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Session } from "next-auth"
import UserInfo from "./UserInfo"

type MenuItems = {
    gif: string;
    fallback: string;
    name: string;
    link: string;
}

type Menu = {
    name: string;
    items?: MenuItems[];
    icon?: string;
    link?: string;
}

const menu = [
    {
        name: "home",
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
            {
                gif: "/project.png",
                fallback: "budgets",
                name: "County Targets",
                link: "projectplanning/countytargets"
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
        name: "Logout",
        icon: LogOutIcon,
        link: "/"
    }
];

const AsideBar = ({ children, menudata, session }: { children: ReactNode; menudata: any; session:Session | null }) => {
    // console.log(session?.user)
    // // const menudata =await menus({role:session?.user?.group ?? ""})
    // console.log(menudata, "menus")
    let path = usePathname()
    // console.log(menudata)
    // Create a mapping of icon names to components
    const iconMapping = {
        HomeIcon: <HomeIcon className="h-4 w-4 text-black" />,
        GanttChart: <GanttChart />,
        ReceiptText: <ReceiptText />,
        UserCircleIcon: <UserCircleIcon />
    };
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden rounded-md shadow-lg bg- md:block">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-14  items-center border-b bg-green-500 px-4 lg:h-[60px] lg:px-6">
                        <Link href="/" className="flex items-center gap-2 font-semibold">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span className="font-bold text-xl">Brefons</span>
                        </Link>

                    </div>
                    <div className="flex-1 overflow-y-auto ">
                        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                            {menudata?.map((men: Menu, index: number) => (
                                men?.link ? (
                                    <Link
                                        key={index}
                                        href={`/${men?.link}`}
                                        className={`${path.includes(men.link)} ? "bg-green-500 text-white" : "text-primary"} text-md flex items-center font-bold capitalize gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary hover:bg-muted`}
                                    >
                                        {men.icon && men.icon === "HomeIcon" && <HomeIcon />}
                                        {men.icon && men.icon === "GanttChart" && <GanttChart />}
                                        {men.icon && men.icon === "ReceiptText" && <ReceiptText />}
                                        {men.icon && men.icon === "UserCircleIcon" && <UserCircleIcon />}
                                        {men.name}
                                    </Link>
                                ) : (
                                    <li key={index} className="list-none">
                                        <div className={`flex items-center justify-between rounded-lg px-4 py-2 transition-all ${path.includes(men.name.split(" ").join("").toLowerCase()) ? "bg-green-500 text-white" : "text-primary"} text-md hover:bg-muted hover:text-primary font-bold capitalize`}>
                                            <span className="flex items-center gap-2">
                                                {men.icon && men.icon === "HomeIcon" && <HomeIcon />}
                                                {men.icon && men.icon === "GanttChart" && <GanttChart />}
                                                {men.icon && men.icon === "ReceiptText" && <ReceiptText />}
                                                {men.icon && men.icon === "UserCircleIcon" && <UserCircleIcon />}
                                                {men.name}
                                            </span>
                                        </div>

                                        <ul className="mt-2 space-y-1 px-4 list-none">
                                            <>

                                                {men?.items?.map((item, index) => (
                                                    <Link
                                                        key={index}
                                                        href={item.name == "logout" ? "/api/auth/signout" : `/brefons.console/${item.link}`}
                                                        className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary hover:bg-muted ${path.includes(item.link) ? "text-primary bg-slate-200 tracking-tight leading-tight font-semibold" : "text-black font-normal"}`}
                                                    >
                                                        {/* {path.includes(item.link) && item.name} */}
                                                        {/* {path.includes("${item.link}")} */}
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </>

                                        </ul>
                                    </li>
                                )
                            ))}

                        </nav>
                    </div>
                    <div className="mt-auto p-4">
                        <Card x-chunk="dashboard-02-chunk-0">
                            <CardContent className="p-2 pt-0 md:p-4 md:pt-2  border-gray-100">
                                <a href="#" className="flex items-center gap-2 bg-white  hover:bg-gray-50">
                                    <img
                                        alt=""
                                        src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                        className="size-10 rounded-full object-cover"
                                    />

                                    <div>
                                        <p className="text-xs">
                                            <strong className="block font-medium text-black">{session?.user?.email?.split("@")[0]}</strong>
                                            <span className='text-black'> {session?.user?.email} </span>
                                        </p>
                                    </div>

                                </a>

                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="flex flex-col overflow-y-auto">
                <header className="flex h-14 items-center gap-4 border-b bg-green-500 backdrop-blur-md  px-4 lg:h-[60px] lg:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="shrink-0 md:hidden"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="flex flex-col">
                            <nav className="grid gap-2 text-lg font-medium">
                                <Link href="/" className="flex items-center gap-2 font-semibold">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                                    </svg>
                                    <span className="font-bold text-xl text-white">Brefons</span>
                                </Link>
                                {menudata?.map((men: Menu, index: number) => (
                                    men?.link ? (
                                        <Link
                                            key={index}
                                            href={`/${men?.link}`}
                                            className={`${path.includes(men.link)} ? "bg-green-500 text-white" : "text-primary"} text-md font-bold capitalize flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary hover:bg-muted`}
                                        >
                                            {men.icon && men.icon === "HomeIcon" && <HomeIcon />}
                                            {men.icon && men.icon === "GanttChart" && <GanttChart />}
                                            {men.icon && men.icon === "ReceiptText" && <ReceiptText />}
                                            {men.icon && men.icon === "UserCircleIcon" && <UserCircleIcon />}
                                            {men.name}
                                        </Link>
                                    ) : (
                                        <li key={index} className="list-none">
                                            <div className={`flex font-bold capitalize items-center justify-between rounded-lg px-4 py-2 transition-all ${path.includes(men.name.toLowerCase()) ? "bg-green-500 text-white" : "text-primary"} text-md hover:bg-muted text-primary`}>
                                                <span className="flex items-center gap-2">

                                                    {men.icon && men.icon === "HomeIcon" && <HomeIcon />}
                                                    {men.icon && men.icon === "GanttChart" && <GanttChart />}
                                                    {men.icon && men.icon === "ReceiptText" && <ReceiptText />}
                                                    {men.icon && men.icon === "UserCircleIcon" && <UserCircleIcon />}
                                                    {men.name}
                                                </span>
                                            </div>
                                            <ul className="mt-2 space-y-1 px-4 list-none">
                                                {men?.items?.map((item, index) => (
                                                    <Link
                                                        key={index}
                                                        href={item.name == "logout" ? "/api/auth/signout" : `/brefons.console/${item.link}`}
                                                        className={`${path.includes(item.link.toLowerCase())} ? "text-primary font-semibold" : "text-muted-foreground font-normal"} flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary hover:bg-muted`}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </ul>
                                        </li>
                                    )
                                ))}
                            </nav>
                            <div className="mt-auto">
                                <Card>

                                    <CardContent className="p-2 pt-0 md:p-4 md:pt-2  border-gray-100">
                                        <a href="#" className="flex items-center gap-2 bg-white  hover:bg-gray-50">
                                            <img
                                                alt=""
                                                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                                className="size-10 rounded-full object-cover"
                                            />

                                            <div>
                                                <p className="text-xs">
                                                    <strong className="block font-medium text-black">{session?.user?.email?.split("@")[0]}</strong>
                                                    <span className='text-black'> {session?.user?.email} </span>
                                                </p>
                                            </div>

                                        </a>
                                    </CardContent>
                                </Card>
                            </div>
                        </SheetContent>
                    </Sheet>
                    <div className="w-full flex-1">
                        <div className="ml-3 lg:text-2xl md:text-xl text-md text-white tracking-tight leading-tight"> Build Resilience for Food and Nutrition Security</div>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <div className="bg-gray-100 cursor-pointer rounded-full p-2">
                            <MapPin className="" />
                        </div>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="secondary" size="icon" className="rounded-full">
                                    <CircleUser className="h-5 w-5" />
                                    <span className="sr-only">Toggle user menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuItem>Support</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={async () => {
                                    await signOut()
                                }}>Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 overflow-y-scroll">
                    <div className="flex items-end justify-end">
                        <MaxWidthWrapper>
                            <UserInfo />
                        </MaxWidthWrapper>
                    </div>

                    {children}
                    <Footer />
                </main>
            </div>
        </div>
    )
}

export default AsideBar