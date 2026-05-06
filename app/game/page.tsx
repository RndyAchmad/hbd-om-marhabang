"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const CARDS = ["🎖️", "🏠", "❤️", "👨‍👩‍👧‍👦", "🎖️", "🏠", "❤️", "👨‍👩‍👧‍👦"].sort(() => Math.random() - 0.5);

export default function GamePage() {
    const [flipped, setFlipped] = useState<number[]>([]);
    const [solved, setSolved] = useState<number[]>([]);
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Tampilkan modal 500ms setelah semua kartu terbuka
        if (solved.length === CARDS.length && CARDS.length > 0) {
            setTimeout(() => setShowModal(true), 500);
        }
    }, [solved]);

    const handleFlip = (i: number) => {
        if (flipped.length === 2 || flipped.includes(i) || solved.includes(i)) return;
        const newFlipped = [...flipped, i];
        setFlipped(newFlipped);
        if (newFlipped.length === 2) {
            if (CARDS[newFlipped[0]] === CARDS[newFlipped[1]]) {
                setSolved([...solved, ...newFlipped]);
                setFlipped([]);
            } else {
                setTimeout(() => setFlipped([]), 800);
            }
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-black relative">
            <h2 className="text-xl font-serif text-purple-400 mb-8">Selesaikan misi ini, Komandan!</h2>
            <div className="grid grid-cols-4 gap-3 z-10">
                {CARDS.map((emoji, i) => (
                    <div key={i} onClick={() => handleFlip(i)} className={`w-16 h-24 md:w-24 md:h-32 flex items-center justify-center text-3xl rounded-xl cursor-pointer transition-all duration-500 ${flipped.includes(i) || solved.includes(i) ? "bg-purple-600 rotate-y-180 shadow-[0_0_15px_rgba(147,51,234,0.5)]" : "bg-zinc-900 border border-white/10 hover:border-purple-500/50"}`}>
                        {flipped.includes(i) || solved.includes(i) ? emoji : "?"}
                    </div>
                ))}
            </div>

            {/* Modal Selamat */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="bg-zinc-900 border border-purple-500/50 p-8 rounded-3xl max-w-sm w-full text-center space-y-6 shadow-[0_0_30px_rgba(147,51,234,0.2)]"
                        >
                            <h3 className="text-3xl font-serif text-purple-400">Misi Selesai!</h3>
                            <p className="text-zinc-400">Luar biasa Pa! Siap untuk kejutan selanjutnya?</p>
                            <button
                                onClick={() => router.push("/tiup-lilin")}
                                className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold tracking-widest rounded-full transition-colors"
                            >
                                LANJUTKAN
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}