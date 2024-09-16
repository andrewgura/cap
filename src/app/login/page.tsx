"use client";

import { FormEvent, useState } from "react";
import { useAuth } from "../hooks/Auth";

export default function Login() {
  const [name, setName] = useState("");
  const { signIn } = useAuth();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn(name);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-6 m-4">
      <input
        type="text"
        className="text-black"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
      >
        Sign In
      </button>
    </form>
  );
}
