import { motion } from 'framer-motion';

export const AnimatedHeroIllustration = () => {
    return (
        <div className="relative w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden">
            {/* Background Elements */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <svg
                viewBox="0 0 500 500"
                className="w-full h-full max-w-[600px] relative z-10"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Central Shield Metaphor - Background Layer */}
                <motion.path
                    d="M250 50 L400 120 V250 C400 350 340 420 250 450 C160 420 100 350 100 250 V120 L250 50 Z"
                    fill="none"
                    stroke="#5B4DFF"
                    strokeWidth="2"
                    strokeOpacity="0.2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Floating Tech Elements */}
                {[...Array(5)].map((_, i) => (
                    <motion.circle
                        key={i}
                        cx={250}
                        cy={250}
                        r={60 + i * 30}
                        stroke="#5B4DFF"
                        strokeWidth="1"
                        strokeOpacity="0.1"
                        fill="none"
                        animate={{
                            rotate: i % 2 === 0 ? 360 : -360,
                            scale: [1, 1.05, 1],
                        }}
                        transition={{
                            rotate: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" },
                            scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 },
                        }}
                    />
                ))}

                {/* Central Core - Security Symbol */}
                <motion.g
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5, type: "spring" }}
                >
                    <circle cx="250" cy="250" r="40" fill="#5B4DFF" fillOpacity="0.1" />
                    <motion.path
                        d="M250 220 L270 240 L250 280 L230 240 Z"
                        fill="#5B4DFF"
                        animate={{
                            y: [-5, 5, -5],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </motion.g>

                {/* Scanning Line */}
                <motion.line
                    x1="100"
                    y1="120"
                    x2="400"
                    y2="120"
                    stroke="#5B4DFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    animate={{
                        y1: [120, 400, 120],
                        y2: [120, 400, 120],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                {/* Floating Particles */}
                {[...Array(8)].map((_, i) => (
                    <motion.circle
                        key={`p-${i}`}
                        r="4"
                        fill="#5B4DFF"
                        initial={{
                            x: 250 + (Math.random() - 0.5) * 200,
                            y: 250 + (Math.random() - 0.5) * 200,
                            opacity: 0,
                        }}
                        animate={{
                            y: [null, Math.random() * -50],
                            opacity: [0, 0.8, 0],
                        }}
                        transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </svg>

            {/* Floating Badge Integration */}
            <motion.div
                className="absolute bottom-10 right-10 bg-white p-4 rounded-xl shadow-xl border border-gray-100"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
            >
                <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </motion.div>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 font-medium">Estado del sistema</p>
                        <p className="text-sm font-bold text-gray-900">100% Seguro</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
