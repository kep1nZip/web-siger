require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const { v2: cloudinary } = require("cloudinary");

const app = express();
const PORT = process.env.PORT || 8080;

// ===============================
// ✅ CORS CONFIG (PRODUCTION READY)
// ===============================

app.use(cors());

app.use(express.json());

// ===============================
// 🔐 SIMPLE AUTH
// ===============================

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const SECRET_TOKEN = process.env.SECRET_TOKEN;

app.post("/login", (req, res) => {
  const { password } = req.body;

  if (!ADMIN_PASSWORD || !SECRET_TOKEN) {
    return res.status(500).json({ message: "Server env belum diset!" });
  }

  if (password === ADMIN_PASSWORD) {
    return res.json({ token: SECRET_TOKEN });
  }

  res.status(401).json({ message: "Password salah!" });
});

function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(403).json({ message: "Token tidak ada!" });
  }

  const token = authHeader.split(" ")[1];

  if (token !== SECRET_TOKEN) {
    return res.status(401).json({ message: "Token tidak valid!" });
  }

  next();
}

// ===============================
// ☁️ CLOUDINARY CONFIG
// ===============================

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// ===============================
// 📁 JSON STORAGE
// ===============================

if (!fs.existsSync("photos.json")) {
  fs.writeFileSync("photos.json", JSON.stringify([]));
}

const upload = multer({ storage: multer.memoryStorage() });

// ===============================
// ROUTES
// ===============================

// Health check (biar root gak "Cannot GET /")
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.get("/photos", (req, res) => {
  const data = JSON.parse(fs.readFileSync("photos.json"));
  res.json(data);
});

app.post("/upload", authenticate, upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "File tidak ditemukan!" });
    }

    const { caption } = req.body;

    const stream = cloudinary.uploader.upload_stream(
      { folder: "aib-photos" },
      async (error, result) => {
        if (error) {
          return res.status(500).json({ message: "Upload gagal" });
        }

        const newPhoto = {
          id: Date.now(),
          src: result.secure_url,
          public_id: result.public_id,
          caption: caption || "No caption",
        };

        const photos = JSON.parse(fs.readFileSync("photos.json"));
        photos.unshift(newPhoto);
        fs.writeFileSync("photos.json", JSON.stringify(photos, null, 2));

        res.json(newPhoto);
      }
    );

    stream.end(req.file.buffer);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

app.delete("/photos/:id", authenticate, async (req, res) => {
  const id = parseInt(req.params.id);

  let photos = JSON.parse(fs.readFileSync("photos.json"));
  const photo = photos.find((p) => p.id === id);

  if (!photo) {
    return res.status(404).json({ message: "Foto tidak ditemukan" });
  }

  try {
    await cloudinary.uploader.destroy(photo.public_id);
  } catch (err) {
    return res.status(500).json({ message: "Gagal hapus dari Cloudinary" });
  }

  photos = photos.filter((p) => p.id !== id);
  fs.writeFileSync("photos.json", JSON.stringify(photos, null, 2));

  res.json({ message: "Foto berhasil dihapus" });
});

// ===============================
// START SERVER (HARUS PALING BAWAH)
// ===============================

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
