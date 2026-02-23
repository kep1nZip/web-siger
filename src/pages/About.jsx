import { useEffect, useState } from "react";
import fotbar from "../assets/fotbar.jpg";

function About() {

  const texts = [
    "SIGERS bukan sekadar group.",
    "Ini tempat manusia absurd berkumpul.",
    "Stress karena organisasi, matkul, dan realita hidup.",
    "Penuh kerandoman, kejomokan, dll."
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    let typingSpeed = isDeleting ? 18 : 32;
    let pauseTime = 1500;

    const timeout = setTimeout(() => {

      if (!isDeleting) {
        setTypedText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex === 0) {
          setIsVisible(false);
          setTimeout(() => setIsVisible(true), 100);
        }

        if (charIndex === currentText.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }

      } else {
        setTypedText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }

    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <div className="relative text-white overflow-hidden">

      <div className="absolute w-[500px] h-[500px] bg-red-500/30 blur-3xl rounded-full top-[-120px] left-[-120px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-orange-400/30 blur-3xl rounded-full bottom-[-120px] right-[-80px]"></div>

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 relative z-10">

        <section className="mb-24 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Tentang{" "}
            <span className="bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
              SIGERS
            </span>
          </h1>

          <p
            className={`
              text-zinc-300 text-lg max-w-3xl mx-auto leading-relaxed min-h-[80px]
              transition-all duration-700 ease-out
              ${isVisible ? "opacity-100 blur-0" : "opacity-0 blur-md"}
            `}
          >
            {typedText}
            <span className="animate-pulse">|</span>
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center mb-24">

          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src={fotbar}
              alt="SIGERS"
              className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-5">
              Awal Mula SIGERS
            </h2>

            <p className="text-zinc-400 leading-relaxed text-lg">
              Berawal dari grup buat ngerjain matdis (matematika dasar) yang terdiri dari 4 orang 
              eh tiba-tiba nambah sampai 8 orang. Di sinilah kami berbagi suka, duka, freaky, jomok 
              (yapi doang sih), dan perasaan lainnya.
            </p>
          </div>

        </section>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-28 text-center">

          <div className="backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition">
            <h3 className="text-4xl font-extrabold">8</h3>
            <p className="text-zinc-400 text-sm mt-2">Member sekaligus Admin Aktif</p>
          </div>

          <div className="backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition">
            <h3 className="text-4xl font-extrabold">nambah terus</h3>
            <p className="text-zinc-400 text-sm mt-2">Foto Aib</p>
          </div>

          <div className="backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition">
            <h3 className="text-4xl font-extrabold">∞</h3>
            <p className="text-zinc-400 text-sm mt-2">Random Momentos</p>
          </div>

        </section>

        <section className="text-center max-w-4xl mx-auto mb-28">
          <h2 className="text-3xl font-bold mb-6">
            Bukan Sekadar Tongkrongan
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed">
            SIGERS Bojongsoang adalah kumpulan manusia absurd dengan tingkat kejomokan
            yang tidak bisa dijelaskan secara ilmiah. Dari war tak jelas, diskusi tak penting,
            sampai rencana yang tidak pernah terjadi.
          </p>
        </section>

        <section className="text-center max-w-3xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md p-10 rounded-2xl border border-white/10">
            
            <blockquote className="text-2xl italic text-zinc-200 leading-relaxed">
              "halaaah"
            </blockquote>

            <p className="mt-5 text-zinc-500 text-sm">
              — Kata siapa tuh, YTTA ye WKWKWK.
            </p>

          </div>
        </section>

      </div>
    </div>
  );
}

export default About;
