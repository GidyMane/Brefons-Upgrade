"use client"
import { toggleSidebar } from "@/Redux/Slices/MenuSlice"
import { RootState } from "@/Redux/Store"
import { Button } from "@/shadcn/ui/button"
import { useDispatch, useSelector } from "react-redux"

import { Input } from "@/shadcn/ui/input"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"



export const HamBurgerButton = () => {
  // retriev our toggle action
  const dispatch = useDispatch()
  const menuState = useSelector((state: RootState) => state.toggleMenu.isOpen)
  return (
    <>
      

      <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75" onClick={() => {
        dispatch(toggleSidebar())
      }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"

        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </>
  )
}




export function SearchInput() {
  return (
    <motion.div className="hidden md:flex w-full mx-2 max-w-sm rounded-md items-center space-x-2" initial={{ x: 15, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeInOut" }}>
      <Input type="text" placeholder="Search for projects..." className="rounded-md outline-none focus:border-gray-400 dark:text-gray-500" style={{
        borderRadius: "5px",
        borderColor: "gray",
        outline: "none"
      }} />
    </motion.div>
  )
}



