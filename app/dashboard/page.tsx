"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/navbar/page";
import type { ProtectedResponse, User } from "../types";

export default function Dashboard() {
  const [data, setData] = useState<ProtectedResponse | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const router = useRouter();

  useEffect(() => {
    const fetchProtectedData = async () => {
      const token = localStorage.getItem("token");
      if (!token) return router.push("/login");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/protected`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (res.status === 401) {
        localStorage.removeItem("token");
        return router.push("/login");
      }

      const result: ProtectedResponse = await res.json();
      setData(result);
      setUser(result.user);
    };

    fetchProtectedData();
  }, [router]);

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-black">
      <Navbar user={user} logout={logout} />

      <main className="p-6">
        {data && (
          <>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-zinc-900">
                <h3 className="text-sm font-medium text-zinc-500">Account</h3>
                <p className="mt-2 text-lg font-semibold">{data.user.email}</p>
                <p className="text-sm text-zinc-500">
                  Joined: {new Date(data.user.createdAt).toDateString()}
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-zinc-900">
                <h3 className="text-sm font-medium text-zinc-500">Role</h3>
                <p className="mt-2 text-lg font-semibold">{data.user.role}</p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-zinc-900">
                <h3 className="text-sm font-medium text-zinc-500">
                  Notifications
                </h3>
                <p className="mt-2 text-lg font-semibold">
                  {data.stats.notifications}
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-white p-6 shadow-sm dark:bg-zinc-900">
              <h3 className="mb-2 text-lg font-semibold">Last Login</h3>
              <p>{new Date(data.stats.lastLogin).toLocaleString()}</p>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
