import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center gap-6">
      <button
        onClick={() => navigate("/login")}
        className="px-6 py-3 bg-white text-black rounded-xl"
      >
        Login sebagai Admin
      </button>

      <button
        onClick={() => navigate("/home")}
        className="px-6 py-3 bg-zinc-700 text-white rounded-xl"
      >
        Masuk sebagai Guest
      </button>
    </div>
  );
}

export default Landing;
