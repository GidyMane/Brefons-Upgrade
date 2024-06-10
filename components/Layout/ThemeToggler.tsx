"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/shadcn/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/shadcn/ui/dropdown-menu"

export function ModeToggle() {
    const { setTheme, theme } = useTheme()


    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size="icon" className="rounded-full outline-none h-10">
                    <Sun className="w-7 h-7 text-yellow-500 dark:hidden" />
                    {/* <Moon className="w-7 h-7 text-gray-400 dark:text-white dark:flex hidden" /> */}
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="rounded-md p-2 bg-white z-50">
                <DropdownMenuItem onClick={() => setTheme("light")} className="my-2 cursor-pointer dark:text-black">
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")} className="my-2 cursor-pointer dark:text-black">
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")} className="my-2 cursor-pointer dark:text-black">
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
