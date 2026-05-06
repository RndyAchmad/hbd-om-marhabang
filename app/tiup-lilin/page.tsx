"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";

export default function CandlePage() {
    const [isBlown, setIsBlown] = useState(false);
    const router = useRouter();

    const handleBlow = () => {
        if (isBlown) return; // Mencegah klik ganda

        setIsBlown(true);

        // Efek konfeti
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#9333ea', '#c084fc', '#ffffff']
        });

        // Pindah ke halaman ucapan setelah 2.5 detik
        setTimeout(() => router.push("/ucapan"), 2500);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black">
            {/* Teks Instruksi */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl font-serif italic text-purple-400 mb-2">Make a Wish, Pa...</h2>
                <p className="text-zinc-500 text-sm tracking-widest uppercase">Klik apinya untuk meniup lilin</p>
            </motion.div>

            {/* Area Lilin */}
            <div className="relative cursor-pointer group" onClick={handleBlow}>
                {/* Batang Lilin */}
                <div className="w-10 h-32 bg-gradient-to-b from-purple-600 to-purple-900 rounded-t-lg shadow-[0_0_20px_rgba(147,51,234,0.3)]" />

                {/* Api Lilin (Hanya muncul jika belum ditiup) */}
                {!isBlown && (
                    <motion.div
                        initial={{ scale: 1 }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.8, 1, 0.8]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 0.6
                        }}
                        className="absolute -top-12 left-1/2 -translate-x-1/2 w-8 h-12 bg-yellow-400 rounded-full blur-sm shadow-[0_0_40px_#facc15]"
                    />
                )}

                {/* Efek Cahaya Tambahan saat Api Masih Ada */}
                {!isBlown && (
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-16 h-16 bg-yellow-500/20 rounded-full blur-xl animate-pulse" />
                )}
            </div>

            {/* Pesan setelah ditiup */}
            {isBlown && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-12 text-purple-300 font-serif italic text-xl"
                >
                    Aamiin... ✨
                </motion.p>
            )}
        </div>
    );
}