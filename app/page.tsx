"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useMusic } from "@/components/ClientWrapper"; // Sesuaikan path jika perlu
import { ChevronRight } from "lucide-react";

export default function StartPage() {
  const router = useRouter();
  const { playMusic } = useMusic();

  const handleStart = () => {
    playMusic();
    router.push("/game");
  };

  // Edit bagian return di StartPage
  return (
    <div className="min-h-screen flex items-center justify-center bg-black overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="z-10 text-center px-6"
      >
        <motion.div
          initial={{ letterSpacing: "0.2em", opacity: 0 }}
          animate={{ letterSpacing: "0.6em", opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-gold text-[10px] md:text-xs font-black uppercase mb-6"
        >
          Strictly Confidential • 2026
        </motion.div>

        <h1 className="text-6xl md:text-9xl font-serif italic mb-8 leading-tight">
          Untuk Papa <br />
          <span className="text-purple-500 drop-shadow-2xl">Tercinta</span>
        </h1>

        <p className="text-zinc-400 max-w-sm mx-auto mb-12 font-light tracking-wide leading-relaxed border-l border-zinc-800 pl-6 text-left italic">
          "Dibalik seragam yang gagah, ada hati paling hangat yang selalu menjaga kami."
        </p>

        <button
          onClick={handleStart}
          className="group relative px-10 py-4 bg-transparent border border-zinc-700 hover:border-purple-500 transition-all duration-500 rounded-full"
        >
          <span className="relative z-10 flex items-center gap-4 text-zinc-400 group-hover:text-white font-bold tracking-[0.3em] text-xs">
            BUKA PESAN <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
        </button>
      </motion.div>
    </div>
  );
}