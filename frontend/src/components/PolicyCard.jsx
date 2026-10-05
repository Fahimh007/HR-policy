import {
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  HeartPulse,
  Laptop,
  ShieldCheck,
} from "lucide-react";

const policies = [
  {
    title: "Employee Handbook",
    description: "General company rules, benefits, and workplace information.",
    icon: BookOpen,
  },
  {
    title: "Leave Policy",
    description: "Annual leave, sick leave, maternity leave, and holidays.",
    icon: CalendarDays,
  },
  {
    title: "Remote Work",
    description: "Guidelines for working remotely and hybrid arrangements.",
    icon: Laptop,
  },
  {
    title: "Salary Policy",
    description: "Salary payments, reviews, deductions, and compensation.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Insurance Policy",
    description: "Information about company-provided employee insurance.",
    icon: HeartPulse,
  },
  {
    title: "Code of Conduct",
    description: "Expected workplace behavior and professional standards.",
    icon: ShieldCheck,
  },
];

function PolicyCard({ policy }) {
  const Icon = policy.icon;

  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-900 transition group-hover:bg-blue-600 group-hover:text-white shadow-lg shadow-black-500/50">
        <Icon size={20} />
      </div>

      <h3 className="mt-5 text-lg font-bold tracking-tight text-slate-950">
        {policy.title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {policy.description}
      </p>
    </article>
  );
}

export { policies };
export default PolicyCard;