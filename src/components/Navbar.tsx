"use client";

import {useEffect, useState} from "react";
import Link from "next/link";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const handleScroll = () => {
            const offset = window.scrollY
            setScrolled(offset > 1000);
        };

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return <div 
                id="navbar" 
                className={`w-full fixed top-0 left-0 z-10 duration-300 ${scrolled ? "bg-black bg-opacity-80 backdrop-blur" : "bg-transparent"}`}>
            <nav className="flex justify-between items-center px-16 py-8 text-[#FBFBFB]">
                <div className="text-3xl font-bold">ka • je</div>
                <div className="space-x-6 text-sm">
                    <Link href="/" className="text-lg hover:underline">Home</Link>
                    <Link href="/" className="text-lg hover:underline">Works</Link>
                    <Link href="/about" className="text-lg hover:underline">About Me</Link>
                </div>
            </nav>
      </div>
};

export default Navbar;