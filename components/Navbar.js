import { useEffect } from "react";
import Link from "next/link";
export default function Navbar() {
    useEffect(() => {
        const burger = document.getElementById('burger');
        const secondBurger = document.getElementById('burger2')
        const menu = document.getElementById('menu')
        burger.addEventListener('click', () => {
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden')
            } else {
                menu.classList.add('hidden')
            }
            secondBurger.classList.remove('hidden');
            burger.classList.add('hidden')
        })
        secondBurger.addEventListener('click', () => {
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden')
            } else {
                menu.classList.add('hidden')
            }
            burger.classList.remove('hidden');
            secondBurger.classList.add('hidden')
        })

    }, [])



    return (
        <nav className="font-body mr-4 md:mx-48 text-right">
            <div className="flex justify-end items-center p-4 md:hidden">
                <div id="burger">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </div>
                <div className="hidden" id="burger2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </div>
            </div>
            <ul className="hidden md:block" id="menu">
             
                <div className="flex flex-col items-center uppercase text-purple-800 md:flex-row md:justify-between md:items-center md:p-2">
                    <li className="hover:text-white hover:bg-purple-800 p-2 mb-2 md:mb-0 text-lg">
                        <Link href="/">Home</Link>
                    </li>
                    <li className=" hover:text-white hover:bg-purple-800 p-2 mb-2 md:mb-0 text-lg">
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li className="hover:text-white hover:bg-purple-800 p-2 mb-2 md:mb-0 text-lg">
                        <Link href="/skills">Skills</Link>
                    </li>
                    <li className="hover:text-white hover:bg-purple-800 p-2 mb-2 md:mb-0 text-lg">
                        <Link href="/contact">Contact</Link>
                    </li>
                </div>

            </ul>
            <div className=" border-solid border-2 border-purple-700 md:hidden"></div>
        </nav>
    );
}
