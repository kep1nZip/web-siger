import MemberCard from "../components/MemberCard";
import members from "../data/members";
import heroImage from "../assets/sigers-bubat.jpg"; // ✅ FIX DI SINI

function Home() {
  return (
    <div className="relative overflow-hidden">

      <section
        className="relative w-full h-[720px] flex items-center justify-center text-center overflow-hidden"
      >
        <div
          className="absolute inset-0 scale-110"
          style={{
            backgroundImage: `url(${heroImage})`, // ✅ FIX DI SINI
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-red-900/40 via-transparent to-orange-500/30"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(0,0,0,0.8))]"></div>
          <div className="relative z-10 max-w-4xl px-6">

            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
              SIGERS Bojongsoang
            </h1>

            <p className="text-zinc-200 text-lg md:text-xl mt-6 leading-relaxed">
              Kumpulan member SIGERS yang penuh kejomokan  
              <span className="text-orange-300 font-semibold"> (yapi doang sih kalo ini wkwk)</span>
            </p>

            <a
              href="#members"
              className="inline-flex items-center gap-3 mt-10 px-8 py-4 
              bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400
              text-white font-semibold rounded-full shadow-2xl
              hover:scale-105 hover:shadow-orange-500/40
              transition duration-300"
            >
              Lihat Members
              <span className="text-xl">↓</span>
            </a>
            
          </div>
          <div className="absolute w-[400px] h-[400px] bg-red-500/30 blur-3xl rounded-full top-[-100px] left-[-100px]"></div>
          <div className="absolute w-[350px] h-[350px] bg-orange-400/30 blur-3xl rounded-full bottom-[-120px] right-[-80px]"></div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">

          <div className="backdrop-blur-md bg-white/5 rounded-2xl p-7 border border-white/10 hover:bg-white/10 transition">
            <h2 className="text-4xl font-extrabold text-white">8</h2>
            <p className="text-zinc-200 mt-2">Member sekaligus Admin</p>
          </div>

          <div className="backdrop-blur-md bg-white/5 rounded-2xl p-7 border border-white/10 hover:bg-white/10 transition">
            <h2 className="text-4xl font-extrabold text-white">nambah terus</h2>
            <p className="text-zinc-200 mt-2">Foto Aib</p>
          </div>

          <div className="backdrop-blur-md bg-white/5 rounded-2xl p-7 border border-white/10 hover:bg-white/10 transition">
            <h2 className="text-4xl font-extrabold text-white">∞</h2>
            <p className="text-zinc-200 mt-2">Random Momentos</p>
          </div>

        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-10 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Bukan Sekadar Tongkrongan
        </h2>
        <p className="text-white leading-relaxed text-lg">
          SIGERS Bojongsoang adalah kumpulan manusia absurd dengan tingkat 
          kejomokan yang tidak bisa dijelaskan secara ilmiah. 
          Dari war tak jelas, diskusi tak penting, sampai rencana yang tidak pernah terjadi.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      </div>

      <div id="members" className="relative pt-12 pb-16">

        <div className="absolute top-1 left-0 w-screen overflow-hidden opacity-10 pointer-events-none">
          <div className="marquee-text text-[140px] font-extrabold text-white whitespace-nowrap">
            OUR MEMBERS &nbsp; OUR MEMBERS &nbsp; OUR MEMBERS &nbsp; OUR MEMBERS &nbsp; OUR MEMBERS
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-5 relative z-10">
          <h1 className="text-4xl font-bold mb-12 text-white">
            Member SIGERS
          </h1>

          <div
            className=" 
            columns-1 
            sm:columns-2 
            lg:columns-3 
            gap-8
            [column-fill:_balance]"
          >
            {members.map((m, index) => (
              <div key={index} className="mb-8 break-inside-avoid">
                <MemberCard member={m}/>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;