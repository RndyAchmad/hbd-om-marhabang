"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";

export default function CandlePage() {
    const [isBlown, setIsBlown] = useState(false);
    const router = useRouter();
    const analyserRef = useRef<AnalyserNode | null>(null);

    useEffect(() => {
        if (navigator.mediaDevices?.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
                const audioContext = new AudioContext();
                const source = audioContext.createMediaStreamSource(stream);
                const analyser = audioContext.createAnalyser();
                source.connect(analyser);
                analyser.fftSize = 256;
                analyserRef.current = analyser;

                const checkBlow = () => {
                    if (isBlown) return;
                    const data = new Uint8Array(analyser.frequencyBinCount);
                    analyser.getByteFrequencyData(data);
                    const avg = data.reduce((a, b) => a + b) / data.length;
                    if (avg > 55) handleBlow(); else requestAnimationFrame(checkBlow);
                };
                checkBlow();
            }).catch(() => console.log("Mic blocked"));
        }
    }, [isBlown]);

    const handleBlow = () => {
        setIsBlown(true);
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#9333ea', '#c084fc', '#ffffff']
        });
        // UBAH INI: dari /hallo-papa ke /ucapan
        setTimeout(() => router.push("/ucapan"), 2500);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black">
            <div className="text-center mb-16 animate-fadeIn">
                <h2 className="text-2xl font-serif italic text-purple-400">Make a Wish, Pa...</h2>
                <p className="text-zinc-500 text-sm">Tiup layarnya atau klik apinya!</p>
            </div>
            <div className="relative cursor-pointer" onClick={handleBlow}>
                {/* Batang lilin warna ungu */}
                <div className="w-10 h-32 bg-purple-700 rounded-t-lg shadow-[0_0_20px_rgba(147,51,234,0.3)]" />
                {!isBlown && (
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-8 h-12 bg-yellow-400 rounded-full animate-bounce blur-sm shadow-[0_0_30px_#facc15]" />
                )}
            </div>
        </div>
    );
}