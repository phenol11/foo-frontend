"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/navbar/page";

export default function Dashboard() {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);
  const [data, setData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProtectedData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        router.push("/login");
        return;
      }

      try {
        const res = await fetch(
          "https://foo-backend-3w1o.onrender.com/api/protected",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (res.status === 401) {
          localStorage.removeItem("token");
          router.push("/login");
          return;
        }

        const result = await res.json();

        setMessage(result.message);
        console.log(result);
        setUser(result.user);
        setData(result);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProtectedData();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-black">
      {/* Navbar */}
      <Navbar user={user} logout={logout} />

      {/* Main Content */}
      <main className="p-6">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Account Card */}
          <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-zinc-900">
            <h3 className="text-sm font-medium text-zinc-500">Account</h3>
            <p className="mt-2 text-lg font-semibold text-zinc-800 dark:text-white">
              {data?.user.email}
            </p>
            <p className="text-sm text-zinc-500">
              Joined: {new Date(data?.user.createdAt).toDateString()}
            </p>
          </div>

          {/* Role */}
          <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-zinc-900">
            <h3 className="text-sm font-medium text-zinc-500">Role</h3>
            <p className="mt-2 text-lg font-semibold text-zinc-800 dark:text-white">
              {data?.user.role}
            </p>
          </div>

          {/* Notifications */}
          <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-zinc-900">
            <h3 className="text-sm font-medium text-zinc-500">Notifications</h3>
            <p className="mt-2 text-lg font-semibold text-zinc-800 dark:text-white">
              {data?.stats.notifications}
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-xl bg-white p-6 shadow-sm dark:bg-zinc-900">
          <h3 className="mb-2 text-lg font-semibold text-zinc-800 dark:text-white">
            Last Login
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            {new Date(data?.stats.lastLogin).toLocaleString()}
          </p>
        </div>
      </main>
    </div>
  );
}
