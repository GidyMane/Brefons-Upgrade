import React from 'react'
import { HamBurgerButton } from './HandleNavBarActions'

const Nav = () => {

    return (
        <header className="bg-green-500 fixed z-40 inset-x-0 backdrop-blur-lg">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <a className="block text-white" href="#">
                            <span className="sr-only">Build Resilience for Food and Nutrition Security</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span className="ml-2 text-white font-bold">Build Resilience for Food and Nutrition Security</span>
                        </a>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        <nav aria-label="Global" className="hidden lg:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <a className="text-white transition hover:text-white/75" href="#"> About </a>
                                </li>

                                <li>
                                    <a className="text-white transition hover:text-white/75" href="#"> Careers </a>
                                </li>

                                <li>
                                    <a className="text-white transition hover:text-white/75" href="#"> History </a>
                                </li>

                                <li>
                                    <a className="text-white transition hover:text-white/75" href="#"> Services </a>
                                </li>

                                <li>
                                    <a className="text-white transition hover:text-white/75" href="#"> Projects </a>
                                </li>

                                <li>
                                    <a className="text-white transition hover:text-white/75" href="#"> Blog </a>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <a
                                    className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                                    href="#"
                                >
                                    Login
                                </a>

                                <div className="hidden sm:flex">
                                    <a
                                        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                                        href="#"
                                    >
                                        Register
                                    </a>
                                </div>
                            </div>

                            <div className="block md:hidden">
                                <HamBurgerButton/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Nav
