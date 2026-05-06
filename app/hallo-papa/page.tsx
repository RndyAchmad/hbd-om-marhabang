"use client";
import { useEffect } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { Heart, Star, ShieldCheck } from "lucide-react";

// Pastikan file foto ini ada di folder /public/images/
const photos = [
  { src: "images/papa-1.jpeg", delay: 0.2 },
  { src: "images/papa-2.jpeg", delay: 0.4 },
  { src: "images/papa-3.jpeg", delay: 0.6 },
  { src: "images/papa-4.jpeg", delay: 0.8 },
];

export default function FinalPage() {
  useEffect(() => {
    // Efek kembang api konfeti saat halaman dimuat
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0, colors: ['#9333ea', '#c084fc', '#ffffff', '#eab308'] };

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);
      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: Math.random(), y: Math.random() - 0.2 } });
    }, 250);

    return () => clearInterval(interval); // Membersihkan interval saat komponen di-unmount
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center py-16 px-6 bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-purple-900/30 via-black to-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full space-y-12 text-center"
      >
        {/* Header Section */}
        <header className="space-y-4">
          <motion.div
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em]"
          >
            <Star size={12} fill="currentColor" /> HUT KE-50 TAHUN <Star size={12} fill="currentColor" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-serif leading-tight">
            Selamat Ulang Tahun, <br />
            <span className="text-purple-400 italic glow">Papa</span>
          </h1>
        </header>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-2 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: photo.delay, duration: 0.8 }}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
              className="aspect-3/4 overflow-hidden rounded-2xl border border-purple-500/20 bg-zinc-900 shadow-[0_0_20px_rgba(147,51,234,0.1)]"
            >
              <img
                src={photo.src}
                alt={`Papa ${index + 1}`}
                // KELAS DIBAWAH INI TELAH DIPERBAIKI (Grayscale dihapus)
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Tribute Section */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
            className="space-y-2"
          >
            <h2 className="text-3xl font-bold tracking-tight">Kolonel Marinir Marhabang, S.H., M.Tr.Hanla., M.M., M.Han.</h2>
            <div className="flex items-center justify-center gap-2 text-purple-400 uppercase tracking-[0.4em] text-xs font-bold">
              <ShieldCheck size={14} />
              <span>Komandan Resimen Artileri 2</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }}
            className="glass p-8 md:p-12 rounded-4xl italic text-zinc-300 text-lg leading-relaxed relative border-purple-500/30 bg-purple-900/10"
          >
            <span className="absolute -top-6 left-10 text-8xl text-purple-500/20 font-serif">“</span>
            Terima kasih sudah menjadi sosok yang tegas dalam membimbing, namun sangat lembut dalam mencintai kami. Papa adalah pahlawan sejati bagi keluarga ini. Kebanggaan kami selamanya.
          </motion.div>

          <motion.p
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-purple-400 font-serif text-2xl flex items-center justify-center gap-3"
          >
            We Love You Always, Pa! <Heart fill="currentColor" />
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}