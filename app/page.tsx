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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-black">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center space-y-12"
      >
        <div className="space-y-4">
          <motion.p
            initial={{ letterSpacing: "0.1em", opacity: 0 }}
            animate={{ letterSpacing: "0.5em", opacity: 1 }}
            className="text-purple-500 text-xs uppercase font-black"
          >
            Top Secret Report
          </motion.p>
          <h1 className="text-5xl md:text-8xl font-serif italic glow py-2">Untuk Papa Tercinta</h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="space-y-8"
        >
          <p className="text-zinc-500 max-w-xs mx-auto italic border-l-2 border-purple-500/30 pl-4">
            "Dibalik seragam yang gagah, ada hati paling hangat yang selalu menjaga."
          </p>

          <button
            onClick={handleStart}
            className="group relative px-12 py-4 overflow-hidden rounded-full border border-purple-500 text-purple-400 font-bold tracking-[0.2em] transition-all"
          >
            <span className="relative z-10 flex items-center gap-2">
              BUKA PESAN <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <style jsx>{`.group:hover span { color: white; }`}</style>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}