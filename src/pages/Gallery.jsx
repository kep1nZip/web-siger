import { useState } from "react";
import photos from "../data/gallery";

function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="max-w-6xl mx-auto px-5 pt-28 pb-16">
      <h1 className="text-4xl font-bold text-white mb-12">
        Foto Aib SIGERS
      </h1>

      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="break-inside-avoid relative group cursor-pointer"
            onClick={() => setSelected(photo)}
          >
            <img
              src={photo.src}
              alt={photo.caption}
              className="w-full rounded-2xl transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition rounded-2xl flex items-end p-4">
              <p className="text-white text-sm">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div className="max-w-4xl w-full px-4">
            <img
              src={selected.src}
              alt=""
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
            <p className="text-white mt-4 text-center">
              {selected.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
