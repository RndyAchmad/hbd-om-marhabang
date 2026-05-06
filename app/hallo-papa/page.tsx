"use client";
import { useEffect } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { Heart, Star, ShieldCheck } from "lucide-react";

const photos = [
  { src: "images/papa-1.jpeg", delay: 0.2, wide: false },
  { src: "images/papa-2.jpeg", delay: 0.4, wide: false },
  { src: "images/papa-3.jpeg", delay: 0.6, wide: false },
  { src: "images/papa-4.jpeg", delay: 0.8, wide: false },
  { src: "images/keluarga-1.jpeg", delay: 1.0, wide: true },
  { src: "images/keluarga-7.jpeg", delay: 1.2, wide: false },
  { src: "images/keluarga-3.jpeg", delay: 1.4, wide: false },
  { src: "images/keluarga-4.jpeg", delay: 1.6, wide: false },
  { src: "images/keluarga-6.jpeg", delay: 1.8, wide: false },
  { src: "images/keluarga-2.jpeg", delay: 2.0, wide: true },
];

export default function FinalPage() {
  useEffect(() => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0, colors: ['#9333ea', '#c084fc', '#ffffff', '#eab308'] };

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);
      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: Math.random(), y: Math.random() - 0.2 } });
    }, 250);

    return () => clearInterval(interval);
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
        <div className="grid grid-cols-2 gap-6 md:gap-10">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: photo.delay, duration: 0.8 }}
              className={`${
                // Wide: Dibuat tinggi (3/2) supaya area foto luas
                // Portrait: Dibuat sangat tinggi (9/16) supaya tidak memotong kepala/kaki
                photo.wide ? "col-span-2 aspect-[3/2] md:aspect-[16/7]" : "aspect-[9/16]"
                } overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 group relative`}
            >
              <img
                src={photo.src}
                alt="Memory"
                className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              // object-center memastikan potongan mulai dari tengah. 
              // Jika sering terpotong di kepala, ganti jadi object-top
              />

              {/* Overlay tetap ada tapi lebih transparan agar foto terlihat jelas */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-white text-xs font-bold tracking-[0.2em] uppercase">
                  Momen Berharga {index + 1}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tribute Section - Delay disesuaikan agar tidak balapan dengan foto */}
        <div className="space-y-8 pt-4 pb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4 }} // Delay ditingkatkan (setelah foto terakhir muncul)
            className="space-y-3"
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight px-4 leading-snug text-white">
              Kolonel Marinir Marhabang, <br className="hidden md:block" />
              <span className="text-lg md:text-xl font-medium block mt-1 text-zinc-400 text-[14px]">
                S.H., M.Tr.Hanla., M.M., M.Han.
              </span>
            </h2>
            <div className="flex items-center justify-center gap-2 text-purple-500 uppercase tracking-[0.3em] text-[10px] font-black">
              <ShieldCheck size={16} />
              <span>Komandan Resimen Artileri 2</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8 }} // Delay ditingkatkan
            className="p-8 md:p-12 rounded-[2rem] italic text-zinc-300 text-lg leading-relaxed relative border border-purple-500/30 bg-purple-900/10 backdrop-blur-md"
          >
            <span className="absolute -top-6 left-10 text-8xl text-purple-500/20 font-serif">“</span>
            Terima kasih sudah menjadi sosok yang tegas dalam membimbing, namun sangat lembut dalam mencintai kami. Papa adalah pahlawan sejati bagi keluarga ini. Kebanggaan kami selamanya.
          </motion.div>

          <motion.p
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2, delay: 3.2 }}
            className="text-purple-400 font-serif text-2xl flex items-center justify-center gap-3"
          >
            We Love You Always, Pa! <Heart fill="currentColor" />
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}