"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { MessageSquareQuote, Send, User } from "lucide-react";

const MESSAGES = [
    {
        from: "Icaa Cantikkk",
        role: "Anak Pertama",
        text: "Selamat ulang tahun, Pa. Semoga setiap langkahmu selalu dalam lindungan Tuhan, diberikan kesehatan yang baik, rezeki yang lancar, karier yang semakin sukses, dan segala urusan dimudahkan. Semoga selalu diberi kebahagiaan dan umur yang penuh berkah.",
        color: "border-blue-500/50",
    },
    {
        from: "Mr. R",
        role: "Sosok Belakang Rumah",
        text: "Selamat ulang tahun Om Marhabang. Semoga Om selalu diberikan kesehatan, rezeki yang lancar, dan segala urusan dimudahkan.",
        color: "border-green-500/50",
    }
];

export default function UcapanPage() {
    const router = useRouter();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <div className="min-h-screen bg-black py-20 px-6">
            <div className="max-w-2xl mx-auto space-y-12">

                {/* Header */}
                <div className="text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-center"
                    >
                        <MessageSquareQuote className="text-purple-500 w-12 h-12" />
                    </motion.div>
                    <h2 className="text-3xl font-serif italic text-white">Incoming Messages...</h2>
                    <p className="text-zinc-500 text-sm tracking-widest uppercase">Pesan Untuk Papa</p>
                </div>

                {/* Messages List */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-6"
                >
                    {MESSAGES.map((msg, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`bg-zinc-900/50 border-l-4 ${msg.color} p-6 rounded-r-2xl backdrop-blur-sm shadow-xl`}
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-zinc-800 rounded-full">
                                    <User size={16} className="text-purple-400" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm">{msg.from}</h4>
                                    <p className="text-purple-400 text-[10px] uppercase tracking-tighter">{msg.role}</p>
                                </div>
                            </div>
                            <p className="text-zinc-300 italic leading-relaxed text-sm">
                                "{msg.text}"
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Next Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="flex justify-center pt-8"
                >
                    <button
                        onClick={() => router.push("/hallo-papa")}
                        className="group flex items-center gap-3 bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-purple-500 hover:text-white transition-all active:scale-95"
                    >
                        LIHAT LAPORAN AKHIR <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>

            </div>
        </div>
    );
}