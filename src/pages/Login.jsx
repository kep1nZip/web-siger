import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [password, setPassword] = useState("");
  const { token, setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  // 🔥 Kalau sudah login, langsung ke home
  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [token, navigate]);

  const handleLogin = async () => {
    if (!password) {
      return alert("Password tidak boleh kosong!");
    }

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok) {
        // Simpan ke context
        setToken(data.token);

        // Simpan ke localStorage biar tidak logout saat refresh
        localStorage.setItem("token", data.token);

        alert("Login berhasil!");
        navigate("/home");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Server tidak terhubung!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col gap-4 bg-zinc-900 p-8 rounded-xl w-80">
        <h1 className="text-white text-xl font-bold text-center">
          Login Admin
        </h1>

        <input
          type="password"
          placeholder="Masukkan password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-4 py-2 rounded-lg outline-none"
        />

        <button
          onClick={handleLogin}
          className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
