"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-gray-900">
                    Ritesh Enterprises
                </Link>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <svg
                            className="w-6 h-6 text-gray-800"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    <li>
                        <Link href="#about" className="hover:text-yellow-500">About</Link>
                    </li>
                    <li>
                        <Link href="#services" className="hover:text-yellow-500">Services</Link>
                    </li>
                    <li>
                        <Link href="#projects" className="hover:text-yellow-500">Projects</Link>
                    </li>
                    <li>
                        <Link href="#contact" className="hover:text-yellow-500">Contact</Link>
                    </li>
                </ul>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden bg-white px-4 pb-4 space-y-4 text-gray-700 font-medium">
                    <li>
                        <Link href="#about" onClick={() => setIsOpen(false)}>About</Link>
                    </li>
                    <li>
                        <Link href="#services" onClick={() => setIsOpen(false)}>Services</Link>
                    </li>
                    <li>
                        <Link href="#projects" onClick={() => setIsOpen(false)}>Projects</Link>
                    </li>
                    <li>
                        <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
                    </li>
                </ul>
            )}
        </nav>
    );
}
