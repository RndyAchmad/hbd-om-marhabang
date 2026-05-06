"use client";

import { useRef, createContext, useContext, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MusicContext = createContext({ playMusic: () => { } });

export const useMusic = () => useContext(MusicContext);

export default function ClientWrapper({ children }: { children: ReactNode }) {
    const audioRef = useRef<HTMLAudioElement>(null);

    const playMusic = () => {
        if (audioRef.current) {
            audioRef.current.volume = 0.4;
            audioRef.current.play().catch(() => console.log("Playback blocked"));
        }
    };

    return (
        <MusicContext.Provider value={{ playMusic }}>
            <audio ref={audioRef} loop src="/musics/music.mp3" />
            <AnimatePresence mode="wait">
                <motion.main
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {children}
                </motion.main>
            </AnimatePresence>
        </MusicContext.Provider>
    );
}