import { Database, FileSearch, MessageSquareText, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileSearch,
    title: "HR Policy PDF",
    description:
      "The company HR handbook acts as the knowledge source.",
  },
  {
    number: "02",
    icon: Database,
    title: "ChromaDB",
    description:
      "The handbook is split into chunks and stored as vector embeddings.",
  },
  {
    number: "03",
    icon: MessageSquareText,
    title: "Your Question",
    description:
      "Your question is converted into a semantic search query.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "AI Answer",
    description:
      "Relevant policy information is provided to the LLM to generate the response.",
  },
];

function About() {
  return (
    <div className="px-5 py-16 sm:px-8 lg:py-8">
      <div className="mx-auto max-w-3xl">
        <div className="max-w-100%">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
            About the project
          </p>
          <h1 className="!text-slate-950 mt-4 text-4xl font-black tracking-[-0.03em] sm:text-6xl">
            A simple RAG assistant for company HR policies.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-500">
            Instead of manually searching a long HR handbook, employees can
            ask questions using natural language and receive answers based
            on the organization's policy document.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    <Icon size={21} />
                  </div>

                  <span className="text-sm font-black text-slate-300">
                    {step.number}
                  </span>
                </div>

                <h2 className="!text-slate-950 mt-8 text-xl font-black">
                  {step.title}
                </h2>

                <p className="mt-3 leading-7 text-slate-500">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-[2rem] bg-slate-950 p-8 text-white sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-400">
            Technology
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "React",
              "Tailwind CSS",
              "React Router",
              "Django",
              "Django REST Framework",
              "LangChain",
              "ChromaDB",
              "Hugging Face",
              "Groq",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;