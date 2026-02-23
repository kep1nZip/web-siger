import fotbar from "../assets/fotbar.jpg";

function Quotes() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 py-20 text-white overflow-hidden">
      <div className="relative max-w-4xl md:max-w-6xl w-full text-center z-10">
        <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={fotbar}
            alt="Fotbar"
            className="
              w-full 
              max-h-[380px] 
              md:max-h-[600px] 
              object-cover 
              transition-all duration-700 
              group-hover:scale-105
            "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20"></div>
          <div className="absolute inset-0 flex items-center justify-center px-6 md:px-12">
            <blockquote className="
              text-white 
              font-extrabold 
              text-xl 
              md:text-4xl 
              leading-snug 
              drop-shadow-2xl 
              transition-all duration-700 
              group-hover:scale-105
            ">
              PAK, KAPAN ACC KRSNYAAAAAA
            </blockquote>
          </div>
        </div>

        <p className="text-zinc-400 mt-8 text-sm tracking-wide italic">
          — suara hati dari kami pejuang 3.5 semesters
        </p>

      </div>
    </div>
  );
}

export default Quotes;
