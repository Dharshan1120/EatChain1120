import React, { useState } from "react";
import { auth } from "/firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Input } from "/components/ui/input";
import { Button } from "/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home"); // redirect after login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white shadow p-6 rounded-lg w-full max-w-sm space-y-4">
        <h2 className="text-xl font-semibold">Login to StreetSupply</h2>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <Button type="submit" className="w-full bg-blue-600 text-white">Login</Button>
        <p className="text-sm text-center">Don't have an account? <a href="/signup" className="text-blue-600">Sign up</a></p>
      </form>
    </div>
  );
}
