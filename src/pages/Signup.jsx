import React, { useState } from "react";
import { auth } from "../firebase/firebaseConfig"; // ✅ fixed
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Input } from "../components/ui/input";   // ✅ fixed
import { Button } from "../components/ui/button"; // ✅ fixed
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSignup} className="bg-white shadow p-6 rounded-lg w-full max-w-sm space-y-4">
        <h2 className="text-xl font-semibold">Create an Account</h2>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password (6+ chars)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" className="w-full bg-blue-600 text-white">
          Sign Up
        </Button>
        <p className="text-sm text-center">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
