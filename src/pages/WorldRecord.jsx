import worldRecords from "../data/worldRecords";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function WorldRecord() {
  const { token } = useContext(AuthContext);

  return (
    <div className="max-w-6xl mx-auto px-5 pt-28 pb-16">
      
      <div className="absolute top-10 left-0 w-screen overflow-hidden opacity-10 pointer-events-none">
        <div className="marquee-text text-[140px] font-extrabold text-white whitespace-nowrap">
          WORLD RECORD &nbsp; WORLD RECORD &nbsp; WORLD RECORD &nbsp; WORLD RECORD &nbsp; WORLD RECORD
        </div>
      </div>

      <h1 className="text-4xl font-bold text-white text-center mb-14">
        World Record SIGERS
      </h1>


      <div className="space-y-16 max-w-6xl mx-auto">
        {worldRecords.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } bg-white rounded-3xl overflow-hidden shadow-xl`}
          >
            
            <img
              src={item.image}
              alt={item.title}
              className="md:w-1/2 w-full object-cover"
            />

            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4 text-zinc-900">
                {item.title}
              </h2>

              <p className="text-zinc-600 text-lg">
                {item.caption}
              </p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default WorldRecord;
