import { ArrowRight, Sparkles, Search, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import PolicyCard, { policies } from "../components/PolicyCard";
import { IDCardLanyard } from "../components/ui/id-card-lanyard";

function Home() {
  return (
    <div className="min-h-screen"  >
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-50">
        <div className="mx-auto grid min-h-[20px] max-w-7xl items-start gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pt-10">
          
          {/* LEFT */}
          <div className="relative z-10 max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm">
              <Sparkles size={14} className="text-blue-600" />
              AI-powered HR policy search
            </div>
    
            <h1 className="text-5xl font-black tracking-[-0.045em] !text-slate-950 sm:text-6xl lg:text-7xl">
              Your HR policy,
              <span className="block text-blue-600">
                one question away.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Ask questions about company policies and get clear answers
              grounded in the HR Policy Handbook.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/ask"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-bold text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Ask a Policy Question
                <ArrowRight size={17} />
              </Link>

              <a
                href="#policies"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
              >
                <FileText size={17} />
                Explore Policies
              </a>
            </div>

            {/* Search preview */}
            <div className="mt-10 max-w-xl rounded-3xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-950/5">
              <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-4">
                <Search
                  size={19}
                  className="shrink-0 text-slate-400"
                />

                <span className="text-sm text-slate-400">
                  Try “How many annual leaves can I take?”
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT / LANYARD */}
          <div className="relative flex min-h-[600px] -translate-y-25 items-center justify-center lg:min-h-[680px]">
            <div className="absolute h-[40px] w-[420px] rounded-full bg-blue-500/10 blur-3xl" />

            <IDCardLanyard
              name="HR POLICY AI"
              role="Policy Assistant"
              brand="HR POLICY"
              brandTagline="AI Knowledge Assistant"
              pillars={["Search", "Understand", "Answer"]}
              location="Company HQ"
              idNumber="HR-2026"
              validThru="12/2029"
              site="hr-policy.local/ask"
              showHint={true}
              anchorX="50%"
              anchorY={0}
              zIndex={20}
            />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 py-7 sm:px-8 md:grid-cols-4">
          <div className="border-slate-200 px-4 text-center md:border-r">
            <p className="text-2xl font-black text-slate-950">01</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
              HR Handbook
            </p>
          </div>

          <div className="border-slate-200 px-4 text-center md:border-r">
            <p className="text-2xl font-black text-slate-950">06+</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Policy Areas
            </p>
          </div>

          <div className="border-slate-200 px-4 text-center md:border-r">
            <p className="text-2xl font-black text-slate-950">AI</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Natural Questions
            </p>
          </div>

          <div className="px-4 text-center">
            <p className="text-2xl font-black text-slate-950">PDF</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Knowledge Source
            </p>
          </div>
        </div>
      </section>

      {/* POLICIES */}
      <section
        id="policies"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"
      >
        <div className="max-w-100% ">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600 lg:text-center">
            What's inside
          </p>

          <h2 className="!text-slate-950 mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Everything you need to understand company policy.
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-500">
            Ask the assistant instead of manually searching through pages
            of HR documentation.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {policies.map((policy) => (
            <PolicyCard
              key={policy.title}
              policy={policy}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-14 text-white sm:px-12 lg:px-16">
          <div className="max-w-3xl flex flex-col items-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-400">
              Need an answer?
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Stop searching. Start asking.
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-slate-300">
              Ask a natural-language question and receive an answer based
              on the HR Policy Handbook.
            </p>

            <Link
              to="/ask"
              className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Ask HR Policy
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;