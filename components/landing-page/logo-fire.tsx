"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FireLogo = ({
    className,
    compact = false,
    layoutId = "brand-logo"
}: {
    className?: string;
    compact?: boolean;
    layoutId?: string;
}) => {
    return (
        <motion.div
            layoutId={layoutId}
            className={cn("relative flex items-center justify-center", className)}
        >
            {/* Fire Effect - Simplified for performance but effective */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-orange-500/30 blur-xl"
                        initial={{ scale: 0.8, opacity: 0.5, y: 0 }}
                        animate={{
                            scale: [0.8, 1.2, 0.8],
                            opacity: [0.3, 0.6, 0.3],
                            y: [0, -20, 0],
                            x: [0, (i % 2 === 0 ? 10 : -10), 0]
                        }}
                        transition={{
                            duration: 2 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.2
                        }}
                        style={{
                            width: compact ? "40px" : "120px",
                            height: compact ? "40px" : "120px",
                            background: `radial-gradient(circle, rgba(255,100,0,0.8) 0%, rgba(255,0,0,0) 70%)`
                        }}
                    />
                ))}
                {/* Core hot center */}
                <motion.div
                    className="absolute rounded-full bg-yellow-400/50 blur-lg"
                    animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.6, 0.9, 0.6] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{
                        width: compact ? "20px" : "80px",
                        height: compact ? "20px" : "80px",
                    }}
                />
            </div>

            {/* Logo Text/Icon */}
            {/* Logo Image */}
            <div className={cn("relative z-10", compact ? "w-40 h-12" : "w-64 h-24 md:w-96 md:h-36")}>
                <img
                    src="/images/titman-logo-v2.png"
                    alt="Titman Tire & Lube"
                    className="w-full h-full object-contain"
                />
            </div>
        </motion.div>
    );
};
