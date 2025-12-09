"use client";

import { Phone, MapPin, Home, Wrench, ShieldCheck, Users, ArrowUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FireLogo } from "./logo-fire";

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-slate-950 text-white pt-20 pb-10">
            <div className="container mx-auto px-4">

                {/* Map and Contact Info */}
                <div className="flex flex-col items-center text-center mb-20 space-y-8">
                    <h3 className="text-2xl font-bold">
                        Call us at <a href="tel:+16203630432" className="text-orange-500 hover:underline">+1 (620) 363-0432</a> or visit us at our shop shown below.
                    </h3>

                    <div className="w-full max-w-4xl h-[400px] rounded-xl overflow-hidden shadow-2xl border border-slate-800 relative bg-slate-900">
                        {/* Placeholder for Map - In a real app, use Google Maps Embed API */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.667266712345!2d-95.2445!3d38.2815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0a3b0b0b0b0b1%3A0x0!2s408%20N%20Maple%20St%2C%20Garnett%2C%20KS%2066032!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            className="grayscale hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 text-center">
                    <div className="flex flex-col items-center text-center space-y-4 cursor-pointer" onClick={scrollToTop}>
                        <FireLogo layoutId="fire-logo-footer" className="w-full flex items-center justify-center p-0" />
                        <p className="text-slate-500 text-sm w-full flex items-center justify-center">
                            Making you a better vehicle.
                        </p>
                    </div>

                    <div className="flex flex-col items-center space-y-4">
                        <h4 className="font-bold text-lg">Navigation</h4>
                        <nav className="flex flex-col space-y-2 text-slate-400">
                            <div className="flex items-center gap-2 hover:text-orange-500 transition-colors cursor-pointer" onClick={scrollToTop}>
                                <Home className="h-4 w-4" /> Home
                            </div>
                            <Link href="#services" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                                <Wrench className="h-4 w-4" /> Services
                            </Link>
                            <Link href="#promise" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                                <ShieldCheck className="h-4 w-4" /> Our Promise
                            </Link>
                            <Link href="#team" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                                <Users className="h-4 w-4" /> Team Members
                            </Link>
                        </nav>
                    </div>

                    <div className="flex flex-col items-center space-y-4">
                        <h4 className="font-bold text-lg">Contact Us</h4>
                        <div className="flex flex-col space-y-4 text-slate-400">
                            <a href="tel:+16203630432" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                                <Phone className="h-4 w-4" /> +1 (620) 363-0432
                            </a>
                            <div className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 mt-1" />
                                <span>
                                    408 N. Maple St,<br />
                                    Garnett Ks 66032
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-600 text-sm">
                        © {new Date().getFullYear()} Titman Tire & Lube. All rights reserved.
                    </p>
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-slate-800 bg-slate-900 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors"
                        onClick={scrollToTop}
                    >
                        <ArrowUp className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </footer>
    );
};
