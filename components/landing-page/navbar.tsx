"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface NavbarProps {
    children?: React.ReactNode;
}

export const Navbar = ({ children }: NavbarProps) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Services", href: "#services" },
        { name: "Our Promise", href: "#promise" },
        { name: "Team Members", href: "#team" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled ? "bg-slate-950/90 backdrop-blur-md border-slate-800 py-2" : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div
                    className="w-[200px] h-[60px] flex items-center cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    {children}
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-200 hover:text-orange-500 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a href="tel:+16203630432">
                        <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                            <Phone className="mr-2 h-4 w-4" />
                            (620) 363-0432
                        </Button>
                    </a>
                </nav>

                {/* Mobile Nav */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden text-white">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-slate-950 border-slate-800 text-white">
                        <div className="flex flex-col gap-6 mt-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium hover:text-orange-500 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button className="w-full bg-orange-600 hover:bg-orange-700">
                                Call Now
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
};
