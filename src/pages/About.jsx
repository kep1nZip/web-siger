function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 text-white">

      <section className="mb-20">
        <h1 className="text-5xl font-bold mb-6">
          Tentang SIGERS
        </h1>

        <p className="text-zinc-300 text-lg max-w-3xl leading-relaxed">
          SIGERS bukan sekadar group, melainkan kumpulan orang-orang absurd dan stress karena dibantai organisasi, 
          mata kuliah, realita hidup, dan lainnya.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <img
          src="src\assets\fotbar.jpg"
          alt="SIGERS"
          className="rounded-2xl shadow-2xl"
        />

        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Awal Mula SIGERS
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            Berawal dari grup buat ngerjain matdis (matematika dasar) yang terdiri dari 4 orang 
            eh tiba-tiba nambah sampai 8 orang. Di sinilah kami berbagi suka, duka, freaky, jomok (yapi doang sih),
            dan perasaan lainnya.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-24">
        <div className="bg-zinc-900 p-6 rounded-2xl text-center">
          <h3 className="text-3xl font-bold">8</h3>
          <p className="text-zinc-400 text-sm">Member sekaligus Admint Aktif</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl text-center">
          <h3 className="text-3xl font-bold">nambah teros</h3>
          <p className="text-zinc-400 text-sm">Foto Aib</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl text-center">
          <h3 className="text-3xl font-bold">∞</h3>
          <p className="text-zinc-400 text-sm">Random Momentos</p>
        </div>

      </section>

      <section className="text-center max-w-3xl mx-auto">
        <blockquote className="text-2xl italic text-zinc-300 leading-relaxed">
          "halaaah"
        </blockquote>

        <p className="mt-4 text-zinc-500 text-sm">
          — Kata siapa tuh, YTTA ye WKWKWK.
        </p>
      </section>
    </div>
  );
}

export default About;
