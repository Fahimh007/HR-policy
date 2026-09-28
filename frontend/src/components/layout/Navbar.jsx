import { Link, NavLink } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

function Navbar() {
  const navClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-medium transition ${
      isActive
        ? "bg-slate-900 text-white"
        : "text-slate-600 hover:bg-white hover:text-slate-950"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[#f7f6f2]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          to="/"
          className="flex min-h-11 items-center gap-2"
          aria-label="HR Policy Assistant home"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-white">
            <ShieldCheck size={20} />
          </div>

          <div>
            <p className="text-sm font-bold tracking-tight text-slate-950">
              HR Policy
            </p>
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
              AI Assistant
            </p>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Main navigation"
        >
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/ask" className={navClass}>
            Ask Policy
          </NavLink>

          <NavLink to="/about" className={navClass}>
            About
          </NavLink>
        </nav>

        <Link
          to="/ask"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
        >
          Ask HR
        </Link>
      </div>
    </header>
  );
}

export default Navbar;