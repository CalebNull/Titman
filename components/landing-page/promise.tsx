"use client";

import { ShieldCheck, Award, Users } from "lucide-react";

const promises = [
    {
        title: "Quality Service. Every time.",
        description: "Expert care you can trust to keep your vehicle safe, reliable, and running smoothly for miles to come.",
        icon: ShieldCheck,
    },
    {
        title: "Certified Professional Services",
        description: "Our certified technicians use the latest tools and techniques to deliver reliable, high-quality repairs every time.",
        icon: Award,
    },
    {
        title: "Real People. Honest Work.",
        description: "Friendly, experienced professionals committed to transparent service and quality repairs you can always trust.",
        icon: Users,
    },
];

export const PromiseSection = () => {
    return (
        <section id="promise" className="py-20 bg-slate-950 text-white">
            <div className="container mx-auto px-4">
                <div className="mb-16">
                    <h2 className="text-sm font-bold tracking-wide text-orange-500 uppercase mb-2">Our Promise To You</h2>
                    <h3 className="text-3xl md:text-4xl font-bold">Because Your Safety Is Our Priority</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {promises.map((item, index) => (
                        <div key={index} className="bg-white text-slate-900 p-8 rounded-lg shadow-xl flex flex-col items-start gap-4 hover:transform hover:scale-105 transition-transform duration-300">
                            <div className="p-3 bg-slate-100 rounded-lg">
                                <item.icon className="h-8 w-8 text-blue-900" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-3 text-blue-900">{item.title}</h4>
                                <p className="text-slate-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
