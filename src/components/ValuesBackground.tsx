import { motion } from 'framer-motion';

export const ValuesBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
            {/* Gradient Background Base */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white/50" />

            {/* Animated Waves */}
            <svg
                className="absolute w-full h-full opacity-30"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <filter id="blur-filter" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
                    </filter>
                </defs>

                {/* Multiple wave layers */}
                {[...Array(3)].map((_, i) => (
                    <motion.path
                        key={i}
                        d="M0,50 C150,100 350,0 500,50 C650,100 850,0 1000,50 V100 H0 V50 Z"
                        fill={`rgba(var(--color-primary-rgb), ${0.03 + i * 0.02})`} // Assuming CSS variable or fallback
                        className="text-primary"
                        fillOpacity={0.05 + i * 0.05}
                        initial={{ y: 0, scaleY: 1 }}
                        animate={{
                            y: [0, -20, 0],
                            scaleY: [1, 1.1, 1],
                            x: [0, -50, 0]
                        }}
                        transition={{
                            duration: 10 + i * 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 2
                        }}
                        style={{
                            transformOrigin: "bottom",
                            scale: 1 + i * 0.2,
                        }}
                    />
                ))}

                {/* Concentric Ripples (Water Drops effect) */}
                {[...Array(4)].map((_, i) => (
                    <motion.circle
                        key={`ripple-${i}`}
                        cx="50%"
                        cy="50%"
                        r="100"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-primary/10"
                        fill="none"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{
                            scale: [0.5, 2.5],
                            opacity: [0.4, 0],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            delay: i * 2,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>

            {/* Floating Blobs for extra calmness */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
                animate={{
                    x: [0, 50, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-200/10 rounded-full blur-3xl"
                animate={{
                    x: [0, -30, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
            />
        </div>
    );
};
