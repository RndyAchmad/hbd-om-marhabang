"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { MessageSquareQuote, Send, User } from "lucide-react";

const MESSAGES = [
    {
        from: "Mama Onie",
        text: "Selamat ulang tahun suamiku tercinta. Terima kasih ya suamiku yg selalu ada untuk kita,selalu kuatirkan kita,support kita. Di hari spesial ini,doa mama tak pernah putus untuk papa,semoga Allah SWT selalu melimpahkan berkah,kesehatan,rezeki yang halal,bahagia dunia akhirat,makin sayang sama keluarga,tetap rendah hati ya pa. Love u pap😘",
        color: "border-blue-500/50",
    },
    {
        from: "Icaa Cantikkk",
        text: "Selamat ulang tahun, Pa. Semoga setiap langkahmu selalu dalam lindungan Allah, diberikan kesehatan yang baik, rezeki yang lancar, karier yang semakin sukses, dan segala urusan dimudahkan. Semoga selalu diberi kebahagiaan dan umur yang penuh berkah.",
        color: "border-blue-500/50",
    },
    {
        from: "Aisss",
        text: "HBD Baba, semoga panjang umur, sehat selalu, dan diberikan rezeki yang lancar biar ngasih aku duit terus hehe. Doa in aku terus ya pa, biar aku bisa berubah menjadi lebih baik lagi, aamiin.",
        color: "border-blue-500/50",
    },
    {
        from: "Zahraa Comel",
        text: "aku cuman mau mengabadikan kenangan untuk ngasih tau papa seberapa papa sangat berarti untukku. papa bukan hanya papaku, tapi juga pembimbingku, kepercayaanku, dan salah satu teman terbaikku. bimbingan dan dukunganmu sangat berarti buat aku, dan aku sangat bersyukur yang papa telah lakukan. Aku berharap papa mendapatkan ulang tahun yang luar biasa, yang dipenuhi dengan cinta, tawa dan semua hal yang membuat papa bahagia.",
        color: "border-blue-500/50",
    },
    {
        from: "Dicky",
        text: "SELAMAT ULANG TAHUN KOMANDAN SEMOGA ULANG TAHUN DI YANG KE 50 INI SELALU DI BERIKAN KE SEHATAN  SELALU DAN PASTI SELALU DI LANCARKAN REJIKANYA DAN SEMOGA KARIER KEDEPANNYA SUKSES SELALU AMIIN (Hormat Komandan) ⚡️",
        color: "border-purple-500/50",
    },
    {
        from: "Ambi",
        text: "SELAMAT ULANG TAHUN KOMANDAN SEMOGA SEHAT SELALU DIBERIKAN KESEHATAN UMUR YANG PANJANG SERTA KEKUATAN DAN KEBIJAKSANAAN DALAM MEMIMPIN DAN MEMBERIKAN YANG TERBAIK KEPADA NEGARA DAN BANGSA",
        color: "border-purple-500/50",
    },
    {
        from: "Edi",
        text: "Assalamu'alaikum Selamat Malam Komandan mohon ijin saya ucapkan Selamat ulang tahun Komandan mohon ijin Di hari istimewa ini, semoga Komandan mendapatkan kebahagiaan dan kesuksesan berlimpah mohon ijin. Terima kasih atas kepemimpinan dan dedikasi Komandan, Semoga selalu diberkahi keberhasilan Mohon ijin",
        color: "border-purple-500/50",
    },
    {
        from: "Puti Linglung",
        text: "selamat ulang tahun om marhabang, terimakasihh sdh izinkan kita sering2 main ke rumah icaa hehe, maaf ya om banyak merepotkan. semoga panjang umur sehat selalu dilancarkan rezekinya. salam dari teman smp kakak ica",
        color: "border-red-500/50",
    },
    {
        from: "Mas Ren",
        text: "Selamat ulang tahun, Om Marhabang. Semoga Om selalu diberikan kesehatan, rezeki yang lancar, dan segala urusan dimudahkan. Semoga karier Om semakin sukses, selalu diberikan kekuatan dalam memimpin, serta terus mengabdi dengan kehormatan dan kebijaksanaan. Semoga keluarga juga selalu diberikan kebahagiaan, keharmonisan, dan perlindungan dalam setiap langkah.",
        color: "border-green-500/50",
    },
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
                            className="glass p-8 rounded-3xl relative group hover:bg-white/[0.05] transition-all"
                        >
                            {/* Quote Icon Background */}
                            <div className="absolute top-4 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <MessageSquareQuote size={40} className="text-purple-400" />
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg">
                                    {msg.from.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm tracking-wide">{msg.from}</h4>
                                    <div className="h-[2px] w-8 bg-purple-500 mt-1" />
                                </div>
                            </div>

                            <p className="text-zinc-300 italic leading-relaxed text-base font-light">
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