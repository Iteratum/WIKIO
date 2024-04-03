import { useState } from "react";

export default function NavigationRoute() {
    const [menu, setMenu] = useState(true)

    function MenuToggle() {
        setMenu(!menu)
    }

    return (
        <div className="z-30 min-w-full fixed backdrop-blur-md">
            <nav className="border-b-2 border-slate-700">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <a href="/" className="rounded-md px-3 py-2 text-xl text-black font-bold">WIKIO</a>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href="/" className="hover:text-yellow-300 rounded-md px-3 py-2 text-xl font-bold">Home</a>
                                <a href="/Indexes" className="hover:text-yellow-300 rounded-md px-3 py-2 text-xl font-bold">Indexes</a>
                                <a href="/RandomContent" className="hover:text-yellow-300 rounded-md px-3 py-2 text-xl font-bold">Random</a>
                                <a href="/NewPage" className="hover:text-yellow-300 rounded-md px-3 py-2 text-xl font-bold">Create +</a>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button type="button" onClick={MenuToggle} className="relative inline-flex items-center justify-center rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                {menu ? <OpenMenu /> : <CloseMenu />}
                            </button>
                        </div>
                    </div>
                </div>
                {menu ? null : <MobileMenu />}
            </nav>
        </div>
    )
}

function MobileMenu() {
    return (
        <div className="block z-50 text-center" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 text-lg font-semibold">
              <a href="/" className="hover:bg-gray-700 hover:text-amber-500 block rounded-md px-3 py-2">Home</a>
              <a href="/Indexes" className="hover:bg-gray-700 hover:text-amber-500 block rounded-md px-3 py-2">Indexes</a>
              <a href="/RandomContent" className="hover:bg-gray-700 hover:text-amber-500 block rounded-md px-3 py-2">Random</a>
              <a href="/NewPage" className="hover:bg-gray-700 hover:text-amber-500 block rounded-md px-3 py-2">Create +</a>
            </div>
        </div>
    )
}

function CloseMenu() {
    return (
        <svg className="block h-6 w-6" fill="black" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    )
}

function OpenMenu() {
    return (
        <svg className="block h-6 w-6" fill="black" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
    )
}