"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Droplets, ClipboardCheck, Battery, Car, Disc, Wrench, CircleDot } from "lucide-react";

import { cn } from "@/lib/utils";

const services = [
    {
        title: "Oil Change",
        description: "Fast, professional oil change with premium oil included.",
        icon: Droplets,
    },
    {
        title: "Multi-Point Inspections",
        description: "Comprehensive inspections to ensure vehicle safety.",
        icon: ClipboardCheck,
    },
    {
        title: "Batteries",
        description: "Battery testing and replacement to keep you powered.",
        icon: Battery,
    },
    {
        title: "Side By Sides (UTVs)",
        description: "Side by Side vehicle maintenance and repairs for off-road fun.",
        icon: Car, // Placeholder for UTV
    },
    {
        title: "Tires",
        description: "Tire inspection, rotation, and replacement for safe driving.",
        icon: CircleDot,
    },
    {
        title: "Braking System",
        description: "Brake inspection and service for reliable stopping power.",
        icon: Disc,
    },
    {
        title: "Light Mechanics",
        description: "Minor mechanical repairs to maintain vehicle performance.",
        icon: Wrench,
    },
];

export const Services = () => {
    return (
        <section id="services" className="py-20 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-sm font-bold tracking-wide text-orange-600 uppercase">Our Services</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">What We Do Best</h3>
                    <div className="h-1 w-20 bg-orange-500 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 justify-center">
                    {services.map((service, index) => (
                        <Card key={index} className={cn(
                            "group hover:shadow-lg transition-all duration-300 border-slate-200 dark:border-slate-800 hover:-translate-y-1",
                            index < 4 ? "lg:col-span-3" : "lg:col-span-4"
                        )}>
                            <CardHeader className="flex flex-col items-center text-center pt-8">
                                <div className="h-16 w-16 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                                    <service.icon className="h-8 w-8 text-orange-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center text-slate-600 dark:text-slate-400 pb-8">
                                <CardDescription className="text-base">
                                    {service.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
