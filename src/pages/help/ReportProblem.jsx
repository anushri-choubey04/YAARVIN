import { useState } from "react";

export default function ReportProblem() {
  const [issue, setIssue] = useState("");

  return (
    <section className="min-h-screen bg-black text-white px-4 md:px-12 py-8 pb-28">
      <h1 className="text-2xl font-bold mb-6">Report a Problem</h1>

      <div className="bg-zinc-900 rounded-xl p-5 max-w-md">
        <textarea
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          placeholder="Describe the issue clearly..."
          className="w-full bg-black border border-zinc-700 rounded-lg p-3 text-sm outline-none"
          rows={4}
        />

        <button
          className="mt-4 w-full bg-white text-black py-3 rounded-xl font-semibold"
          onClick={() => alert("Issue reported successfully")}
        >
          Submit
        </button>
      </div>
    </section>
  );
}
