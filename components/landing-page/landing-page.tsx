"use client";

import { useState, useEffect } from "react";
import { Navbar } from "./navbar";
import { Hero } from "./hero";
import { Services } from "./services";
import { PromiseSection } from "./promise";
import { Team } from "./team";
import { Footer } from "./footer";
import { FireLogo } from "./logo-fire";
import { LayoutGroup } from "framer-motion";

export const LandingPage = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 200);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <LayoutGroup>
            <main className="min-h-screen bg-slate-50 dark:bg-black font-sans selection:bg-orange-500 selection:text-white">
                <Navbar>
                    {scrolled && (
                        <FireLogo compact layoutId="fire-logo-main" className="origin-left" />
                    )}
                </Navbar>

                <Hero>
                    {!scrolled && (
                        <FireLogo layoutId="fire-logo-main" />
                    )}
                </Hero>

                <Services />
                <PromiseSection />
                <Team />
                <Footer />
            </main>
        </LayoutGroup>
    );
};
