import { useState } from "react";
import {
  ArrowLeft,
  Bot,
  LoaderCircle,
  Send,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";

function AskPolicy() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const askQuestion = async (e) => {
    e.preventDefault();

    if (!question.trim()) {
      return;
    }

    setLoading(true);
    setError("");
    setAnswer(null);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/chat/",
        {
          question: question.trim(),
        }
      );

      setAnswer(response.data);
    } catch (err) {
      console.error(err);

      setError(
        "Unable to connect to the HR Policy Assistant. Please make sure the Django backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  const exampleQuestions = [
    "How many annual leaves can I take?",
    "Can employees work from home?",
    "What is the maternity leave policy?",
    "Does the company provide health insurance?",
    "What is the salary payment date?",
  ];

  return (
    <div className="min-h-[calc(100vh-72px)] bg-slate-50 px-5 py-8 sm:px-8 lg:py-1">
      <div className="mx-auto max-w-4xl">
        {/* HEADER */}
        <div className="max-w-100%">
          <Link
            to="/"
            className="flex min-h-11 w-fit items-center gap-2 text-left text-sm font-semibold text-slate-500 transition hover:text-slate-950"
          >
            <ArrowLeft size={16} />
            Back home
          </Link>

          <div className="mt-5 flex flex-col items-center gap-4 text-center sm:mt-12">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
              <Bot size={23} />
            </div>

            <div>
              <p className="text-sm font-semibold text-blue-600">
                HR Policy Assistant
              </p>

              <h1 className="!text-slate-950 text-3xl font-black tracking-tight sm:text-4xl">
                Ask your policy question.
              </h1>
              <p className="mx-auto max-w-2xl text-center leading-7 text-slate-500">
                Ask a question in plain English. The assistant will search the
                HR Policy Handbook and return the relevant answer with source
                pages.
              </p>
            </div>
          </div>


        </div>

        {/* FORM */}
        <form
          onSubmit={askQuestion}
          className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl shadow-slate-950/5 sm:p-6"
        >
          <label
            htmlFor="policy-question"
            className="mb-3 block text-sm font-bold text-slate-900"
          >
            Your question
          </label>

          <textarea
            id="policy-question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Example: How many annual leaves can I take?"
            rows={5}
            className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
          />

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-400">
              Answers are generated from the HR Policy Handbook.
            </p>

            <button
              type="submit"
              disabled={loading || !question.trim()}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-bold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? (
                <>
                  <LoaderCircle
                    size={17}
                    className="animate-spin"
                  />
                  Searching...
                </>
              ) : (
                <>
                  <Send size={17} />
                  Ask Policy
                </>
              )}
            </button>
          </div>
        </form>

        {/* EXAMPLES */}
        {!answer && !loading && (
          <section className="my-10">
            <p className="text-sm font-bold text-slate-950">
              Try one of these
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {exampleQuestions.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setQuestion(item)}
                  className="min-h-12 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-medium text-slate-600 transition hover:border-blue-300 hover:bg-blue-50 hover:text-slate-950"
                >
                  {item}
                </button>
              ))}
            </div>
          </section>
        )}

        {/* ERROR */}
        {error && (
          <div
            role="alert"
            className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700"
          >
            {error}
          </div>
        )}

        {/* ANSWER */}
        {answer && (
          <section className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/5 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                <Bot size={19} />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-bold text-slate-950">
                  HR Policy Assistant
                </p>

                <div className="mt-4 whitespace-pre-wrap text-[15px] leading-7 text-slate-600">
                  {answer.answer}
                </div>
              </div>
            </div>

            {/* SOURCES */}
            {answer.sources?.length > 0 && (
              <div className="mt-8 border-t border-slate-200 pt-6">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-950">
                  <FileText size={17} />
                  Sources
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {answer.sources.map((source, index) => (
                    <div
                      key={`${source.page}-${index}`}
                      className="rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-600"
                    >
                      {source.document} · Page {source.page}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}

export default AskPolicy;