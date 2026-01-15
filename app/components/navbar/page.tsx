"use client";

import { usePathname, useRouter } from "next/navigation";
import type { User } from "@/app/types";

interface NavbarProps {
  user?: User | null;
  logout?: () => void;
}

export default function Navbar({ user, logout }: NavbarProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div>
      {pathname === "/dashboard" ? (
        <nav className="flex items-center justify-between border-b border-zinc-200 bg-white px-6 py-4 dark:border-zinc-800 dark:bg-zinc-900">
          <h1 className="text-lg font-semibold text-zinc-800 dark:text-white">
            MyDashboard
          </h1>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-sm text-white">
                {user?.name?.[0]?.toUpperCase() || "U"}
              </div>
              <span className="text-sm text-zinc-700 dark:text-zinc-300">
                {user?.email || "User"}
              </span>
            </div>

            <button
              onClick={logout}
              className="rounded-md bg-red-500 px-3 py-1.5 text-sm text-white hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </nav>
      ) : (
        <nav className="flex items-center justify-between border-b border-zinc-200 bg-white px-6 py-4 dark:border-zinc-800 dark:bg-zinc-900">
          <h1 className="text-lg font-semibold text-zinc-800 dark:text-white">
            MyDashboard
          </h1>

          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push("/signup")}
              className="rounded-md bg-red-500 px-3 py-1.5 text-sm text-white hover:bg-red-600"
            >
              Sign Up
            </button>
            <button
              onClick={() => router.push("/login")}
              className="rounded-md bg-red-500 px-3 py-1.5 text-sm text-white hover:bg-red-600"
            >
              Login
            </button>
          </div>
        </nav>
      )}
    </div>
  );
}
