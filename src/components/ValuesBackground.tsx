import { motion } from 'framer-motion';

export const ValuesBackground = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none select-none z-0">
            {/* Medium Blue Gradient Background Base */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a8a] via-[#1e40af] to-[#2563eb]" />

            {/* Circular Ripples / Waves */}
            <svg
                className="absolute w-full h-full opacity-40"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Concentric Circles expanding */}
                {[...Array(5)].map((_, i) => (
                    <motion.circle
                        key={i}
                        cx="50"
                        cy="100" // Center at bottom
                        r={20 + i * 15}
                        fill="none"
                        stroke="#3B82F6" // Blue 500
                        strokeWidth="0.2"
                        initial={{ scale: 1, opacity: 0.1 }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.3, 0.1],
                            strokeWidth: [0.2, 0.5, 0.2]
                        }}
                        transition={{
                            duration: 8 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 1
                        }}
                    />
                ))}

                {/* Floating Circular Blobs */}
                {[...Array(3)].map((_, i) => (
                    <motion.circle
                        key={`blob-${i}`}
                        cx={30 + i * 20}
                        cy={40 + i * 10}
                        r={10 + i * 5}
                        fill="#1D4ED8" // Blue 700
                        fillOpacity="0.1"
                        filter="url(#blur)"
                        animate={{
                            y: [0, -10, 0],
                            x: [0, 5, 0],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{
                            duration: 10 + i * 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}

                <defs>
                    <filter id="blur">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
                    </filter>
                </defs>
            </svg>

            {/* Ambient Glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-blue-900/10 mix-blend-overlay" />
        </div>
    );
};
