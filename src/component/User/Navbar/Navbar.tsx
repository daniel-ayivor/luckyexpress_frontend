import { useState } from "react"
import { Link } from "react-router-dom"
import MobileNav from "./MobileNav"

import { Home, Info, Briefcase, MapPin, Phone } from 'lucide-react'

export const NavbarTypes = [
    { id: 1, title: "Home", link: "/", icon: <Home className="h-6 w-6" /> },
    { id: 2, title: "About Us", link: "/about", icon: <Info className="h-6 w-6" /> },
    { id: 3, title: "Services", link: "/service", icon: <Briefcase className="h-6 w-6" /> },
    { id: 4, title: "Track", link: "/track", icon: <MapPin className="h-6 w-6" /> },
    { id: 5, title: "Contact", link: "/contact", icon: <Phone className="h-6 w-6" /> }
]


const Navbar = () => {
    const [openNav, setOpenNav] = useState(false)

    const handleOpenNav = () => {
        setOpenNav(!openNav)
    }

    return (
        <>

            <div>
                {/* Navbar at the top */}
                <nav className="bg-gray-800 fixed top-0 w-full z-50">
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                                <button
                                    onClick={handleOpenNav}
                                    type="button"
                                    className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 "
                                    aria-controls="mobile-menu"
                                    aria-expanded={openNav ? "true" : "false"}
                                >
                                    <span className="absolute -inset-0.5"></span>
                                    <span className="sr-only">Open main menu</span>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-align-left"><path d="M15 12H3"/><path d="M17 18H3"/><path d="M21 6H3"/></svg>
                                </button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex shrink-0 items-center">
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                                        alt="Your Company"
                                    />
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {NavbarTypes.map((navList) => {
                                            return (
                                                <Link key={navList.id} to={navList.link}>
                                                    <span className="rounded-md bg-transparent hover:bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">
                                                        {navList.title}
                                                    </span>
                                                </Link>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

            </div>
            {/* Mobile Navigation (side menu) */}
            {openNav && <MobileNav />}
        </>
    )
}

export default Navbar
