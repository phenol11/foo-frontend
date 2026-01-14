import Navbar from "./components/navbar/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="mx-auto mt-24 max-w-5xl px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
          Secure Authentication Platform
          <span className="block text-red-500">Built for Modern Web Apps</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          A full-stack authentication system powered by JWT, MongoDB and a
          modern Next.js frontend. Login, protected routes, user sessions and
          secure API access — all built for production.
        </p>

        {/* Trust Badges */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <div className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-zinc-700 shadow-sm dark:bg-zinc-900 dark:text-zinc-300">
            JWT-based authentication
          </div>
          <div className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-zinc-700 shadow-sm dark:bg-zinc-900 dark:text-zinc-300">
            Secure protected routes
          </div>
          <div className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-zinc-700 shadow-sm dark:bg-zinc-900 dark:text-zinc-300">
            MongoDB user storage
          </div>
          <div className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-zinc-700 shadow-sm dark:bg-zinc-900 dark:text-zinc-300">
            Production-ready API
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto mt-24 max-w-6xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-zinc-900">
            <h3 className="text-lg font-semibold text-zinc-800 dark:text-white">
              🔐 Secure Login
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Passwords are hashed with bcrypt and authenticated using signed
              JWT tokens.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-zinc-900">
            <h3 className="text-lg font-semibold text-zinc-800 dark:text-white">
              🛡 Protected APIs
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Only logged-in users can access sensitive backend routes using
              Bearer token authorization.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-zinc-900">
            <h3 className="text-lg font-semibold text-zinc-800 dark:text-white">
              👤 User Sessions
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Each request securely identifies the logged-in user from the token
              and database.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-zinc-900">
            <h3 className="text-lg font-semibold text-zinc-800 dark:text-white">
              ⚡ Fast & Scalable
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Built on Express, MongoDB and deployed on Render for real-world
              performance.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-zinc-900">
            <h3 className="text-lg font-semibold text-zinc-800 dark:text-white">
              🧠 Modern Stack
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Next.js frontend with client-side routing and API-based
              authentication.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-zinc-900">
            <h3 className="text-lg font-semibold text-zinc-800 dark:text-white">
              🚀 Production Ready
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Deployed backend, protected endpoints, real users, real sessions —
              not a toy project.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 border-t border-zinc-200 px-6 py-10 text-center dark:border-zinc-800">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Built by Afeez Mustapha — Full-Stack Authentication System
        </p>
      </footer>
    </div>
  );
}
