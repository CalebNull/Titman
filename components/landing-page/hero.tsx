"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface HeroProps {
    children?: React.ReactNode; // For the Logo
}

export const Hero = ({ children }: HeroProps) => {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-slate-950 text-white pt-20">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-slate-950/60 to-slate-950 z-10" />
                <Image
                    className="bg-center opacity-40"
                    src="/images/car.jpg"
                    alt="Hero Background"
                    fill
                />
            </div>

            <div className="container relative z-20 flex flex-col items-center text-center gap-8 px-4">
                <div className="min-h-[160px] flex items-center justify-center w-full">
                    {children}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="max-w-3xl space-y-6"
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        Driven by Trust. <br />
                        <span className="text-orange-500">Powered by Precision.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
                        Your local experts for tires, oil changes, and complete vehicle maintenance.
                        We honor our veterans and serve our community with honest work.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                        <a href="tel:+16203630432">
                            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-full group">
                                <Phone className="mr-2 h-5 w-5" />
                                Call Today
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </a>
                        <div className="flex flex-col items-start text-sm text-slate-400 gap-1 bg-slate-900/50 p-4 rounded-xl border border-slate-800 backdrop-blur-sm">
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-orange-500" />
                                <span>
                                    Mon - Fri: 8:00 AM - 5:00 PM
                                    Sat: 8:00 AM - 1:00 PM
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-orange-500" />
                                <span>408 N. Maple, Garnett, KS 66032</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
