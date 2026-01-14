"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/navbar/page";

export default function LoginPage() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://foo-backend-3w1o.onrender.com/api/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await res.json();
      if (!res.ok) {
        setError(result.message);
        return;
      }

      router.push("/login");
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm rounded-xl bg-white p-6 shadow-md dark:bg-zinc-900"
        >
          <h2 className="mb-4 text-center text-xl font-bold text-zinc-800 dark:text-white">
            Sign Up
          </h2>
          {!!error && (
            <div className="mb-4 rounded-md bg-red-100 p-3 text-sm text-red-700">
              {error}
            </div>
          )}
          {/* Name */}
          <div className="mb-4">
            <label className="mb-1 block text-sm text-zinc-600 dark:text-zinc-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm text-zinc-800 outline-none focus:border-black dark:border-zinc-700 dark:text-white"
            />
          </div>
          {/* Email */}
          <div className="mb-4">
            <label className="mb-1 block text-sm text-zinc-600 dark:text-zinc-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm text-zinc-800 outline-none focus:border-black dark:border-zinc-700 dark:text-white"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="mb-1 block text-sm text-zinc-600 dark:text-zinc-300">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm text-zinc-800 outline-none focus:border-black dark:border-zinc-700 dark:text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-black py-2 text-white transition hover:bg-zinc-800"
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}
