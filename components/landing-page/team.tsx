"use client";

import Image from "next/image";

const team = [
    {
        name: "Chris Titman",
        role: "Owner",
        image: "/employees/chris.jpeg",
    },
    {
        name: "Tommy Harris",
        role: "Senior Technician",
        image: "/employees/tommy.jpg",
    },
];

export const Team = () => {
    return (
        <section id="team" className="py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-slate-900 blur-3xl" />
                <div className="absolute top-[40%] right-[0%] w-[40%] h-[40%] rounded-full bg-orange-500 blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-sm font-bold tracking-wide text-slate-500 uppercase">Meet Our Team</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
                        Our Hands Built This. <br />
                        <span className="text-blue-900 dark:text-blue-400">Our Hearts Keep It Running.</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {team.map((member, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-2xl shadow-2xl aspect-4/3">
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-0 left-0 p-8 text-white">
                                <h4 className="text-2xl font-bold mb-1">{member.name}</h4>
                                <p className="text-orange-400 font-medium">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
