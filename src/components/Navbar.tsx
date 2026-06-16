"use client";

import { useState } from "react";

export default function Navbar() {
const [isOpen, setIsOpen] = useState(false);

return (
<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/50 border-b border-zinc-800">
    <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">

    {/* Logo */}
    <h1 className="text-2xl font-black">
        <span className="text-blue-500">Arif</span>.
    </h1>

    {/* Desktop Menu */}
    <ul className="hidden md:flex gap-8 text-sm">
        <li>
        <a href="#home" className="hover:text-blue-500">
            Home
        </a>
        </li>

        <li>
        <a href="#about" className="hover:text-blue-500">
            About
        </a>
        </li>

        <li>
        <a href="#skills" className="hover:text-blue-500">
            Skills
        </a>
        </li>

        <li>
        <a href="#projects" className="hover:text-blue-500">
            Projects
        </a>
        </li>

        <li>
        <a href="#certificates" className="hover:text-blue-500">
            Certificates
        </a>
        </li>

        <li>
        <a href="#contact" className="hover:text-blue-500">
            Contact
        </a>
        </li>
    </ul>

    {/* Hamburger Button */}
    <button
        className="md:hidden text-3xl"
        onClick={() => setIsOpen(!isOpen)}
    >
        ☰
    </button>
    </div>

    {/* Mobile Menu */}
    {isOpen && (
    <div className="md:hidden bg-zinc-900 border-t border-zinc-800">
        <ul className="flex flex-col p-6 gap-4 text-center">
        <li>
            <a href="#home" onClick={() => setIsOpen(false)}>
            Home
            </a>
        </li>

        <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
            About
            </a>
        </li>

        <li>
            <a href="#skills" onClick={() => setIsOpen(false)}>
            Skills
            </a>
        </li>

        <li>
            <a href="#projects" onClick={() => setIsOpen(false)}>
            Projects
            </a>
        </li>

        <li>
            <a href="#certificates" onClick={() => setIsOpen(false)}>
            Certificates
            </a>
        </li>

        <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
            </a>
        </li>
        </ul>
    </div>
    )}
</nav>
);
}