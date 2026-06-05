import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      login(res.data.token);

toast.success("Login Successful 🚀");

navigate("/dashboard");

    } catch (error) {
      toast.error("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">

      <form
        onSubmit={handleSubmit}
        className="bg-slate-900 p-8 rounded-2xl w-[400px] shadow-xl"
      >
        <h2 className="text-3xl text-white font-bold mb-6 text-center">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg mb-4 bg-slate-800 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg mb-4 bg-slate-800 text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-600 p-3 rounded-lg text-white font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;