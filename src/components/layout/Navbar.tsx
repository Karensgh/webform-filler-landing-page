"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white/85 backdrop-blur-xl border-b border-slate-200/60 py-3 shadow-sm"
                : "bg-transparent py-5"
                }`}
        >
            <div className="container flex items-center justify-between">
                <Link href="/" className="flex items-center group">
                    <Image
                        src="/logo.svg"
                        alt="Learn & Fill"
                        width={480}
                        height={80}
                        className="h-9 w-auto hover:opacity-90 transition-opacity"
                    />
                </Link>

                <div className="hidden md:flex items-center gap-6">
                    <Link href="#problem" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Use Cases</Link>
                    <Link href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">How it works</Link>
                    <a href="#waitlist">
                        <Button className="rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-md shadow-slate-900/10">
                            Get early access
                        </Button>
                    </a>
                </div>

                <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white border-t border-slate-200/60 px-6 py-4 flex flex-col gap-4">
                    <Link href="#problem" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Use Cases</Link>
                    <Link href="#how-it-works" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">How it works</Link>
                    <a href="#waitlist" onClick={() => setIsOpen(false)}>
                        <Button className="w-full rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-md shadow-slate-900/10">
                            Get early access
                        </Button>
                    </a>
                </div>
            )}
        </header>
    );
}
