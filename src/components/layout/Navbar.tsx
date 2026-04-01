"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

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
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-md bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow">
                        <span className="text-white font-bold text-lg leading-none">A</span>
                    </div>
                    <span className="font-display font-bold text-xl text-slate-900 tracking-tight">AuFill</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">How it works</Link>
                    <Link href="#features" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Features</Link>
                    <Link href="#problem" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Use Cases</Link>
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Button className="rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-md shadow-slate-900/10">
                        Get early access
                    </Button>
                </div>

                <button className="md:hidden text-slate-900">
                    <Menu className="w-6 h-6" />
                </button>
            </div>
        </header>
    );
}
