import initialPhotos from "../data/gallery";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { API_URL } from "../config";

function Gallery() {
  const { token } = useContext(AuthContext);
  const [photos, setPhotos] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [caption, setCaption] = useState("");

console.log("API_URL:", API_URL);

  // 🔥 FETCH PHOTOS
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const res = await fetch(`${API_URL}/photos`);
        const data = await res.json();
        setPhotos(data);
      } catch (err) {
        console.error("Server error, pakai fallback data:", err);
        setPhotos(initialPhotos);
      }
    };

    fetchPhotos();
  }, []);

  // 🔥 UPLOAD
  const handleUpload = async () => {
    if (!token) {
      alert("Harus login sebagai admin!");
      return;
    }

    if (!selectedFile) {
      alert("Pilih foto dulu!");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", selectedFile);
      formData.append("caption", caption);

      const res = await fetch(`${API_URL}/upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Upload gagal!");
        return;
      }

      setPhotos((prev) => [data, ...prev]);
      setSelectedFile(null);
      setCaption("");
      alert("Upload berhasil!");
    } catch (err) {
      console.error(err);
      alert("Server tidak terhubung!");
    }
  };

  // 🔥 DELETE
  const handleDelete = async (id) => {
    if (!token) {
      alert("Harus login sebagai admin!");
      return;
    }

    if (!window.confirm("Yakin mau hapus foto ini?")) return;

    try {
      const res = await fetch(`${API_URL}/photos/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Gagal hapus foto!");
        return;
      }

      setPhotos((prev) => prev.filter((photo) => photo.id !== id));
      alert("Foto berhasil dihapus!");
    } catch (err) {
      console.error(err);
      alert("Server tidak terhubung!");
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-20 pt-28 pb-20 relative">
      <h1 className="text-4xl font-bold text-white mb-12 text-center">
        Foto Aib SIGERS
      </h1>

      {/* 🔥 ADMIN UPLOAD SECTION */}
      {token && (
        <div className="flex flex-col items-center gap-4 mb-12 bg-white/10 p-6 rounded-2xl backdrop-blur-md">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setSelectedFile(e.target.files[0])}
            className="text-white"
          />

          <input
            type="text"
            placeholder="Masukkan caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="px-4 py-2 rounded-lg w-72"
          />

          <button
            onClick={handleUpload}
            className="bg-white text-black px-6 py-2 rounded-xl font-semibold hover:scale-105 transition"
          >
            + Upload Foto
          </button>
        </div>
      )}

      {/* BACKGROUND TEXT */}
      <div className="absolute top-10 left-0 w-full overflow-hidden opacity-10 pointer-events-none">
        <div className="marquee-text text-[140px] font-extrabold text-white whitespace-nowrap">
          Foto Aib &nbsp; Foto Aib &nbsp; Foto Aib &nbsp; Foto Aib
        </div>
      </div>

      {/* GALLERY GRID */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6 gap-6 space-y-6">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="break-inside-avoid relative group overflow-hidden rounded-2xl"
          >
            <a href={photo.src} target="_blank" rel="noopener noreferrer">
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full rounded-2xl transition duration-700 ease-out group-hover:scale-110 group-hover:brightness-75"
              />
            </a>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-5">
              <p className="text-white text-sm font-semibold leading-relaxed">
                {photo.caption}
              </p>
            </div>

            {/* 🔥 DELETE BUTTON */}
            {token && (
              <button
                onClick={() => handleDelete(photo.id)}
                className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition"
              >
                Hapus
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
