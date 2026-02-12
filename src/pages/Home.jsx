import MemberCard from "../components/MemberCard";
import members from "../data/members";

function Home() {
  return (
    <div className="relative overflow-hidden">

      <section
        className="w-full h-[625px] flex items-center justify-center text-center relative -mt-20"
        style={{
          backgroundImage: "url('src/assets/sigers-bubat.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl font-extrabold text-white mb-4">
            SIGERS Bojongsoang
          </h1>
          <p className="text-zinc-200 text-lg">
            Kumpulan member SIGERS yang penuh kejomokan (yapi doang sih kalo ini wkwk)
          </p>

          <a
            href="#members"
            className="inline-block mt-8 px-6 py-3 bg-gradient-to-r from-red-500 to-orange-400 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
          >
            Lihat Members ↓
          </a>

        </div>
      </section>

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
            id="members"
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
