import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#f7f6f2]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-slate-950">
            HR Policy AI Assistant
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Ask questions and find answers from the company HR handbook.
          </p>
        </div>

        <div className="flex gap-5 text-sm text-slate-500">
          <Link
            to="/ask"
            className="hover:text-slate-950"
          >
            Ask Policy
          </Link>

          <Link
            to="/about"
            className="hover:text-slate-950"
          >
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;