"use client";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
    SheetClose,
} from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface NavbarProps {
    children?: React.ReactNode;
}

export const Navbar = ({ children }: NavbarProps) => {
    const [scrolled, setScrolled] = useState(false);
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#hero" },
        { name: "Services", href: "#services" },
        { name: "Our Promise", href: "#promise" },
        { name: "Team Members", href: "#team" },
    ];

    const handleLinkClick = () => {
        setIsSheetOpen(false);
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled ? "bg-slate-950/90 backdrop-blur-md border-slate-800 py-2" : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link
                    className="w-[100px] h-[50px] flex items-center cursor-pointer"
                    href="#hero"
                    onClick={isSheetOpen ? handleLinkClick : undefined}
                >
                    {children}
                </Link>

                {/* Desktop Nav */}
                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList>
                        {navLinks.map((link) => (
                            <NavigationMenuItem key={link.name}>
                                <NavigationMenuLink href={link.href} className={cn(
                                    navigationMenuTriggerStyle(),
                                    "bg-transparent text-slate-200 hover:text-orange-500 hover:bg-transparent"
                                )}>
                                    {link.name}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}

                        <NavigationMenuItem>
                            <a href="tel:+16203630432">
                                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                                    <Phone className="mr-2 h-4 w-4" />
                                    +1 (620) 363-0432
                                </Button>
                            </a>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Mobile Nav */}
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden text-white">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-slate-950 border-slate-800 text-white">
                        <SheetHeader>
                            <SheetTitle className="text-xl">Main Navigation</SheetTitle>
                        </SheetHeader>
                        <div className="flex flex-col gap-6 mt-2">
                            {navLinks.map((link) => (
                                <SheetClose asChild key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="ml-6 text-lg font-medium hover:text-orange-500 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </SheetClose>
                            ))}
                            <div className="w-full flex justify-center mt-5">
                                <a href="tel:+16203630432" className="w-50">
                                    <Button className="bg-orange-600 hover:bg-orange-700 w-full">
                                        <Phone className="h-4 w-4" />
                                        Call Now
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
};
