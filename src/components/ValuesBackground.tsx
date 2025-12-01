import { motion } from 'framer-motion';

export const ValuesBackground = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none select-none z-0">
            {/* Gradient Background Base */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />

            {/* Animated Waves */}
            <svg
                className="absolute w-full h-full"
                preserveAspectRatio="none"
                viewBox="0 0 1440 320"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Multiple wave layers */}
                {[...Array(4)].map((_, i) => (
                    <motion.path
                        key={i}
                        // Wave path that stretches across
                        d="M0,160 C320,300 420,0 740,160 C1060,320 1120,0 1440,160 V320 H0 Z"
                        fill="#5B4DFF" // Primary color
                        fillOpacity={0.05 + i * 0.03} // Subtle opacity
                        initial={{ y: 0, x: 0 }}
                        animate={{
                            y: [0, -20, 0],
                            x: [0, -10, 0],
                            scaleY: [1, 1.05, 1],
                        }}
                        transition={{
                            duration: 15 + i * 5, // Slower animation (15s+)
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 2
                        }}
                        style={{
                            transformOrigin: "bottom",
                        }}
                    />
                ))}
            </svg>

            {/* Floating Blobs for extra calmness - Blue tones */}
            <motion.div
                className="absolute top-0 left-0 w-full h-full opacity-30"
            >
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#5B4DFF] rounded-full blur-[100px]"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 25, // Very slow
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-400 rounded-full blur-[120px]"
                    animate={{
                        x: [0, -50, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.1, 1],
                        opacity: [0.1, 0.15, 0.1],
                    }}
                    transition={{
                        duration: 30, // Very slow
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 5,
                    }}
                />
            </motion.div>
        </div>
    );
};
